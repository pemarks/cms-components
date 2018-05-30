import { Injectable } from '@angular/core';
import { SiteTemplate } from '../models/site-template';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

import * as faker from 'faker';
import invert from 'invert-color';

@Injectable()
export class SiteTemplateService {
  private _siteTemplateSubject: Subject<SiteTemplate>;

  getSiteTemplate(): Observable<SiteTemplate> {
    if (!this._siteTemplateSubject) {
      this._siteTemplateSubject = new BehaviorSubject<SiteTemplate>(SiteTemplateService.generateSiteTemplate());
    }

    return this._siteTemplateSubject.asObservable();
  }

  refresh(): void {
    this._siteTemplateSubject.next(SiteTemplateService.generateSiteTemplate());
  }

  private static generateSiteTemplate(): SiteTemplate {
    const siteTemplate = new SiteTemplate(),
      headerTypes: Array<string> = ['red', 'green', 'blue'],
      companyName: string = faker.company.companyName(),
      primaryColor: string = faker.internet.color(),
      secondaryColor: string = faker.internet.color();

    siteTemplate.container = {
      fullScreen: faker.random.boolean(),
      headerType: headerTypes[faker.random.number({min: 0, max: headerTypes.length - 1})]
    };

    siteTemplate.header = {
      links: [],
      logo: '',
      title: companyName
    };

    siteTemplate.theme = {
      name: faker.lorem.word(),
      bgColor: {
        primary: primaryColor,
        secondary: secondaryColor
      },
      textColor: {
        primary: invert(primaryColor, faker.random.boolean),
        secondary: invert(secondaryColor, faker.random.boolean)
      }
    };

    return siteTemplate;
  }
}
