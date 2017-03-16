import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {
  ColorsComponent,
  FontsComponent,
  IconsComponent
} from './styleguide/index';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fonts', component: FontsComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'icons', component: IconsComponent }
];

export const routing = RouterModule.forRoot(routes);
export const routedComponents = [HomeComponent, FontsComponent, IconsComponent, ColorsComponent];

