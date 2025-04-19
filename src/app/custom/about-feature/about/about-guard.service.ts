import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AboutService } from './service/about.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AboutGuardService implements CanActivate {
  constructor(private aboutService: AboutService, private router: Router) {}

  canActivate(): boolean {
    if (this.aboutService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
