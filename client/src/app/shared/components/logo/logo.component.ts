import { Component, Input, OnInit } from '@angular/core';

export type LogoType = 'light' | 'dark';

@Component({
    selector: 'wp-logo',
    template: `
        <div
            class="logo clickable"
            [ngClass]="{
                'logo--dark': type === 'dark',
                'logo--light': type === 'light'
            }">
            <h2>WeddingPlanner</h2>
        </div>
    `,
    styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
    @Input() type: LogoType = 'dark';

    constructor() {}

    ngOnInit(): void {}
}
