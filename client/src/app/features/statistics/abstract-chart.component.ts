import { Chart } from 'chart.js';

export abstract class AbstractChartComponent<T> {
    chart: Chart;
    chartId: string;

    abstract createChart(chartData: T): void;
}
