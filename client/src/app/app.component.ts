import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from 'ngx-localstorage';

import { Langs, LocalStorage } from './shared/constants';

@Component({
    selector: 'wp-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'wedding-planner';

    constructor(
        private _translate: TranslateService,
        private _localStorage: LocalStorageService
    ) {}

    ngOnInit(): void {
        this._translate.addLangs([Langs.PL, Langs.EN]);
        this._setApplicationDefaultLang();
    }

    private _setApplicationDefaultLang() {
        const lang = this._localStorage.get(LocalStorage.LANG);

        if (!!lang) {
            this._translate.use(lang);
        } else {
            this._translate.use(Langs.PL);
            this._localStorage.set(LocalStorage.LANG, Langs.PL);
        }
    }
}
