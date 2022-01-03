import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'

import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'

const materialModules = [MatMenuModule, MatIconModule, MatButtonModule]

@NgModule({
    declarations: [],
    imports: [...materialModules],
    exports: [...materialModules, CommonModule, TranslateModule],
})
export class SharedModule {}
