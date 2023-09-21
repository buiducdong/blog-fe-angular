import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AngularMaterialModule } from './angular-material.module';

@NgModule({
    declarations: [
    ],
    imports: [
      CommonModule,
      TranslateModule,
      AngularMaterialModule,
      RouterModule
    ],
    exports: [
        TranslateModule,
        AngularMaterialModule,
        RouterModule
    ],
    providers: []
  })
  export class CommonAppModule {
    public static forRoot(): ModuleWithProviders<CommonAppModule> {
      return {
        ngModule: CommonAppModule,
        providers: [
          /* ALL SERVICES HERE! */
        ]
      };
    }
  }