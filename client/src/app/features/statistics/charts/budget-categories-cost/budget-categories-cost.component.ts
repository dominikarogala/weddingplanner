import { Component, ElementRef, OnInit } from '@angular/core';

import Chart from 'chart.js/auto';
import { ChartDataService } from '../../chart-data.service';
import { IBudgetCategoriesData } from '../../statistics.model';

@Component({
    selector: 'wp-budget-categories-cost',
    templateUrl: './budget-categories-cost.component.html',
    styleUrls: ['./budget-categories-cost.component.scss'],
})
export class BudgetCategoriesCostComponent implements OnInit {
    chart: Chart;

    constructor(
        private _elementRef: ElementRef,
        private _chartData: ChartDataService
    ) {}

    ngOnInit(): void {
        this._chartData.getBudgetCategoriesCostData().subscribe((chartData) => {
            this._createChart(chartData);
        });
    }

    private _createChart(chartData: IBudgetCategoriesData) {
        this.chart = new Chart(
            this._elementRef.nativeElement.querySelector(
                '#budgetCategoriesCost'
            ),
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
