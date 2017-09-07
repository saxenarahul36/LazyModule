import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CreditCardComponent } from "./credit-card-component";

const routes: Routes = [
  { path: '', component: CreditCardComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);