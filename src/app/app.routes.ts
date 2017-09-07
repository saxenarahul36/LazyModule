import { Routes ,RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { ModuleWithProviders } from '@angular/core';
import { CardModule } from "./creditcard/card.module";

  const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'cardmodule', loadChildren: '../app/creditcard/card.module#CardModule' }
  ];
  
  export const routing: ModuleWithProviders = RouterModule.forRoot(routes);