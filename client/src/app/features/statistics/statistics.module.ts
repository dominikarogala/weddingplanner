import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsComponent } from './statistics.component';
import { SectionComponent } from 'src/app/shared/components';
import { SharedModule } from 'src/app/shared/shared.module';
import { StatisticsRoutingModule } from './statistics-routing.module';

@NgModule({
    declarations: [StatisticsComponent],
    imports: [
        CommonModule,

        StatisticsRoutingModule,
        SharedModule,

        SectionComponent,
    ],
})
export class StatisticsModule {}
