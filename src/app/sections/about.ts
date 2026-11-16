import { Component, computed, inject } from '@angular/core';
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
        <div class="text" appReveal>
          @for (p of about()?.paragraphs; track $index) {
            <p>{{ p }}</p>
          }
        </div>

        <h3 class="values-title">{{ 'content.about.valuesTitle' | translate }}</h3>
        <ul class="values">
          @for (v of about()?.values; track v.title) {
            <li class="card" appReveal>
              <h4>{{ v.title }}</h4>
              <p>{{ v.text }}</p>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: `
    .text {
      max-width: 52rem;
    }
    .text p {
      margin: 0 0 1.1rem;
      color: var(--text-muted);
      font-size: 1.08rem;
      line-height: 1.75;
    }
    .text p:first-child {
      color: var(--text);
      font-size: 1.18rem;
    }
    .values-title {
      margin: 2.5rem 0 1.25rem;
      font: 600 0.8rem/1 var(--font-mono);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--accent);
    }
    .values {
      display: grid;
      gap: 1rem;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .values li {
      padding: 1.25rem 1.4rem;
      border-inline-start: 3px solid var(--accent);
    }
    h4 {
      margin: 0 0 0.35rem;
      font-size: 1.05rem;
    }
    li p {
      margin: 0;
      color: var(--text-muted);
      font-size: 0.95rem;
    }
    @media (min-width: 40rem) {
      .values {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (min-width: 64rem) {
      .values {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  `,
})
export class About {
  private readonly lang = inject(LanguageService);
  protected readonly about = computed(() => this.lang.c()?.about);
}
