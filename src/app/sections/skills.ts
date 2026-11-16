import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../core/language.service';
import { SKILL_GROUPS } from '../core/cv.data';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';
import { SectionHeading } from '../shared/section-heading';

@Component({
  selector: 'app-skills',
  imports: [TranslatePipe, SectionHeading, Icon, Reveal],
  template: `
    <section id="skills" class="section section--alt">
      <div class="container">
        <app-section-heading
          [kicker]="'content.skills.kicker' | translate"
          [title]="'content.skills.title' | translate"
          [intro]="'content.skills.intro' | translate"
        />
        <div class="grid">
          @for (g of groups; track g.key) {
            <article class="card group" appReveal>
              <h3>
                <app-icon [name]="g.icon" />{{ 'content.skills.groups.' + g.key | translate }}
              </h3>
              <ul class="chips">
                @for (item of g.items; track item) {
                  <li class="chip">{{ item }}</li>
                }
              </ul>
            </article>
          }
          <article class="card group wide" appReveal>
            <h3>
              <app-icon name="layout" />{{ 'content.skills.groups.architecture' | translate }}
            </h3>
            <ul class="checks">
              @for (item of lang.c()?.skills?.architectureItems; track item) {
                <li><app-icon name="check" [size]="18" />{{ item }}</li>
              }
            </ul>
          </article>
        </div>
      </div>
    </section>
  `,
  styles: `
    .grid {
      display: grid;
      gap: 1.25rem;
    }
    .group {
      padding: 1.5rem;
    }
    h3 {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      margin: 0 0 1.1rem;
      font-size: 1.1rem;
    }
    h3 app-icon {
      color: var(--accent);
    }
    .chips,
    .checks {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .checks {
      display: grid;
      gap: 0.7rem 2rem;
    }
    .checks li {
      display: flex;
      align-items: flex-start;
      gap: 0.6rem;
      color: var(--text-muted);
    }
    .checks app-icon {
      margin-block-start: 0.2rem;
      color: var(--accent);
    }
    @media (min-width: 48rem) {
      .grid {
        grid-template-columns: repeat(2, 1fr);
      }
      .wide {
        grid-column: 1 / -1;
      }
      .checks {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `,
})
export class Skills {
  protected readonly lang = inject(LanguageService);
  protected readonly groups = SKILL_GROUPS;
}
