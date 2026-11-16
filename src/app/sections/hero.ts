import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../core/language.service';
import { CV_PDF, PROFILE } from '../core/cv.data';
import { Icon } from '../shared/icon';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, TranslatePipe, Icon],
  template: `
    <section id="top" class="hero" aria-labelledby="hero-title">
      <div class="glow" aria-hidden="true"></div>
      <div class="container grid">
        <div class="copy">
          <p class="badge">
            <span class="dot" aria-hidden="true"></span>{{ 'content.hero.badge' | translate }}
          </p>
          <p class="hello">{{ 'content.hero.hello' | translate }}</p>
          <h1 id="hero-title">{{ name }}</h1>
          <p class="role">{{ hero()?.role }}</p>
          <p class="headline">{{ hero()?.headline }}</p>
          <p class="summary">{{ hero()?.summary }}</p>

          <ul class="expertise" aria-label="Expertise">
            @for (e of hero()?.expertise; track e) {
              <li class="chip">{{ e }}</li>
            }
          </ul>
          <p class="leadership">
            <app-icon name="check" [size]="18" />{{ 'content.hero.leadership' | translate }}
          </p>

          <div class="actions">
            <a class="btn btn--primary" routerLink="/cv" fragment="experience">
              {{ 'content.hero.ctaExperience' | translate }}
            </a>
            <a class="btn" routerLink="/cv" fragment="contact">
              <app-icon name="mail" [size]="18" />{{ 'content.hero.ctaContact' | translate }}
            </a>
            <a class="btn" [href]="cvPdf()" download>
              <app-icon name="download" [size]="18" />{{ 'content.hero.ctaDownload' | translate }}
            </a>
          </div>

          <dl class="stats">
            @for (s of hero()?.stats; track s.label) {
              <div>
                <dt>{{ s.label }}</dt>
                <dd>{{ s.value }}</dd>
              </div>
            }
          </dl>
        </div>

        <div class="portrait">
          <div class="frame">
            <img [src]="photo" [alt]="name" width="480" height="480" fetchpriority="high" />
          </div>
          <a class="easymat" routerLink="/cv" fragment="easymat">
            <span class="em-icon"><app-icon name="layout" [size]="20" /></span>
            <span>
              <strong>{{ 'content.hero.easymatLabel' | translate }}</strong>
              <small>{{ 'content.hero.easymatText' | translate }}</small>
            </span>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: `
    .hero {
      position: relative;
      padding-block: calc(var(--header-h) + clamp(2rem, 6vw, 5rem)) clamp(3rem, 8vw, 6rem);
      overflow: hidden;
    }
    .glow {
      position: absolute;
      inset: -20% -10% auto auto;
      width: min(60rem, 120vw);
      aspect-ratio: 1;
      background:
        radial-gradient(closest-side, var(--glow), transparent 70%),
        radial-gradient(closest-side at 20% 80%, var(--accent-soft), transparent 70%);
      pointer-events: none;
    }
    .grid {
      position: relative;
      display: grid;
      gap: 2.5rem;
      align-items: center;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      margin: 0 0 1.25rem;
      padding: 0.4rem 0.9rem;
      border: 1px solid var(--border);
      border-radius: 999px;
      background: var(--surface);
      font: 500 0.78rem/1.3 var(--font-mono);
      color: var(--text-muted);
    }
    .dot {
      width: 0.55rem;
      height: 0.55rem;
      border-radius: 50%;
      background: var(--accent);
      box-shadow: 0 0 0 0 var(--accent);
      animation: pulse 2.4s ease-out infinite;
    }
    @keyframes pulse {
      70% {
        box-shadow: 0 0 0 0.6rem transparent;
      }
      100% {
        box-shadow: 0 0 0 0 transparent;
      }
    }
    .hello {
      margin: 0;
      color: var(--text-muted);
      font-size: 1.1rem;
    }
    h1 {
      margin: 0.15rem 0 0.6rem;
      font-size: clamp(2.5rem, 8vw, 4.6rem);
      line-height: 1.05;
      letter-spacing: -0.035em;
      background: var(--gradient);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    .role {
      margin: 0;
      font-size: clamp(1.1rem, 2.6vw, 1.45rem);
      font-weight: 600;
      line-height: 1.4;
    }
    .summary {
      max-width: 38rem;
      margin: 1.25rem 0 0;
      color: var(--text-muted);
      font-size: 1.05rem;
      line-height: 1.7;
    }
    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-block: 2rem;
    }
    .stats {
      display: flex;
      flex-wrap: wrap;
      gap: 1.25rem 2.5rem;
      margin: 0;
      padding-block-start: 1.5rem;
      border-block-start: 1px solid var(--border);
    }
    .stats div {
      display: flex;
      flex-direction: column-reverse;
    }
    dt {
      color: var(--text-muted);
      font-size: 0.85rem;
    }
    dd {
      margin: 0;
      font-size: 1.9rem;
      font-weight: 800;
      letter-spacing: -0.02em;
    }
    .portrait {
      position: relative;
      justify-self: center;
      width: min(100%, 22rem);
    }
    .frame {
      padding: 0.5rem;
      border-radius: 2rem;
      background: var(--gradient);
      box-shadow: 0 30px 70px -30px var(--glow);
      transform: rotate(2deg);
    }
    .frame img {
      display: block;
      width: 100%;
      aspect-ratio: 1;
      object-fit: cover;
      border-radius: 1.6rem;
      transform: rotate(-2deg) scale(1.04);
    }
    .headline {
      max-width: 38rem;
      margin: 1rem 0 0;
      font-size: clamp(1.05rem, 2.4vw, 1.3rem);
      font-weight: 700;
      line-height: 1.35;
      color: var(--accent);
    }
    .expertise {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 1.25rem 0 0;
      padding: 0;
      list-style: none;
    }
    .leadership {
      display: flex;
      gap: 0.5rem;
      align-items: flex-start;
      max-width: 38rem;
      margin: 1rem 0 0;
      color: var(--text-muted);
      font-size: 0.95rem;
    }
    .leadership app-icon {
      margin-block-start: 0.15rem;
      color: var(--accent);
    }
    .easymat {
      display: flex;
      gap: 0.85rem;
      align-items: center;
      margin-block-start: 1.25rem;
      padding: 0.9rem 1rem;
      border: 1px solid var(--border);
      border-radius: var(--radius);
      background: var(--surface);
      box-shadow: var(--shadow);
      color: var(--text);
      text-decoration: none;
      transition:
        transform 0.2s ease,
        border-color 0.2s ease;
    }
    .easymat:hover {
      transform: translateY(-2px);
      border-color: var(--accent);
    }
    .em-icon {
      display: grid;
      flex: none;
      place-items: center;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 0.7rem;
      background: var(--gradient);
      color: var(--on-accent);
    }
    .easymat strong,
    .easymat small {
      display: block;
    }
    .easymat small {
      color: var(--text-muted);
      font-size: 0.8rem;
      line-height: 1.35;
    }
    @media (min-width: 60rem) {
      .grid {
        grid-template-columns: 1.25fr 0.75fr;
        gap: 4rem;
      }
    }
  `,
})
export class Hero {
  private readonly lang = inject(LanguageService);
  protected readonly hero = computed(() => this.lang.c()?.hero);
  protected readonly cvPdf = computed(() => CV_PDF[this.lang.current().code]);
  protected readonly name = PROFILE.name;
  protected readonly photo = PROFILE.photo;
}
