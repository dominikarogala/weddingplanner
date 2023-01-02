import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetComponent } from './budget.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BudgetOverviewComponent } from './components/budget-overview/budget-overview.component';
import { BudgetOverviewItemComponent } from './components/budget-overview-item/budget-overview-item.component';
import { BudgetDetermineDialogComponent } from './components/budget-determine-dialog/budget-determine-dialog.component';

import {
    CreateNewComponent,
    SectionComponent,
    TableCategoryComponent,
    TableComponent,
} from 'src/app/shared/components';
import { BudgetTableCategoryComponent } from './components/budget-table-category/budget-table-category.component';

@NgModule({
    declarations: [
        BudgetComponent,
        BudgetOverviewComponent,
        BudgetOverviewItemComponent,
        BudgetDetermineDialogComponent,
        BudgetTableCategoryComponent,
    ],
    imports: [
        CommonModule,
        BudgetRoutingModule,
        SharedModule,

        CreateNewComponent,
        SectionComponent,
        TableComponent,
        TableCategoryComponent,
    ],
})
export class BudgetModule {}
