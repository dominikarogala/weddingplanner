import { Component, Input } from '@angular/core';
import { IBudgetCategory } from 'src/app/shared/models';

@Component({
    selector: 'wp-budget-table-category',
    templateUrl: './budget-table-category.component.html',
    styleUrls: ['./budget-table-category.component.scss'],
})
export class BudgetTableCategoryComponent {
    @Input() category: IBudgetCategory;
}
