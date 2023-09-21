import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BunComponent } from './components/bun/bun.component';
import { AwsComponent } from './components/aws/aws.component';
import { CommonAppModule } from 'src/app/common/common.module';

@NgModule({
  declarations: [
    BunComponent,
    AwsComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    CommonAppModule.forRoot()
  ]
})
export class BlogModule { }
