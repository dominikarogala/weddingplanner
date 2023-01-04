import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetComponent } from './budget.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BudgetOverviewComponent } from './components/budget-overview/budget-overview.component';
import { BudgetOverviewItemComponent } from './components/budget-overview-item/budget-overview-item.component';
import { BudgetDetermineDialogComponent } from './dialogs/budget-determine-dialog/budget-determine-dialog.component';

import {
    CreateNewComponent,
    EditionComponent,
    SectionComponent,
    TableCategoryComponent,
    TableCategoryElementComponent,
    TableComponent,
} from 'src/app/shared/components';
import { BudgetTableCategoryComponent } from './components/budget-table-category/budget-table-category.component';
import { NewSpendingDialogComponent } from './dialogs/new-spending-dialog/new-spending-dialog.component';
import { CapitalizePipe } from 'src/app/shared/pipes';
import { BudgetTableElementComponent } from './components/budget-table-element/budget-table-element.component';

@NgModule({
    declarations: [
        BudgetComponent,
        BudgetOverviewComponent,
        BudgetOverviewItemComponent,
        BudgetDetermineDialogComponent,
        BudgetTableCategoryComponent,
        NewSpendingDialogComponent,
        BudgetTableElementComponent,
    ],
    imports: [
        CommonModule,
        BudgetRoutingModule,
        SharedModule,

        CreateNewComponent,
        SectionComponent,
        TableComponent,
        TableCategoryComponent,
        TableCategoryElementComponent,
        EditionComponent,

        CapitalizePipe,
    ],
})
export class BudgetModule {}
