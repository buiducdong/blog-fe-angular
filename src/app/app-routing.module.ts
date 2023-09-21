import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
      path: 'blogs',
      loadChildren: () => import('./pages/user/user.module').then(u => u.UserModule)
  },
  { 
      path: 'notfound', 
      component: NotFoundComponent },
  {
      path: '',
      loadChildren: () => import('./pages/home-page/home-page.module').then(h => h.HomePageModule)
  },
  { 
      path: '**', 
      redirectTo: 'notfound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
