import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, DashboardComponent, HeaderExampleComponent, SideNavExampleComponent } from './pages';

import { HeaderWrapperComponent, SideNavComponent, TemplateHostDirective } from './components';

import { RedHeaderComponent, BlueHeaderComponent, GreenHeaderComponent } from './components/headers/impl';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderWrapperComponent,
    SideNavComponent,
    HeaderExampleComponent,
    RedHeaderComponent, BlueHeaderComponent, GreenHeaderComponent,
    SideNavExampleComponent,
    TemplateHostDirective
  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [RedHeaderComponent, BlueHeaderComponent, GreenHeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
