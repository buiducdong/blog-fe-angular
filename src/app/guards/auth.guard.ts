import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  public constructor(private router: Router) {
  }

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const idToken = localStorage.getItem('id_token' || '{}');
      const userLogin = localStorage.getItem('user_login' || '{}');

      if (!idToken || !userLogin) {
        this.router.navigate(['auth/login'], { state: { directiveUrl: state.url }});
  
        return false;
      }
  
      return true;
  }

  private canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return this.canActivate(childRoute, state);
  }
  
}
