import { Component, inject } from '@angular/core';
import { LanguageService } from '../core/language.service';
import { About } from '../sections/about';
import { Contact } from '../sections/contact';
import { EasyMatUi } from '../sections/easy-mat-ui';
import { Education } from '../sections/education';
import { Experience } from '../sections/experience';
import { Hero } from '../sections/hero';
import { Microfrontends } from '../sections/microfrontends';
import { Skills } from '../sections/skills';

/** The single-page portfolio served on /cv. Sections render once the active language file has loaded. */
@Component({
  selector: 'app-cv-page',
  imports: [Hero, About, Skills, Microfrontends, EasyMatUi, Experience, Education, Contact],
  template: `
    @if (lang.c()) {
      <app-hero />
      <app-about />
      <app-experience />
      <app-skills />
      <app-microfrontends />
      <app-easy-mat-ui />
      <app-education />
      <app-contact />
    }
  `,
})
export class CvPage {
  protected readonly lang = inject(LanguageService);
}
