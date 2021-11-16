import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { MenuComponent } from './menu/menu.component';
import { T01Component } from './t01/t01.component';
import { T02Component } from './t02/t02.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    T01Component,
    T02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
