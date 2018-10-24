import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { routingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { FormComponent } from './registration/form/form.component';
import { PasswordComponent } from './registration/password/password.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
