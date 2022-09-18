import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetComponent } from './budget.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [BudgetComponent],
    imports: [CommonModule, BudgetRoutingModule, SharedModule],
})
export class BudgetModule {}
