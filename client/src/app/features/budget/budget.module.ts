import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetComponent } from './budget.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BudgetOverviewComponent } from './components/budget-overview/budget-overview.component';
import { BudgetDetermineDialogComponent } from './dialogs/budget-determine-dialog/budget-determine-dialog.component';

import {
    CreateNewComponent,
    EditionComponent,
    OverviewItemComponent,
    SectionComponent,
    TableCategoryComponent,
    TableCategoryElementComponent,
    TableComponent,
} from 'src/app/shared/components';
import { BudgetTableCategoryComponent } from './components/budget-table-category/budget-table-category.component';
import { SpendingDialogComponent } from './dialogs/spending-dialog/spending-dialog.component';
import { CapitalizePipe } from 'src/app/shared/pipes';
import { BudgetTableElementComponent } from './components/budget-table-element/budget-table-element.component';

@NgModule({
    declarations: [
        BudgetComponent,
        BudgetOverviewComponent,
        BudgetDetermineDialogComponent,
        BudgetTableCategoryComponent,
        SpendingDialogComponent,
        BudgetTableElementComponent,
    ],
    imports: [
        CommonModule,
        BudgetRoutingModule,
        SharedModule,

        CreateNewComponent,
        EditionComponent,
        OverviewItemComponent,
        SectionComponent,
        TableComponent,
        TableCategoryComponent,
        TableCategoryElementComponent,

        CapitalizePipe,
    ],
})
export class BudgetModule {}
