import { Injectable } from '@angular/core';
import { Theme } from '../models';
import { SiteTemplateService } from './site-template.service';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class StyleService {
  private themeSubject: Subject<Theme>;

  constructor(private siteTemplateService: SiteTemplateService) {
    this.themeSubject = new BehaviorSubject<Theme>(null);

    this.siteTemplateService.getSiteTemplate().subscribe(obs => {
      this.themeSubject.next(obs.theme);
    });
  }

  getStyles(): Observable<Theme> {
    return this.themeSubject.asObservable();
  }
}
