import { NgModule } from '@angular/core';

import { StatisticsComponent } from './statistics.component';
import { SectionComponent } from 'src/app/standalone/components';
import { SharedModule } from 'src/app/shared/shared.module';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { BudgetCategoriesCostComponent } from './charts/budget-categories-cost/budget-categories-cost.component';
import { ChartDataService } from './chart-data.service';
import { BasicChartComponent } from './basic-chart/basic-chart.component';
import { TasksCategoriesDoneComponent } from './charts/tasks-categories-done/tasks-categories-done.component';

@NgModule({
    declarations: [
        StatisticsComponent,
        BudgetCategoriesCostComponent,
        BasicChartComponent,
        TasksCategoriesDoneComponent,
    ],
    imports: [
        // user
        StatisticsRoutingModule,
        SharedModule,

        // standalone
        SectionComponent,
    ],
    providers: [ChartDataService],
})
export class StatisticsModule {}
