import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoodComponent } from './components/hood/hood.component';


import { NavbarComponent } from './components/navbar/navbar.component';
import { BusinessComponent } from './components/business/business.component';

@NgModule({
  declarations: [
    AppComponent,
    HoodComponent,
    NavbarComponent,
    BusinessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
