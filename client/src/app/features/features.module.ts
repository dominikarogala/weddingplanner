import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponents } from './home/components';
import { SharedModule } from '../shared/shared.module';
import { LandingpageModule } from '../landingpage/landingpage.module';

import { CapitalizePipe } from '../standalone/pipes';
import { LogoComponent, SectionComponent } from '../standalone/components';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [HomeComponent, ...HomeComponents],
    imports: [
        CommonModule,
        FeaturesRoutingModule,
        RouterModule,
        SharedModule,
        LandingpageModule,

        CapitalizePipe,
        SectionComponent,
        LogoComponent,
    ],
})
export class FeaturesModule {}
