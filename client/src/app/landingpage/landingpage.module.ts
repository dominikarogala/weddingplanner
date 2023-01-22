import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pages } from '.';
import { SharedModule } from '../shared/shared.module';

import { DoubleScreenComponent } from '../shared/components/standalone';

@NgModule({
    declarations: [...Pages],
    imports: [CommonModule, SharedModule, DoubleScreenComponent],
})
export class LandingpageModule {}
