import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

@Component({
    selector: 'wp-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'wedding-planner'

    constructor(private _translate: TranslateService) {
        // TODO: w przyszłości brać z jakiegoś local storage usera
        this._translate.setDefaultLang('pl')
    }
}
