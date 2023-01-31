import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    OnInit,
} from '@angular/core';
import { Chart } from 'chart.js';

import { AbstractChartComponent } from '../../abstract-chart.component';
import { IGuestsSexData } from '../../statistics.model';
import { ChartDataService } from '../../chart-data.service';

@Component({
    selector: 'wp-guests-sex',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <wp-basic-chart
            [title]="'statistics.charts.guestsSex' | translate"
            [chartId]="chartId"
            [chart]="chart">
        </wp-basic-chart>
    `,
})
export class GuestsSexComponent
    extends AbstractChartComponent<IGuestsSexData>
    implements OnInit
{
    constructor(
        private _elementRef: ElementRef,
        private _chartData: ChartDataService
    ) {
        super();
    }

    ngOnInit(): void {
        this.chartId = 'guestsSex';

        this._chartData.getGuestsSex().subscribe((result) => {
            const chartData: IGuestsSexData = {
                ...result,
                labels: ['Kobiety', 'Mężczyźni', 'Nieokreślone'],
            };
            this.createChart(chartData);
        });
    }

    createChart(chartData: IGuestsSexData): void {
        this.chart = new Chart(
            this._elementRef.nativeElement.querySelector('#' + this.chartId),
            {
                type: 'pie',
                data: {
                    labels: chartData.labels,
                    datasets: [
                        {
                            data: [
                                chartData.women,
                                chartData.men,
                                chartData.unspecified,
                            ],
                        },
                    ],
                },
            }
        );
    }
}
