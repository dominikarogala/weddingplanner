import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { SelectLanguageComponent } from './header/select-language/select-language.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        HeaderComponent,
        SelectLanguageComponent,
        SideNavigationComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        SharedModule,
        RouterModule,
    ],
    exports: [HeaderComponent, SideNavigationComponent],
})
export class CoreModule {}
