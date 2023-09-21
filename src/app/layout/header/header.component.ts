import { Component, HostListener } from '@angular/core';
import { LocalizationService } from 'src/app/core/service/localization.service';
import { CommonNavData } from '../models/navbar.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public commonNavData = CommonNavData;

  public scrolledTo100 = false;

  public constructor(
    private localizationService: LocalizationService
  ) { }

  public langSelected(lang: string): void {
    this.localizationService.language = lang;
  }

  @HostListener('window:scroll', ['$event'])
  private onWindowScrollTo100(): void {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    this.scrolledTo100 = scrollPosition >= 150 ? true : false;
  }

}
