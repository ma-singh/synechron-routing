import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from '../registration/form/form.component';
import { PasswordComponent } from '../registration/password/password.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: "register",
    component: FormComponent
  },
  {
    path: "register/2",
    component: PasswordComponent
  }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class RoutingModule { }
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
