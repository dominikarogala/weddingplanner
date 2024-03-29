import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pages } from '.';
import { SharedModule } from '../shared/shared.module';

import { DoubleScreenComponent } from '../standalone/components';

@NgModule({
    declarations: [...Pages],
    imports: [CommonModule, SharedModule, DoubleScreenComponent],
})
export class LandingpageModule {}
