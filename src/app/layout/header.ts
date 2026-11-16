import { DOCUMENT } from '@angular/common';
import { Component, DestroyRef, HostListener, effect, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LANGUAGES, LanguageService } from '../core/language.service';
import { NAV_ITEMS, NavId, PROFILE } from '../core/cv.data';
import { ThemeService } from '../core/theme.service';
import { Icon } from '../shared/icon';

@Component({
  selector: 'app-header',
  imports: [RouterLink, TranslatePipe, Icon],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly theme = inject(ThemeService);
  protected readonly lang = inject(LanguageService);
  private readonly doc = inject(DOCUMENT);

  protected readonly languages = LANGUAGES;
  protected readonly items = NAV_ITEMS;
  protected readonly name = PROFILE.name;
  protected readonly menuOpen = signal(false);
  protected readonly active = signal<NavId>('about');
  protected readonly scrolled = signal(false);

  constructor() {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) this.active.set(visible.target.id as NavId);
      },
      { rootMargin: '-35% 0px -55% 0px' },
    );
    // Sections are rendered after the language file loads, so observe whichever ones exist after each change.
    effect(() => {
      this.lang.c();
      queueMicrotask(() => {
        observer.disconnect();
        this.items.forEach((id) => {
          const el = this.doc.getElementById(id);
          if (el) observer.observe(el);
        });
      });
    });
    inject(DestroyRef).onDestroy(() => observer.disconnect());
  }

  @HostListener('window:scroll')
  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 8);
  }

  @HostListener('document:keydown.escape')
  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }
}
