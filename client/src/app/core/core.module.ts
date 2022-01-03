import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { HeaderComponent } from './header/header.component'
import { SharedModule } from '../shared/shared.module';
import { SelectLanguageComponent } from './header/select-language/select-language.component'

@NgModule({
    declarations: [HeaderComponent, SelectLanguageComponent],
    imports: [CommonModule, HttpClientModule, FormsModule, SharedModule],
    exports: [HeaderComponent],
})
export class CoreModule {}
