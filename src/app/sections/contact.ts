import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { EASY_MAT_UI, PROFILE } from '../core/cv.data';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';

@Component({
  selector: 'app-contact',
  imports: [RouterLink, TranslatePipe, Icon, Reveal],
  template: `
    <section id="contact" class="section">
      <div class="container">
        <div class="cta card" appReveal>
          <p class="kicker">{{ 'content.contact.kicker' | translate }}</p>
          <h2>{{ 'content.contact.title' | translate }}</h2>
          <p class="text">{{ 'content.contact.text' | translate }}</p>

          <ul class="items">
            <li>
              <app-icon name="mail" />
              <div>
                <span class="label">{{ 'content.contact.email' | translate }}</span>
                <a [href]="'mailto:' + p.email">{{ p.email }}</a>
              </div>
            </li>
            <li>
              <app-icon name="phone" />
              <div>
                <span class="label">{{ 'content.contact.phone' | translate }}</span>
                <a [href]="'tel:' + phoneHref">{{ p.phone }}</a>
              </div>
            </li>
            <li>
              <app-icon name="pin" />
              <div>
                <span class="label">{{ 'content.contact.location' | translate }}</span>
                <span>{{ 'content.contact.locationValue' | translate }}</span>
              </div>
            </li>
          </ul>

          <div class="actions">
            <a class="btn btn--primary" [href]="'mailto:' + p.email"
              ><app-icon name="mail" [size]="18" />{{ 'content.hero.ctaContact' | translate }}</a
            >
            <a class="btn" [href]="p.linkedin" target="_blank" rel="noopener noreferrer"
              ><app-icon name="linkedin" [size]="18" />LinkedIn</a
            >
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container row">
        <p>{{ 'content.contact.rights' | translate }}</p>
        <nav class="social" aria-label="Links">
          <a [href]="p.linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            ><app-icon name="linkedin"
          /></a>
          <a [href]="links.github" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            ><app-icon name="github"
          /></a>
          <a [href]="links.npm" target="_blank" rel="noopener noreferrer" aria-label="npm"
            ><app-icon name="npm"
          /></a>
        </nav>
        <a class="top" routerLink="/cv" fragment="top"
          >{{ 'content.contact.top' | translate }}<app-icon name="arrowUp" [size]="16"
        /></a>
      </div>
    </footer>
  `,
  styles: `
    .cta {
      padding: clamp(1.5rem, 5vw, 3.5rem);
      text-align: center;
      background: radial-gradient(circle at 50% 0%, var(--glow), transparent 60%), var(--surface);
    }
    .kicker {
      margin: 0 0 0.6rem;
      font: 600 0.8rem/1 var(--font-mono);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--accent);
    }
    h2 {
      margin: 0;
      font-size: clamp(1.9rem, 5vw, 3rem);
      letter-spacing: -0.03em;
    }
    .text {
      max-width: 36rem;
      margin: 1rem auto 2rem;
      color: var(--text-muted);
    }
    .items {
      display: grid;
      gap: 1rem;
      margin: 0 0 2rem;
      padding: 0;
      list-style: none;
      text-align: start;
    }
    .items li {
      display: flex;
      gap: 0.9rem;
      align-items: center;
      padding: 1rem 1.2rem;
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      background: var(--bg);
    }
    .items app-icon {
      color: var(--accent);
    }
    .items div {
      display: flex;
      flex-direction: column;
      min-width: 0;
    }
    .items a,
    .items span:not(.label) {
      color: var(--text);
      font-weight: 600;
      text-decoration: none;
      overflow-wrap: anywhere;
    }
    .items a:hover {
      color: var(--accent);
    }
    .label {
      color: var(--text-muted);
      font-size: 0.78rem;
    }
    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      justify-content: center;
    }
    .footer {
      padding-block: 1.75rem;
      border-block-start: 1px solid var(--border);
      color: var(--text-muted);
      font-size: 0.88rem;
    }
    .row {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      align-items: center;
      justify-content: space-between;
    }
    .row p {
      margin: 0;
    }
    .social {
      display: flex;
      gap: 0.5rem;
    }
    .social a,
    .top {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      min-height: 2.75rem;
      min-width: 2.75rem;
      justify-content: center;
      color: var(--text-muted);
      text-decoration: none;
    }
    .social a:hover,
    .top:hover {
      color: var(--accent);
    }
    @media (min-width: 48rem) {
      .items {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  `,
})
export class Contact {
  protected readonly p = PROFILE;
  protected readonly links = EASY_MAT_UI;
  protected readonly phoneHref = PROFILE.phone.replace(/\s/g, '');
}
