import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArthorsComponent } from './arthors/arthors.component';
import { AuthorsService } from './authors.service';

@NgModule({
  declarations: [
    AppComponent,
    ArthorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AuthorsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
