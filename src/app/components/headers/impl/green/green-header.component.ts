import { Component } from '@angular/core';
import { BaseHeaderComponent } from '../../base-header.component';
import { StyleService } from '../../../../services';

@Component({
  selector: 'app-green',
  templateUrl: './green-header.component.html',
  styleUrls: ['./green-header.component.less']
})
export class GreenHeaderComponent extends BaseHeaderComponent {
  constructor(styleService: StyleService) {
    super(styleService);
  }

}
