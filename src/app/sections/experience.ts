import { Component, inject, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../core/language.service';
import { JOBS } from '../core/cv.data';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';
import { SectionHeading } from '../shared/section-heading';

@Component({
  selector: 'app-experience',
  imports: [TranslatePipe, SectionHeading, Icon, Reveal],
  template: `
    <section id="experience" class="section">
      <div class="container">
        <app-section-heading
          [kicker]="'content.experience.kicker' | translate"
          [title]="'content.experience.title' | translate"
        />

        <ol class="timeline">
          @for (item of lang.c()?.experience?.items; track $index; let i = $index) {
            @let job = jobs[i];
            <li class="entry" appReveal>
              <span class="marker" aria-hidden="true"></span>
              <article class="card">
                <header>
                  <img
                    class="logo"
                    [src]="job.logo"
                    [alt]="job.company"
                    width="56"
                    height="56"
                    loading="lazy"
                  />
                  <div class="head">
                    <h3>{{ item.title }}</h3>
                    <p class="company">{{ job.company }}</p>
                    <p class="date">
                      {{ item.date }}
                      @if (job.current) {
                        <span class="now">{{ 'content.experience.current' | translate }}</span>
                      }
                    </p>
                  </div>
                </header>

                <button
                  type="button"
                  class="toggle"
                  [attr.aria-expanded]="isOpen(i)"
                  [attr.aria-controls]="'job-' + i"
                  (click)="toggle(i)"
                >
                  {{
                    (isOpen(i) ? 'content.experience.hide' : 'content.experience.show') | translate
                  }}
                  <app-icon name="chevron" [size]="18" [class.flip]="isOpen(i)" />
                </button>

                <div class="details" [id]="'job-' + i" [hidden]="!isOpen(i)">
                  <ul class="tasks">
                    @for (task of item.tasks; track $index) {
                      <li>{{ task }}</li>
                    }
                  </ul>
                  <h4>{{ 'content.experience.stack' | translate }}</h4>
                  @for (group of job.stack; track group.label) {
                    <div class="stack">
                      <span class="label">{{ group.label }}</span>
                      <ul class="chips">
                        @for (t of group.items; track t) {
                          <li class="chip">{{ t }}</li>
                        }
                      </ul>
                    </div>
                  }
                </div>
              </article>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styles: `
    .timeline {
      position: relative;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .timeline::before {
      content: '';
      position: absolute;
      inset-block: 0.5rem 0;
      inset-inline-start: 0.45rem;
      width: 2px;
      background: linear-gradient(var(--accent), var(--accent-2), transparent);
    }
    .entry {
      position: relative;
      padding-inline-start: 2rem;
      margin-block-end: 1.5rem;
    }
    .marker {
      position: absolute;
      inset-inline-start: 0;
      inset-block-start: 1.6rem;
      width: 0.95rem;
      height: 0.95rem;
      border: 3px solid var(--accent);
      border-radius: 50%;
      background: var(--bg);
    }
    article {
      padding: 1.25rem;
    }
    header {
      display: flex;
      gap: 1rem;
      align-items: center;
    }
    .logo {
      flex: none;
      width: 3.5rem;
      height: 3.5rem;
      padding: 0.35rem;
      border-radius: 0.8rem;
      background: #fff;
      object-fit: contain;
    }
    h3 {
      margin: 0;
      font-size: 1.15rem;
      line-height: 1.3;
    }
    .company {
      margin: 0.15rem 0 0;
      color: var(--accent);
      font-weight: 600;
    }
    .date {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      align-items: center;
      margin: 0.15rem 0 0;
      color: var(--text-muted);
      font: 500 0.82rem/1.4 var(--font-mono);
    }
    .now {
      padding: 0.1rem 0.55rem;
      border-radius: 999px;
      background: var(--accent-soft);
      color: var(--accent);
    }
    .toggle {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      min-height: 2.75rem;
      margin-block-start: 0.75rem;
      padding: 0.4rem 0;
      border: 0;
      background: none;
      color: var(--accent);
      font: 600 0.9rem/1 var(--font-sans);
      cursor: pointer;
    }
    .toggle app-icon {
      transition: transform 0.25s ease;
    }
    .toggle app-icon.flip {
      transform: rotate(180deg);
    }
    .details {
      padding-block-start: 0.5rem;
    }
    .tasks {
      margin: 0 0 1.25rem;
      padding-inline-start: 1.2rem;
      color: var(--text-muted);
    }
    .tasks li {
      margin-block-end: 0.4rem;
      padding-inline-start: 0.2rem;
    }
    .tasks li::marker {
      color: var(--accent);
    }
    h4 {
      margin: 0 0 0.75rem;
      font: 600 0.8rem/1 var(--font-mono);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--text-muted);
    }
    .stack {
      margin-block-end: 0.75rem;
    }
    .label {
      display: block;
      margin-block-end: 0.4rem;
      font-size: 0.85rem;
      font-weight: 600;
    }
    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    @media (min-width: 48rem) {
      .entry {
        padding-inline-start: 3rem;
      }
      .timeline::before {
        inset-inline-start: 0.7rem;
      }
      .marker {
        inset-inline-start: 0.25rem;
      }
      article {
        padding: 1.75rem;
      }
    }
  `,
})
export class Experience {
  protected readonly lang = inject(LanguageService);
  protected readonly jobs = JOBS;
  /** The current position is expanded by default. */
  private readonly open = signal<Set<number>>(new Set([0]));

  protected isOpen(i: number): boolean {
    return this.open().has(i);
  }

  protected toggle(i: number): void {
    this.open.update((s) => {
      const next = new Set(s);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }
}
