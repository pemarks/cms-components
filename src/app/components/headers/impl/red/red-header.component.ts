import { Component } from '@angular/core';
import { IHeaderComponent } from '../../iheader.component';
import { BaseHeaderComponent } from '../../base-header.component';
import { StyleService } from '../../../../services';

@Component({
  selector: 'app-red',
  templateUrl: './red-header.component.html',
  styleUrls: ['./red-header.component.less']
})
export class RedHeaderComponent extends BaseHeaderComponent {
  constructor(styleService: StyleService) {
    super(styleService);
  }
}