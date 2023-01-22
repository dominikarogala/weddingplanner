import { NgModule } from '@angular/core';

import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetComponent } from './budget.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BudgetOverviewComponent } from './components/budget-overview/budget-overview.component';
import { BudgetDetermineDialogComponent } from './dialogs/budget-determine-dialog/budget-determine-dialog.component';

import {
    EditionComponent,
    OverviewItemComponent,
    SectionComponent,
} from 'src/app/shared/components/standalone';
import { BudgetTableCategoryComponent } from './components/budget-table-category/budget-table-category.component';
import { SpendingDialogComponent } from './dialogs/spending-dialog/spending-dialog.component';
import { CapitalizePipe } from 'src/app/shared/pipes';
import { BudgetTableElementComponent } from './components/budget-table-element/budget-table-element.component';
import { TableModule } from 'src/app/shared/components/table/table.module';

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
        // user
        BudgetRoutingModule,
        SharedModule,
        TableModule,

        // standalone
        EditionComponent,
        OverviewItemComponent,
        SectionComponent,
        CapitalizePipe,
    ],
})
export class BudgetModule {}
