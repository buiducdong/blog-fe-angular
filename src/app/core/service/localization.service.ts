import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { Localization } from '../models';
import { LocalstorageService } from './localstorage/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  public defaultLanguage: string = environment.localization.defaultLanguage;
  public supportedLanguages: Array<string> = [];

  public constructor(
    private translateService: TranslateService,
    private storage: LocalstorageService
  ) { }

  public init(): void {
    const localization: Localization = environment.localization;
    const languages: Array<string> = environment.localization.languages.map((lang) => lang.code);
    const languageStorage = this.storage.get('lang');

    this.supportedLanguages = languages;
    this.defaultLanguage = languageStorage ? languageStorage : localization.defaultLanguage;

    this.translateService.addLangs(languages);
    this.translateService.setDefaultLang(this.defaultLanguage);
    this.translateService.use(this.defaultLanguage);
  }

  // Get language
  public get language(): string {
    return this.translateService.currentLang;
  }

  // Set language
  public set language(language: string) {
    const isSupportedLanguage: boolean = this.supportedLanguages.find((lang) => lang === language) !== null;

    if (!isSupportedLanguage) {
      language = this.defaultLanguage;
    }

    this.translateService.use(language);
    this.storage.add('lang', language);
  }
}
