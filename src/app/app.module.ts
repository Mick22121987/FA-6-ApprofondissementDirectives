import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorDirective} from './shared/directives/color.directive';
import { NgIfCustomDirective} from './shared/directives/ngIfCustom.directive';
@NgModule({
  declarations: [
    AppComponent,
    ColorDirective,
    NgIfCustomDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
