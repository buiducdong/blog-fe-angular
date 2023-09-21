import { NgModule } from '@angular/core';
import { BlogComponent } from './blog.component';
import { BunComponent } from './components/bun/bun.component';
import { AwsComponent } from './components/aws/aws.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
      {
        path: '',
        component: BlogComponent,
        children: [
          {
            path: 'bun',
            component: BunComponent
          },
          {
            path: 'aws',
            component: AwsComponent
          },
          {
            path: '',
            redirectTo: 'bun',
            pathMatch: 'full'
          }
        ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
