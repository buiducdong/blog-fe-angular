import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { BlogComponent } from './components/blog/blog.component';
import { CommonAppModule } from 'src/app/common/common.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { AboutComponent } from './components/about/about.component';
import { ConversationComponent } from './components/conversation/conversation.component';


@NgModule({
  declarations: [
    BlogComponent,
    AboutComponent,
    ConversationComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    CommonAppModule.forRoot(),
    LayoutModule
  ]
})
export class UserModule { }
