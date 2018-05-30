import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { IContainerComponent } from '../icontainer.component';
import { SiteTemplateService, StyleService } from '../../services';
import { SiteTemplate } from '../../models/site-template';
import { BaseContainer } from '../base-container.component';

@Component({
  selector: 'app-root',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.less']
})
export class ContainerComponent extends BaseContainer {
  constructor(siteTemplateService: SiteTemplateService, styleService: StyleService) {
    super(siteTemplateService, styleService);
  }

  refreshTemplate(): void {
    this.siteTemplateService.refresh();
  }
}
