import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { isPlatformServer } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  public constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platformId: string
  ) { }

  public init(): void {
    const domain = (isPlatformServer(this.platformId)) ? '../../../..' : '';

    this.iconRegistry.addSvgIcon('icon-facebook', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icons/facebook.svg'));
  }
}
