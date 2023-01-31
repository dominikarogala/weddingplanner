import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
    name: 'yesNo',
    standalone: true,
})
export class YesNoPipe implements PipeTransform {
    constructor(private _translate: TranslateService) {}

    transform(value: boolean): string {
        if (value) {
            return this._translate.instant('app.yesBig');
        } else {
            return this._translate.instant('app.noBig');
        }
    }
}
