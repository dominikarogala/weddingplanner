import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { HeaderComponent } from './header/header.component'
import { SharedModule } from '../shared/shared.module'

@NgModule({
    declarations: [HeaderComponent],
    imports: [CommonModule, HttpClientModule, FormsModule, SharedModule],
    exports: [HeaderComponent],
})
export class CoreModule {}
