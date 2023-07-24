import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';

import { T01Component } from './t01/t01.component';
import { T02Component } from './t02/t02.component';
import { T03Component } from './t03/t03.component';
import { T04Component } from './t04/t04.component';
import { Transform01Pipe } from './transform01.pipe';
import { Transform02Pipe } from './transform02.pipe';
import { Transform03Pipe } from './transform03.pipe';
import { Highlight01Directive } from './highlight01.directive';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    T01Component,
    T02Component,
    T03Component,
    T04Component,
    Transform01Pipe,
    Transform02Pipe,
    Transform03Pipe,
    Highlight01Directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
