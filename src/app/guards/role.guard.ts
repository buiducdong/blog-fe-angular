import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RolesModel } from '../common/models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  public constructor(private router: Router) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const userLogin = JSON.parse(localStorage.getItem('user_login') || '{}');

      if (route.data?.['roles']?.includes(userLogin?.roles?.[0]?.roleName??RolesModel.VIEWER)) return true;

      if(
        state.url === '/'
      ){
        if(userLogin?.roles?.[0]?.roleName === RolesModel.SYSTEM ) this.router.navigate(['/system']);

      if (userLogin?.roles?.[0]?.roleName === RolesModel.ADMIN) this.router.navigate(['/admin']);
      }
      else this.router.navigate(['/notFound']);

    return false;
  }
  
}
