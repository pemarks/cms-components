import { Component, OnInit, Input } from '@angular/core';
import { HeaderComponent } from '../../header.component';

@Component({
  selector: 'app-green',
  templateUrl: './green-header.component.html',
  styleUrls: ['./green-header.component.less']
})
export class GreenHeaderComponent implements HeaderComponent, OnInit {
  @Input()
  title: string;

  @Input()
  logo: string;

  @Input()
  links: any;

  constructor() { }

  ngOnInit() {
  }

}
