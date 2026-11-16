import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../core/language.service';
import { SCHOOL_LINKS } from '../core/cv.data';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';
import { SectionHeading } from '../shared/section-heading';

@Component({
  selector: 'app-education',
  imports: [TranslatePipe, SectionHeading, Icon, Reveal],
  template: `
    <section id="education" class="section section--alt">
      <div class="container">
        <app-section-heading
          [kicker]="'content.education.kicker' | translate"
          [title]="'content.education.title' | translate"
        />

        <div class="layout">
          <ul class="degrees">
            @for (e of lang.c()?.education?.items; track e.title; let i = $index) {
              <li class="card" appReveal>
                <p class="date">{{ e.date }}</p>
                <h3>
                  <a [href]="links[i]" target="_blank" rel="noopener noreferrer"
                    >{{ e.title }}<app-icon name="external" [size]="14"
                  /></a>
                </h3>
                <p class="place">{{ e.place }}</p>
              </li>
            }
          </ul>

          <aside class="side">
            <div class="card box" appReveal>
              <h3><app-icon name="globe" />{{ 'content.education.languagesTitle' | translate }}</h3>
              <ul>
                @for (l of lang.c()?.education?.languages; track l.name) {
                  <li>
                    <span>{{ l.name }}</span><span class="muted">{{ l.level }}</span>
                  </li>
                }
              </ul>
            </div>
            <div class="card box" appReveal>
              <h3><app-icon name="pin" />{{ 'content.education.interestsTitle' | translate }}</h3>
              <ul class="chips">
                @for (h of lang.c()?.education?.interests; track h) {
                  <li class="chip">{{ h }}</li>
                }
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  `,
  styles: `
    .layout {
      display: grid;
      gap: 1.5rem;
    }
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .degrees {
      display: grid;
      gap: 1rem;
    }
    .degrees li {
      padding: 1.25rem 1.4rem;
    }
    .date {
      margin: 0 0 0.35rem;
      color: var(--accent);
      font: 600 0.8rem/1 var(--font-mono);
    }
    h3 {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin: 0;
      font-size: 1.02rem;
      line-height: 1.4;
    }
    h3 a {
      color: var(--text);
      text-decoration: none;
    }
    h3 a:hover {
      color: var(--accent);
      text-decoration: underline;
    }
    h3 a app-icon {
      display: inline-flex;
      margin-inline-start: 0.4rem;
      vertical-align: -1px;
      opacity: 0.6;
    }
    .place {
      margin: 0.3rem 0 0;
      color: var(--text-muted);
      font-size: 0.92rem;
    }
    .side {
      display: grid;
      gap: 1rem;
      align-content: start;
    }
    .box {
      padding: 1.25rem 1.4rem;
    }
    .box h3 {
      margin-block-end: 0.9rem;
    }
    .box h3 app-icon {
      color: var(--accent);
    }
    .box li:not(.chip) {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      padding-block: 0.45rem;
      border-block-end: 1px solid var(--border);
    }
    .box li:last-child {
      border-block-end: 0;
    }
    .muted {
      color: var(--text-muted);
    }
    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    @media (min-width: 60rem) {
      .layout {
        grid-template-columns: 1.4fr 0.6fr;
        gap: 2rem;
      }
    }
  `,
})
export class Education {
  protected readonly lang = inject(LanguageService);
  protected readonly links = SCHOOL_LINKS;
}
