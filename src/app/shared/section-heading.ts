import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  template: `
    <p class="kicker">{{ kicker() }}</p>
    <h2>{{ title() }}</h2>
    @if (intro()) {
      <p class="intro">{{ intro() }}</p>
    }
  `,
  styles: `
    :host {
      display: block;
      max-width: 46rem;
      margin-block-end: clamp(1.75rem, 4vw, 3rem);
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
      font-size: clamp(1.75rem, 4.5vw, 2.6rem);
      line-height: 1.15;
      letter-spacing: -0.02em;
    }
    .intro {
      margin: 1rem 0 0;
      color: var(--text-muted);
      font-size: 1.05rem;
      line-height: 1.65;
    }
  `,
})
export class SectionHeading {
  readonly kicker = input.required<string>();
  readonly title = input.required<string>();
  readonly intro = input('');
}
