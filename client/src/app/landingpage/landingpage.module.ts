import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Pages } from '.';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [...Pages],
    imports: [CommonModule, SharedModule],
})
export class LandingpageModule {}
