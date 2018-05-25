import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../../header.component';

@Component({
  selector: 'app-blue',
  templateUrl: './blue-header.component.html',
  styleUrls: ['./blue-header.component.less']
})
export class BlueHeaderComponent implements HeaderComponent {
  @Input()
  title: string;

  @Input()
  logo: string;

  @Input()
  links: any;

  constructor() {}
}
