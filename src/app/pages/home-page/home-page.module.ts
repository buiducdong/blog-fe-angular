import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { CommonAppModule } from 'src/app/common/common.module';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    LayoutModule,
    CommonAppModule.forRoot()
  ]
})
export class HomePageModule { }
