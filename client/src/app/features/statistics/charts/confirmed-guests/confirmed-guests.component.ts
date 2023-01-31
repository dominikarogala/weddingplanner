import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    OnInit,
} from '@angular/core';
import { Chart } from 'chart.js';
import { AbstractChartComponent } from '../../abstract-chart.component';
import { ChartDataService } from '../../chart-data.service';
import { IConfirmedGuests } from '../../statistics.model';

@Component({
    selector: 'wp-confirmed-guests',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <wp-basic-chart
            [title]="'statistics.charts.confirmedGuests' | translate"
            [chartId]="chartId"
            [chart]="chart">
        </wp-basic-chart>
    `,
})
export class ConfirmedGuestsComponent
    extends AbstractChartComponent<IConfirmedGuests>
    implements OnInit
{
    constructor(
        private _elementRef: ElementRef,
        private _chartData: ChartDataService
    ) {
        super();
    }

    ngOnInit(): void {
        this.chartId = 'confirmedGuests';

        this._chartData.getConfirmedGuests().subscribe((result) => {
            const chartData: IConfirmedGuests = {
                ...result,
                labels: ['Potwierdzeni', 'Niepotwierdzeni'],
            };
            this.createChart(chartData);
        });
    }

    createChart(chartData: IConfirmedGuests): void {
        this.chart = new Chart(
            this._elementRef.nativeElement.querySelector('#' + this.chartId),
            {
                type: 'pie',
                data: {
                    labels: chartData.labels,
                    datasets: [
                        {
                            data: [chartData.confirmed, chartData.notConfirmed],
                        },
                    ],
                },
            }
        );
    }
}
