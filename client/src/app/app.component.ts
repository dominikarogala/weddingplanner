import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Langs, LocalStorage } from './shared/constants';

@Component({
    selector: 'wp-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'wedding-planner';

    constructor(private _translate: TranslateService) {}

    ngOnInit(): void {
        this._translate.addLangs([Langs.PL, Langs.EN]);
        this._setApplicationDefaultLang();
    }

    private _setApplicationDefaultLang() {
        const lang = localStorage.getItem(LocalStorage.LANG);

        if (!!lang) {
            this._translate.use(lang);
        } else {
            this._translate.use(Langs.PL);
            localStorage.setItem(LocalStorage.LANG, Langs.PL);
        }
    }
}
