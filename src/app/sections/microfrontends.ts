import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../core/language.service';
import { Reveal } from '../shared/reveal';
import { SectionHeading } from '../shared/section-heading';

@Component({
  selector: 'app-microfrontends',
  imports: [TranslatePipe, SectionHeading, Reveal],
  template: `
    <section id="microfrontends" class="section">
      <div class="container">
        <app-section-heading
          [kicker]="'content.mfe.kicker' | translate"
          [title]="'content.mfe.title' | translate"
          [intro]="'content.mfe.intro' | translate"
        />

        <figure
          class="diagram card"
          appReveal
          role="img"
          [attr.aria-label]="'content.mfe.diagram.label' | translate"
        >
          <div class="auth">{{ 'content.mfe.diagram.auth' | translate }}</div>
          <div class="host">
            <strong>{{ 'content.mfe.diagram.host' | translate }}</strong>
            <span>{{ 'content.mfe.diagram.hostText' | translate }}</span>
          </div>
          <div class="remotes">
            @for (r of lang.c()?.mfe?.diagram?.remotes; track r) {
              <div class="remote">{{ r }}</div>
            }
          </div>
          <div class="shared">{{ 'content.mfe.diagram.shared' | translate }}</div>
          <div class="pipeline">{{ 'content.mfe.diagram.pipeline' | translate }}</div>
        </figure>

        <ol class="pillars">
          @for (p of lang.c()?.mfe?.pillars; track p.title; let i = $index) {
            <li class="card pillar" appReveal>
              <span class="num" aria-hidden="true">{{ i + 1 < 10 ? '0' + (i + 1) : i + 1 }}</span>
              <h3>{{ p.title }}</h3>
              <p>{{ p.text }}</p>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styles: `
    .diagram {
      display: grid;
      gap: 0.75rem;
      margin: 0 0 2rem;
      padding: clamp(1rem, 3vw, 1.75rem);
      text-align: center;
      font-size: 0.9rem;
    }
    .diagram > div {
      padding: 0.8rem 1rem;
      border: 1px dashed var(--border);
      border-radius: var(--radius-sm);
      color: var(--text-muted);
    }
    .diagram > .auth {
      border-color: var(--accent-2) !important;
      color: var(--text) !important;
    }
    .diagram > .host {
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
      background: var(--gradient);
      color: var(--on-accent);
      border: 0 !important;
      border-radius: var(--radius-sm);
      padding: 1rem !important;
    }
    .host strong {
      font-size: 1.05rem;
    }
    .host span {
      font-size: 0.82rem;
      opacity: 0.85;
    }
    .remotes {
      display: grid;
      gap: 0.75rem;
      padding: 0 !important;
      border: 0 !important;
    }
    .remote {
      padding: 1rem;
      border: 1px solid var(--accent);
      border-radius: var(--radius-sm);
      background: var(--accent-soft);
      color: var(--text);
      font: 600 0.85rem/1.3 var(--font-mono);
    }
    .diagram > .shared {
      border-style: solid !important;
      background: var(--surface-hover);
    }
    .pillars {
      display: grid;
      gap: 1.25rem;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .pillar {
      position: relative;
      padding: 1.5rem;
      transition:
        transform 0.25s ease,
        border-color 0.25s ease;
    }
    .pillar:hover {
      transform: translateY(-4px);
      border-color: var(--accent);
    }
    .num {
      display: block;
      margin-block-end: 0.75rem;
      font: 700 0.8rem/1 var(--font-mono);
      color: var(--accent);
    }
    h3 {
      margin: 0 0 0.5rem;
      font-size: 1.1rem;
    }
    .pillar p {
      margin: 0;
      color: var(--text-muted);
      font-size: 0.95rem;
    }
    @media (min-width: 40rem) {
      .remotes {
        grid-template-columns: repeat(3, 1fr);
      }
      .pillars {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (min-width: 64rem) {
      .pillars {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  `,
})
export class Microfrontends {
  protected readonly lang = inject(LanguageService);
}
