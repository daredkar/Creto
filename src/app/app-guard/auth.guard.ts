import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (localStorage.getItem('loggedIn') === "true") {
        console.log(localStorage.getItem('loggedIn'));
        return true;
      } else {
        console.log(localStorage.getItem('loggedIn'));
        this.router.navigate(['']);
        return false; }
  }
}
