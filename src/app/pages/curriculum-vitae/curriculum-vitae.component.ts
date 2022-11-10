import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.scss']
})
export class CurriculumVitaeComponent implements OnInit {
  data: any = null;
  constructor(private translate: TranslateService) {
  }

  ngOnInit(): void {
  }

  getTaskName(i: number, j: number) {
    return "cv.exp.function_" + i + ".tasks.task_" + j;

  }

  getTechnicalBackground(i: number, k: number) {
    return "cv.exp.function_" + i + ".technicalBackground.t_" + k;

  }

  getCollapseId(index: number, href: boolean) {
    return (href ? "#" : "") + "collapseFunction_" + index;
  }

  getNbItem(i: number, source: string): any[] {
    let nb = 0;
    switch (source) {
      case "FUNCTIONS":
        nb = 2;
        break;
      case "TASKS":
        nb = i === 0 ? 12 : (i === 1 ? 6 : 0);
        break
      case "TECHNICAL_BACKGROUND":
        nb = i === 0 ? 3 : (i === 1 ? 4 : 0);
        break;
    }
    return [].constructor(nb);
  }


}
