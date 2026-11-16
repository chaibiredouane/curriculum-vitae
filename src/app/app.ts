import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ThemeService } from './core/theme.service';
import { LanguageService } from './core/language.service';
import { Header } from './layout/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Header, TranslatePipe],
  template: `
    <a class="skip" routerLink="/cv" fragment="about">{{ 'content.nav.skip' | translate }}</a>
    <app-header />
    <main>
      <router-outlet />
    </main>
  `,
  styles: `
    .skip {
      position: fixed;
      inset-block-start: 0.5rem;
      inset-inline-start: 0.5rem;
      z-index: 100;
      padding: 0.6rem 1rem;
      border-radius: 8px;
      background: var(--accent);
      color: var(--on-accent);
      transform: translateY(-200%);
    }
    .skip:focus {
      transform: none;
    }
  `,
})
export class App {
  // Injected eagerly so the saved theme and language are applied on startup.
  private readonly theme = inject(ThemeService);
  private readonly lang = inject(LanguageService);
}
