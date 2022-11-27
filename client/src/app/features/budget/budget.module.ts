import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetComponent } from './budget.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BudgetOverviewComponent } from './components/budget-overview/budget-overview.component';
import { BudgetOverviewItemComponent } from './components/budget-overview-item/budget-overview-item.component';
import { BudgetDetermineDialogComponent } from './components/budget-determine-dialog/budget-determine-dialog.component';

@NgModule({
    declarations: [
        BudgetComponent,
        BudgetOverviewComponent,
        BudgetOverviewItemComponent,
        BudgetDetermineDialogComponent,
    ],
    imports: [CommonModule, BudgetRoutingModule, SharedModule],
})
export class BudgetModule {}
