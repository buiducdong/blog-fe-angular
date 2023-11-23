import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UserComponent } from './pages/user/user.component';
import { LayoutModule } from './layout/layout.module';
import { CommonAppModule } from './common/common.module';
import { HttpClientModule } from '@angular/common/http';
import { FeatureUpdateComponent } from './pages/feature-update/feature-update.component';
import { CoreModule } from './core/core.module';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { SocketServer } from './../environments/environment';

const config: SocketIoConfig = {
	url: SocketServer, // socket server url;
	options: {
		transports: ['websocket']
	}
}

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    UserComponent,
    FeatureUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    CommonAppModule.forRoot(),
    CoreModule.forRoot(),
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
