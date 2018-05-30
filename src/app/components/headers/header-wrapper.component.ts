import { Component, OnInit, OnChanges, Input, ComponentFactoryResolver, SimpleChanges, SimpleChange, Type, ViewChild, ComponentFactory, ComponentRef } from '@angular/core';

import { IHeaderComponent } from './iheader.component';
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
  public data: IHeaderComponent;

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
    const componentFactory: ComponentFactory<IHeaderComponent> = this.componentFactoryResolver.resolveComponentFactory(this.findComponent()),
      viewContainerRef = this.host.viewContainerRef;

    viewContainerRef.clear();
    const componentRef: ComponentRef<IHeaderComponent> = viewContainerRef.createComponent(componentFactory);

    if (componentRef) {
      let instance: IHeaderComponent = componentRef.instance;

      instance.title = this.data.title;
      instance.links = this.data.links;
      instance.logo = this.data.logo;
    }
  }

  private findComponent(): Type<IHeaderComponent> {
    let header: Type<IHeaderComponent> = null;

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
