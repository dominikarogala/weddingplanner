import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponents } from './home/components';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { LandingpageModule } from '../landingpage/landingpage.module';
import { DashboardComponent } from './home/components/dashboard/dashboard.component';
import { UserInfogDialogComponent } from './home/components/user-infog-dialog/user-infog-dialog.component';

@NgModule({
    declarations: [...HomeComponents, HomeComponent, DashboardComponent, UserInfogDialogComponent],
    imports: [
        CommonModule,
        FeaturesRoutingModule,
        RouterModule,
        SharedModule,
        LandingpageModule,
    ],
})
export class FeaturesModule {}
