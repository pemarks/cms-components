import { Component } from '@angular/core';
import { BaseHeaderComponent } from '../../base-header.component';
import { StyleService } from '../../../../services';

@Component({
  selector: 'app-blue',
  templateUrl: './blue-header.component.html',
  styleUrls: ['./blue-header.component.less']
})
export class BlueHeaderComponent extends BaseHeaderComponent {
  constructor(styleService: StyleService) {
    super(styleService);
  }
}
