import { EventEmitter } from '@angular/core';
import { LangChangeEvent } from '@ngx-translate/core';

export class TranslateMock {
    langs: string[] = [];

    private _onLangChange = new EventEmitter();
    get onLangChange(): EventEmitter<LangChangeEvent> {
        return this._onLangChange;
    }

    use(lang: string): void {
        const valueToEmit = {
            lang: lang,
            translations: [],
        };
        this.onLangChange.emit(valueToEmit);
    }

    addLangs(langs: string[]) {
        this.langs = [...langs];
    }
}
