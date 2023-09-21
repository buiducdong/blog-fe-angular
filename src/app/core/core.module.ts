import { CommonModule } from '@angular/common';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonAppModule } from '../common/common.module';
import { JwtInterceptor } from './interceptor';
import { IconService } from './service/icon/icon.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    CommonAppModule.forRoot()
  ]
})
export class CoreModule {
  public constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('The CoreModule has been already created');
    }
  }

  public static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        }).providers!,
        IconService
      ]
    };
  }
}
