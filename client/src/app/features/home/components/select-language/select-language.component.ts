import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

import { LocalStorage } from 'src/app/shared/constants';
@Component({
    selector: 'wp-select-language',
    templateUrl: './select-language.component.html',
    styleUrls: ['./select-language.component.scss'],
})
export class SelectLanguageComponent implements OnInit {
    selectedLang!: any;
    langs = [
        {
            label: 'pl',
            flag: 'assets/flags/pl.png',
        },
        {
            label: 'en',
            flag: 'assets/flags/uk.png',
        },
    ];

    constructor(private _translate: TranslateService) {}

    ngOnInit(): void {
        this._translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.selectedLang = this.langs.find(
                (elem) => elem.label === event.lang
            );
        });
    }

    selectLang(index: number): void {
        const selectedLang = this.langs[index].label;

        localStorage.setItem(LocalStorage.LANG, selectedLang);
        this._translate.use(selectedLang);
    }
}
