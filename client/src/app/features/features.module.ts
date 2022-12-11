import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponents } from './home/components';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { LandingpageModule } from '../landingpage/landingpage.module';
import { NewlywedsComponent } from './home/components/newlyweds/newlyweds.component';
import { WeddingDateComponent } from './home/components/wedding-date/wedding-date.component';

import { CapitalizePipe } from '../shared/pipes';
import { LogoComponent, SectionComponent } from '../shared/components';

// TODO: clean declarations -> components/index.ts

@NgModule({
    declarations: [
        ...HomeComponents,
        HomeComponent,
        NewlywedsComponent,
        WeddingDateComponent,
    ],
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
