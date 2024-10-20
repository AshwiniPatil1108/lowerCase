import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LowerCaseDirective } from './shared/directives/lower-case.directive';

@NgModule({
  declarations: [
    AppComponent,
    LowerCaseDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
