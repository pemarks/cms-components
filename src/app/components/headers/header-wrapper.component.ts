import { Component, OnInit, OnChanges, Input, ComponentFactoryResolver, SimpleChanges, SimpleChange, Type, ViewChild, ComponentFactory, ComponentRef } from '@angular/core';

import { HeaderComponent } from './header.component';
import { BlueHeaderComponent, GreenHeaderComponent, RedHeaderComponent } from './impl';
import { TemplateHostDirective } from '../template-host.directive';

@Component({
  selector: 'cms-header',
  template: '<ng-template cmsTemplateHost></ng-template>',
  styleUrls: ['./header-wrapper.component.less']
})
export class HeaderWrapperComponent implements OnInit, OnChanges {
  @Input()
  public type: string;

  @Input()
  public logo: string;

  @Input()
  public links: Array<any>;

  @Input()
  public title: string;

  @ViewChild(TemplateHostDirective) host: TemplateHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.loadComponent();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.type) {
      this.loadComponent();
    }
  }

  private loadComponent() {
    const componentFactory: ComponentFactory<HeaderComponent> = this.componentFactoryResolver.resolveComponentFactory(this.findComponent()),
      viewContainerRef = this.host.viewContainerRef;

    viewContainerRef.clear();
    const componentRef: ComponentRef<HeaderComponent> = viewContainerRef.createComponent(componentFactory);

    if (componentRef) {
      let instance: HeaderComponent = componentRef.instance;

      instance.title = this.title;
      instance.links = this.links;
      instance.logo = this.logo;
    }
  }

  private findComponent(): Type<HeaderComponent> {
    let header: Type<HeaderComponent> = null;

    switch(this.type.toLowerCase()) {
      case 'blue': {
        header = BlueHeaderComponent;
        break;
      }
      case 'green': {
        header = GreenHeaderComponent;
        break;
      }
      default: {
        header = RedHeaderComponent;
      }
    }

    return header;
  }
}
