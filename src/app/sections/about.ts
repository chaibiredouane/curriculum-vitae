import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../core/language.service';
import { Reveal } from '../shared/reveal';
import { SectionHeading } from '../shared/section-heading';

@Component({
  selector: 'app-about',
  imports: [TranslatePipe, SectionHeading, Reveal],
  template: `
    <section id="about" class="section">
      <div class="container">
        <app-section-heading
          [kicker]="'content.about.kicker' | translate"
          [title]="'content.about.title' | translate"
        />
        <div class="layout">
          <div class="text" appReveal>
            @for (p of lang.c()?.about?.paragraphs; track $index) {
              <p>{{ p }}</p>
            }
          </div>
          <ul class="highlights">
            @for (h of lang.c()?.about?.highlights; track h.title) {
              <li class="card" appReveal>
                <h3>{{ h.title }}</h3>
                <p>{{ h.text }}</p>
              </li>
            }
          </ul>
        </div>
      </div>
    </section>
  `,
  styles: `
    .layout {
      display: grid;
      gap: 2rem;
    }
    .text p {
      margin: 0 0 1.1rem;
      color: var(--text-muted);
      font-size: 1.08rem;
      line-height: 1.75;
    }
    .highlights {
      display: grid;
      gap: 1rem;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .highlights li {
      padding: 1.25rem 1.4rem;
      border-inline-start: 3px solid var(--accent);
    }
    h3 {
      margin: 0 0 0.35rem;
      font-size: 1.05rem;
    }
    li p {
      margin: 0;
      color: var(--text-muted);
      font-size: 0.95rem;
    }
    @media (min-width: 60rem) {
      .layout {
        grid-template-columns: 1.2fr 0.8fr;
        gap: 4rem;
      }
    }
  `,
})
export class About {
  protected readonly lang = inject(LanguageService);
}
