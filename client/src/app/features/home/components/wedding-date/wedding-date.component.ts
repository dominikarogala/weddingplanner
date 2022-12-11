import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'wp-wedding-date',
    template: `
        <wp-section [title]="'dashboard.weddingDate' | translate | capitalize">
            <p>{{ date | date : 'fullDate' }}</p>
        </wp-section>
    `,
    styleUrls: ['./wedding-date.component.scss'],
})
export class WeddingDateComponent {
    @Input() date: string;
}
