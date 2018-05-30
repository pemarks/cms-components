import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material'

import { AppRoutingModule } from './app-routing.module';
import { ContainerComponent } from './container';

import { HeaderWrapperComponent, SideNavComponent, TemplateHostDirective } from './components';
import { RedHeaderComponent, BlueHeaderComponent, GreenHeaderComponent } from './components/headers/impl';

import { SiteTemplateService, StyleService } from './services';

@NgModule({
  providers: [Title, SiteTemplateService, StyleService],
  declarations: [
    ContainerComponent,
    HeaderWrapperComponent,
    SideNavComponent,
    RedHeaderComponent, BlueHeaderComponent, GreenHeaderComponent,
    TemplateHostDirective
  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [RedHeaderComponent, BlueHeaderComponent, GreenHeaderComponent],
  bootstrap: [ContainerComponent]
})
export class AppModule { }
