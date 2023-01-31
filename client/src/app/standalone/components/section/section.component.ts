import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: 'wp-section',
    styleUrls: ['./section.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [SharedModule],
    template: `
        <mat-card appearance="outlined" class="card">
            <div [ngClass]="{ 'no-image': !image.length }">
                <mat-card-title>
                    <h1>
                        {{ title }}
                    </h1>
                </mat-card-title>
                <mat-card-content>
                    <ng-content></ng-content>
                </mat-card-content>
            </div>
            <img *ngIf="!!image.length" [src]="image" alt="" />
        </mat-card>
    `,
})
export class SectionComponent {
    @Input() title = 'Section summary';
    @Input() image = '';
}
