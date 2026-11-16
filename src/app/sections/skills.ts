import { Component, computed, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../core/language.service';
import { SKILL_GROUPS } from '../core/cv.data';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';
import { SectionHeading } from '../shared/section-heading';

interface Group {
  key: string;
  icon: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  imports: [TranslatePipe, SectionHeading, Icon, Reveal],
  template: `
    <section id="skills" class="section">
      <div class="container">
        <app-section-heading
          [kicker]="'content.skills.kicker' | translate"
          [title]="'content.skills.title' | translate"
          [intro]="'content.skills.intro' | translate"
        />
        <div class="grid">
          @for (g of groups(); track g.key) {
            <article class="card group" appReveal>
              <h3>
                <app-icon [name]="g.icon" />{{ 'content.skills.groups.' + g.key | translate }}
              </h3>
              <ul>
                @for (item of g.items; track item) {
                  <li>{{ item }}</li>
                }
              </ul>
            </article>
          }
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
      margin: 0 0 1rem;
      font-size: 1.1rem;
    }
    h3 app-icon {
      color: var(--accent);
    }
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    li {
      position: relative;
      padding-block: 0.3rem;
      padding-inline-start: 1.1rem;
      color: var(--text-muted);
    }
    li::before {
      content: '';
      position: absolute;
      inset-inline-start: 0;
      inset-block-start: 0.85rem;
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
      background: var(--gradient);
    }
    @media (min-width: 48rem) {
      .grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (min-width: 64rem) {
      .grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  `,
})
export class Skills {
  private readonly lang = inject(LanguageService);

  /** Frontend, backend, architecture, database, DevOps and leadership, in recruiter-priority order. */
  protected readonly groups = computed<Group[]>(() => {
    const skills = this.lang.c()?.skills;
    const tech = (key: string) => SKILL_GROUPS.find((g) => g.key === key)?.items ?? [];
    return [
      { key: 'frontend', icon: 'layout', items: tech('frontend') },
      { key: 'backend', icon: 'server', items: tech('backend') },
      { key: 'architecture', icon: 'globe', items: skills?.architectureItems ?? [] },
      { key: 'database', icon: 'database', items: tech('database') },
      { key: 'devops', icon: 'cloud', items: tech('devops') },
      { key: 'leadership', icon: 'check', items: skills?.leadershipItems ?? [] },
    ];
  });
}
