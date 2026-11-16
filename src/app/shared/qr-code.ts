import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

/** A scannable QR code (static SVG) that is also a regular link opening in a new tab. */
@Component({
  selector: 'app-qr-code',
  imports: [TranslatePipe],
  template: `
    <a class="qr" [href]="href()" target="_blank" rel="noopener noreferrer">
      <!-- The tile stays white in both themes: QR scanners need dark modules on a light background. -->
      <img
        [src]="src()"
        [alt]="('content.qr.scan' | translate) + ': ' + label()"
        width="112"
        height="112"
        loading="lazy"
      />
      <span class="label">{{ label() }}</span>
    </a>
  `,
  styles: `
    .qr {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      color: var(--text-muted);
      font-size: 0.8rem;
      font-weight: 600;
      text-decoration: none;
    }
    img {
      display: block;
      width: 7rem;
      height: 7rem;
      padding: 0.4rem;
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      background: #fff;
      transition: transform 0.2s ease;
    }
    .qr:hover img {
      transform: translateY(-2px);
    }
    .qr:hover .label {
      color: var(--accent);
    }
  `,
})
export class QrCode {
  readonly href = input.required<string>();
  readonly src = input.required<string>();
  readonly label = input.required<string>();
}
