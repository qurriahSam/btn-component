import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { NavSectionComponent } from './nav-section/nav-section.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent, NavSectionComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
