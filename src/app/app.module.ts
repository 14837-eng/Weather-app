import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

import { HeaderComponent } from './components';

import { TimepageComponent,
         WeatherpageComponent, 
         NotfoundpageComponent,
         HomepageComponent } from './pages';


@NgModule({
  declarations: 
  [
    AppComponent,
    HeaderComponent,
    TimepageComponent,
    WeatherpageComponent,
    NotfoundpageComponent,
    HomepageComponent
  ],
  imports: 
  [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
