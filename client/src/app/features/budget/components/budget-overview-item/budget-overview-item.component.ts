import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';

export type MoneyType = 'all' | 'left' | 'spent';

@Component({
    selector: 'wp-budget-overview-item',
    styleUrls: ['./budget-overview-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <mat-card appearance="outlined" class="item">
            <mat-card-title>
                <h2>{{ title }}</h2>
                <div class="item--icon">
                    <ng-content select="[icon]"></ng-content>
                </div>
            </mat-card-title>
            <mat-card-content>
                <p
                    [ngClass]="{
                        'money-left': moneyType === 'left',
                        'money-spent': moneyType === 'spent'
                    }">
                    {{ amountOfMoney | currency: 'PLN' }}
                </p>
            </mat-card-content>
        </mat-card>
    `,
})
export class BudgetOverviewItemComponent implements OnInit {
    @Input() moneyType: MoneyType = 'all';
    @Input() title = '';
    @Input() amountOfMoney = 0;

    constructor() {}

    ngOnInit(): void {}
}
