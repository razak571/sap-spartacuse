import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutComponent } from './pages/about/about.component';
import { AboutGuardService } from './about-guard.service';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AboutGuardService],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRouting {}
