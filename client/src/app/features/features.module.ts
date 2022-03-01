import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FeaturesRoutingModule } from './features-routing.module';
import { Components } from './home/components';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [...Components, HomeComponent],
    imports: [CommonModule, FeaturesRoutingModule, RouterModule, SharedModule],
})
export class FeaturesModule {}
