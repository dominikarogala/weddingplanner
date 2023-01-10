import { Component, Input } from '@angular/core';

@Component({
    selector: 'wp-newlyweds',
    template: `
        <wp-section
            [title]="'dashboard.newlyweds' | translate"
            image="assets/images/together.svg">
            <div class="newlyweds">
                <div class="newlyweds--name">
                    <span class="name">{{ brideName }}</span>
                    <span class="label"> panna młoda </span>
                </div>
                <h1>&</h1>
                <div class="newlyweds--name">
                    <span class="name">{{ groomName }}</span>
                    <span class="label"> pan młody </span>
                </div>
            </div>
        </wp-section>
    `,
    styleUrls: ['./newlyweds.component.scss'],
})
export class NewlywedsComponent {
    @Input() brideName = '';
    @Input() groomName = '';
}
