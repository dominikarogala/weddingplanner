import { NgModule } from '@angular/core';

import { StatisticsComponent } from './statistics.component';
import { SectionComponent } from 'src/app/standalone/components';
import { SharedModule } from 'src/app/shared/shared.module';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { BudgetCategoriesCostComponent } from './charts/budget-categories-cost/budget-categories-cost.component';
import { ChartDataService } from './chart-data.service';
import { BasicChartComponent } from './basic-chart/basic-chart.component';
import { TasksCategoriesDoneComponent } from './charts/tasks-categories-done/tasks-categories-done.component';
import { GuestsSexComponent } from './charts/guests-sex/guests-sex.component';
import { ConfirmedGuestsComponent } from './charts/confirmed-guests/confirmed-guests.component';

@NgModule({
    declarations: [
        StatisticsComponent,
        BasicChartComponent,
        // charts
        BudgetCategoriesCostComponent,
        GuestsSexComponent,
        TasksCategoriesDoneComponent,
        ConfirmedGuestsComponent,
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
