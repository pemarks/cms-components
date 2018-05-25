import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cmsTemplateHost]'
})
export class TemplateHostDirective {
  constructor(private _viewContainerRef: ViewContainerRef) { }

  get viewContainerRef(): ViewContainerRef {
    return this._viewContainerRef;
  }
}
