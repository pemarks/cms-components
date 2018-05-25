import { Component, OnInit, Input } from '@angular/core';
import { HeaderComponent } from '../../header.component';

@Component({
  selector: 'app-red',
  templateUrl: './red-header.component.html',
  styleUrls: ['./red-header.component.less']
})
export class RedHeaderComponent implements HeaderComponent, OnInit {
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