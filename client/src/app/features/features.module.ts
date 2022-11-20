import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponents } from './home/components';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { LandingpageModule } from '../landingpage/landingpage.module';
import { NewlywedsComponent } from './home/components/newlyweds/newlyweds.component';

@NgModule({
    declarations: [...HomeComponents, HomeComponent, NewlywedsComponent],
    imports: [
        CommonModule,
        FeaturesRoutingModule,
        RouterModule,
        SharedModule,
        LandingpageModule,
    ],
})
export class FeaturesModule {}
