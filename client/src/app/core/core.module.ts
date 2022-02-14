import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Pages } from './pages';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [...Pages],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        SharedModule,
        RouterModule,
    ],
})
export class CoreModule {}
