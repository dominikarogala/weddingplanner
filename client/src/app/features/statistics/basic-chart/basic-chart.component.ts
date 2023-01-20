import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
    selector: 'wp-basic-chart',
    template: `
        <mat-card appearance="outlined" class="chart">
            <mat-card-title>
                <h2 class="chart--title">{{ title }}</h2>
            </mat-card-title>
            <mat-card-content>
                <div class="chart--container">
                    <canvas [id]="chartId">{{ chart }}</canvas>
                </div>
            </mat-card-content>
        </mat-card>
    `,
    styleUrls: ['./basic-chart.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicChartComponent {
    @Input() title = '';
    @Input() chartId = '';
    @Input() chart: Chart;
}
