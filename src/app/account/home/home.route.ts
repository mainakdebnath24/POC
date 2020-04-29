import { Route, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { AuthGuard } from '../auth/helpers/auth.guard';
import { EducationComponent } from 'src/app/education/education.component';

export const homeRoute: Route = {
  path: '',
  component: HomeComponent,
  canActivate: [AuthGuard],
};

