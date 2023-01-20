import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    OnInit,
} from '@angular/core';
import { Chart } from 'chart.js';
import { AbstractChartComponent } from '../../abstract-chart.component';
import { ChartDataService } from '../../chart-data.service';
import { ITaskCategoriesDoneData } from '../../statistics.model';

@Component({
    selector: 'wp-tasks-categories-done',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <wp-basic-chart
            [title]="'statistics.charts.taskCategoriesDone' | translate"
            [chartId]="chartId"
            [chart]="chart">
        </wp-basic-chart>
    `,
})
export class TasksCategoriesDoneComponent
    extends AbstractChartComponent<ITaskCategoriesDoneData>
    implements OnInit
{
    constructor(
        private _elementRef: ElementRef,
        private _chartData: ChartDataService
    ) {
        super();
    }

    ngOnInit(): void {
        this.chartId = 'taskCategoriesDone';

        this._chartData.getTaskCategoriesDoneData().subscribe((result) => {
            this.createChart(result);
        });
    }

    createChart(chartData: ITaskCategoriesDoneData): void {
        this.chart = new Chart(
            this._elementRef.nativeElement.querySelector('#' + this.chartId),
            {
                type: 'bar',
                data: {
                    labels: chartData.labels,
                    datasets: [
                        {
                            label: 'Wykonane zadania',
                            data: chartData.tasksDone,
                            backgroundColor: '#ffd740',
                        },
                        {
                            label: 'Zaplanowane zadania',
                            data: chartData.allTasks,
                            backgroundColor: '#673ab7',
                        },
                    ],
                },
            }
        );
    }
}
