import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsComponent } from './statistics.component';
import { SectionComponent } from 'src/app/shared/components';
import { SharedModule } from 'src/app/shared/shared.module';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { BudgetCategoriesCostComponent } from './charts/budget-categories-cost/budget-categories-cost.component';
import { ChartDataService } from './chart-data.service';

@NgModule({
    declarations: [StatisticsComponent, BudgetCategoriesCostComponent],
    imports: [
        CommonModule,

        StatisticsRoutingModule,
        SharedModule,

        SectionComponent,
    ],
    providers: [ChartDataService],
})
export class StatisticsModule {}
