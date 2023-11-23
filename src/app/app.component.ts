/* eslint-disable no-console */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocalizationService } from './core/service/localization.service';
import { IconService } from './core/service/icon/icon.service';
import { SocketService } from './common/services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public constructor(
    private localizationService: LocalizationService,
    private iconService: IconService,
    private socketService: SocketService
  ) {
  }

  public ngOnInit(): void {
    this.localizationService.init();
    this.iconService.init();
  }

  public ngOnDestroy() {
    // this.socketService.disconnect();
  }
}
