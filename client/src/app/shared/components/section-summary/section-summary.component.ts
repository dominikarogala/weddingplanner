import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';

@Component({
    selector: 'wp-section-summary',
    styleUrls: ['./section-summary.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <mat-card class="content">
            <mat-card-title>
                <h1>
                    {{ title }}
                </h1>
            </mat-card-title>
            <mat-card-content>
                <ng-content></ng-content>
            </mat-card-content>
        </mat-card>
    `,
})
export class SectionSummaryComponent implements OnInit {
    @Input() title = 'Section summary';

    constructor() {}

    ngOnInit(): void {}
}
