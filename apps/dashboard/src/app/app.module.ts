import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@workshop/material';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { UiLoginModule } from "@workshop/ui-login";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    UiLoginModule,
    HttpClientModule,
    HomeModule,
    RouterModule,
    AppRoutingModule,




  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
