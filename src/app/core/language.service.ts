import { DOCUMENT } from '@angular/common';
import { Injectable, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import type { Content } from './content.model';

export interface Language {
  code: 'en' | 'fr' | 'ar';
  label: string;
  dir: 'ltr' | 'rtl';
}

export const LANGUAGES: Language[] = [
  { code: 'en', label: 'English', dir: 'ltr' },
  { code: 'fr', label: 'Français', dir: 'ltr' },
  { code: 'ar', label: 'العربية', dir: 'rtl' },
];

const STORAGE_KEY = 'cv-lang';

/** Owns the active language, the document direction (RTL for Arabic) and the localized page metadata. */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly translate = inject(TranslateService);
  private readonly doc = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  readonly current = signal<Language>(this.initial());
  /** The whole `content` tree of the active language, for lists that the translate pipe can't iterate. */
  private readonly raw = toSignal(this.translate.stream('content'), {
    initialValue: null as unknown,
  });
  /** Null until the active language file has loaded. */
  readonly c = computed(() => (typeof this.raw() === 'object' ? (this.raw() as Content) : null));

  constructor() {
    this.use(this.current());
  }

  use(lang: Language): void {
    this.current.set(lang);
    this.translate.use(lang.code);
    const root = this.doc.documentElement;
    root.lang = lang.code;
    root.dir = lang.dir;
    try {
      localStorage.setItem(STORAGE_KEY, lang.code);
    } catch {
      /* ignore */
    }
    this.translate.get(['meta.title', 'meta.description']).subscribe((t) => {
      this.title.setTitle(t['meta.title']);
      this.meta.updateTag({ name: 'description', content: t['meta.description'] });
      this.meta.updateTag({ property: 'og:title', content: t['meta.title'] });
      this.meta.updateTag({ property: 'og:description', content: t['meta.description'] });
      this.meta.updateTag({ property: 'og:locale', content: lang.code });
    });
  }

  private initial(): Language {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    return LANGUAGES.find((l) => l.code === saved) ?? LANGUAGES[0];
  }
}
