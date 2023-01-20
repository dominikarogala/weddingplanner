import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    OnInit,
} from '@angular/core';
import Chart from 'chart.js/auto';

import { AbstractChartComponent } from '../../abstract-chart.component';
import { ChartDataService } from '../../chart-data.service';
import { IBudgetCategoriesCostData } from '../../statistics.model';

@Component({
    selector: 'wp-budget-categories-cost',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <wp-basic-chart
            [title]="'statistics.charts.budgetCategoriesCost' | translate"
            [chartId]="chartId"
            [chart]="chart">
        </wp-basic-chart>
    `,
})
export class BudgetCategoriesCostComponent
    extends AbstractChartComponent<IBudgetCategoriesCostData>
    implements OnInit
{
    constructor(
        private _elementRef: ElementRef,
        private _chartData: ChartDataService
    ) {
        super();
    }

    ngOnInit(): void {
        this.chartId = 'budgetCategoriesCost';

        this._chartData.getBudgetCategoriesCostData().subscribe((chartData) => {
            this.createChart(chartData);
        });
    }

    createChart(chartData: IBudgetCategoriesCostData) {
        this.chart = new Chart(
            this._elementRef.nativeElement.querySelector('#' + this.chartId),
            {
                type: 'bar',
                data: {
                    labels: chartData.labels,
                    datasets: [
                        {
                            label: 'Zapłacona zaliczka',
                            data: chartData.moneyAlreadyPaied,
                            backgroundColor: '#ffd740',
                        },
                        {
                            label: 'Suma wydatków',
                            data: chartData.prices,
                            backgroundColor: '#673ab7',
                        },
                    ],
                },
            }
        );
    }
}
