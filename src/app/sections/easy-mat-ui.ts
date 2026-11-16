import { Component, computed, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../core/language.service';
import { EASY_MAT_UI } from '../core/cv.data';
import { ThemeService } from '../core/theme.service';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';

@Component({
  selector: 'app-easy-mat-ui',
  imports: [TranslatePipe, Icon, Reveal],
  template: `
    <section id="easymat" class="section">
      <div class="container">
        <div class="panel card" appReveal>
          <div class="info">
            <p class="kicker">{{ 'content.easymat.kicker' | translate }}</p>
            <h2>{{ 'content.easymat.title' | translate }}</h2>
            <p class="creator">
              <app-icon name="check" [size]="16" />{{ 'content.easymat.creator' | translate }}
            </p>
            <p class="intro">{{ 'content.easymat.intro' | translate }}</p>

            <h3>{{ 'content.easymat.featuresTitle' | translate }}</h3>
            <ul class="features">
              @for (f of em()?.features; track f) {
                <li><app-icon name="check" [size]="18" />{{ f }}</li>
              }
            </ul>

            <div class="links">
              <a
                class="btn btn--primary"
                [href]="links.github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <app-icon name="github" [size]="18" />{{ 'content.easymat.github' | translate }}
              </a>
              <a class="btn" [href]="links.npm" target="_blank" rel="noopener noreferrer">
                <app-icon name="npm" [size]="18" />{{ 'content.easymat.npm' | translate }}
              </a>
              <a class="btn" [href]="links.demo" target="_blank" rel="noopener noreferrer">
                <app-icon name="play" [size]="16" />{{ 'content.easymat.demo' | translate }}
              </a>
            </div>
            <code class="install">npm install easy-mat-ui</code>
          </div>

          <figure class="shot">
            <a [href]="links.demo" target="_blank" rel="noopener noreferrer">
              <img
                [src]="
                  theme.theme() === 'dark'
                    ? 'images/easy-mat-ui/table-dark.png'
                    : 'images/easy-mat-ui/table-light.png'
                "
                [alt]="
                  (theme.theme() === 'dark'
                    ? 'content.easymat.imageDark'
                    : 'content.easymat.imageLight'
                  ) | translate
                "
                width="1200"
                height="760"
                loading="lazy"
              />
            </a>
            <figcaption>{{ 'content.easymat.caption' | translate }}</figcaption>
          </figure>
        </div>

        <h3 class="evidence-title">{{ 'content.easymat.evidenceTitle' | translate }}</h3>
        <ul class="evidence">
          @for (ev of em()?.evidence; track ev.title) {
            <li class="card" appReveal>
              <h4>{{ ev.title }}</h4>
              <p>{{ ev.text }}</p>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: `
    .panel {
      display: grid;
      gap: 2rem;
      padding: clamp(1.25rem, 4vw, 3rem);
      background: radial-gradient(circle at 100% 0%, var(--glow), transparent 55%), var(--surface);
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
      font-size: clamp(2rem, 5vw, 3rem);
      letter-spacing: -0.03em;
    }
    .creator {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      margin: 0.75rem 0 0;
      padding: 0.3rem 0.8rem;
      border-radius: 999px;
      background: var(--accent-soft);
      color: var(--accent);
      font-size: 0.85rem;
      font-weight: 600;
    }
    .intro {
      margin: 1.1rem 0 0;
      color: var(--text-muted);
      line-height: 1.7;
    }
    h3 {
      margin: 1.5rem 0 0.75rem;
      font-size: 1rem;
    }
    .features {
      display: grid;
      gap: 0.5rem 1.5rem;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .features li {
      display: flex;
      gap: 0.55rem;
      align-items: flex-start;
      font-size: 0.93rem;
    }
    .features app-icon {
      margin-block-start: 0.15rem;
      color: var(--accent);
    }
    .links {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-block: 1.75rem 1rem;
    }
    .install {
      display: inline-block;
      max-width: 100%;
      padding: 0.6rem 1rem;
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      background: var(--bg);
      font: 500 0.85rem/1.3 var(--font-mono);
      overflow-x: auto;
    }
    .evidence-title {
      margin: 2.5rem 0 1rem;
      font: 600 0.8rem/1 var(--font-mono);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--accent);
    }
    .evidence {
      display: grid;
      gap: 1rem;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .evidence li {
      padding: 1.1rem 1.25rem;
    }
    .evidence h4 {
      margin: 0 0 0.3rem;
      font-size: 1rem;
    }
    .evidence p {
      margin: 0;
      color: var(--text-muted);
      font-size: 0.9rem;
    }
    @media (min-width: 40rem) {
      .evidence {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (min-width: 64rem) {
      .evidence {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    .shot {
      align-self: center;
      margin: 0;
    }
    .shot img {
      display: block;
      width: 100%;
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      box-shadow: var(--shadow);
      transition: transform 0.3s ease;
    }
    .shot a:hover img {
      transform: scale(1.015);
    }
    figcaption {
      margin-block-start: 0.6rem;
      color: var(--text-muted);
      font-size: 0.8rem;
      text-align: center;
    }
    @media (min-width: 40rem) {
      .features {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (min-width: 75rem) {
      .panel {
        grid-template-columns: 1.05fr 0.95fr;
        gap: 3rem;
      }
    }
  `,
})
export class EasyMatUi {
  private readonly lang = inject(LanguageService);
  protected readonly em = computed(() => this.lang.c()?.easymat);
  protected readonly theme = inject(ThemeService);
  protected readonly links = EASY_MAT_UI;
}
