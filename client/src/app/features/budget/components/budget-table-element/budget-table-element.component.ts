import { Component, Input } from '@angular/core';
import { ISpending } from 'src/app/shared/models';

@Component({
    selector: 'wp-budget-table-element',
    templateUrl: './budget-table-element.component.html',
    styleUrls: ['./budget-table-element.component.scss'],
})
export class BudgetTableElementComponent {
    @Input() spending: ISpending;
    @Input() categoryId: string;

    onSpendingPanelClick() {}

    editSpending() {}
}
