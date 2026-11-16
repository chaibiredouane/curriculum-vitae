import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../core/language.service';
import { PROFILE } from '../core/cv.data';
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
          <p class="role">{{ 'content.hero.role' | translate }}</p>
          <p class="summary">{{ 'content.hero.summary' | translate }}</p>

          <div class="actions">
            <a class="btn btn--primary" routerLink="/cv" fragment="easymat">
              {{ 'content.hero.ctaProjects' | translate }}
            </a>
            <a class="btn" routerLink="/cv" fragment="contact">
              <app-icon name="mail" [size]="18" />{{ 'content.hero.ctaContact' | translate }}
            </a>
          </div>

          <dl class="stats">
            @for (s of lang.c()?.hero?.stats; track s.label) {
              <div>
                <dt>{{ s.label }}</dt>
                <dd>{{ s.value }}</dd>
              </div>
            }
          </dl>
        </div>

        <div class="portrait" aria-hidden="false">
          <div class="frame">
            <img [src]="photo" [alt]="name" width="480" height="480" fetchpriority="high" />
          </div>
          <ul class="floating" aria-hidden="true">
            <li>Angular</li>
            <li>Quarkus</li>
            <li>Keycloak</li>
            <li>OpenShift</li>
          </ul>
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
    .floating {
      position: absolute;
      inset: 0;
      margin: 0;
      padding: 0;
      list-style: none;
      pointer-events: none;
    }
    .floating li {
      position: absolute;
      padding: 0.35rem 0.75rem;
      border: 1px solid var(--border);
      border-radius: 999px;
      background: var(--surface);
      box-shadow: var(--shadow);
      font: 600 0.75rem/1 var(--font-mono);
      animation: float 6s ease-in-out infinite;
    }
    .floating li:nth-child(1) {
      inset: 6% auto auto 2%;
    }
    .floating li:nth-child(2) {
      inset: 22% 2% auto auto;
      animation-delay: -1.5s;
    }
    .floating li:nth-child(3) {
      inset: auto auto 24% 2%;
      animation-delay: -3s;
    }
    .floating li:nth-child(4) {
      inset: auto 2% 6% auto;
      animation-delay: -4.5s;
    }
    @keyframes float {
      50% {
        transform: translateY(-8px);
      }
    }
    @media (min-width: 60rem) {
      .floating li:nth-child(1) {
        left: -6%;
      }
      .floating li:nth-child(2) {
        right: -8%;
      }
      .floating li:nth-child(3) {
        left: -8%;
      }
      .floating li:nth-child(4) {
        right: -4%;
      }
      .grid {
        grid-template-columns: 1.25fr 0.75fr;
        gap: 4rem;
      }
    }
  `,
})
export class Hero {
  protected readonly lang = inject(LanguageService);
  protected readonly name = PROFILE.name;
  protected readonly photo = PROFILE.photo;
}
