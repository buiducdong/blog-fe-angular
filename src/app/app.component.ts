/* eslint-disable no-console */
import { Component, OnInit } from '@angular/core';
import { LocalizationService } from './core/service/localization.service';
import { IconService } from './core/service/icon/icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public constructor(
    private localizationService: LocalizationService,
    private iconService: IconService
  ) {
  }

  public ngOnInit(): void {
    this.localizationService.init();
    this.iconService.init();
  }
}
