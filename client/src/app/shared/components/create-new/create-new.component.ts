import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';

@Component({
    selector: 'wp-create-new',
    template: `
        <div class="create-new" (click)="itemClicked.emit()">
            <img src="assets/images/add_files.svg" />
            <h2>{{ text }}</h2>
        </div>
    `,
    styleUrls: ['./create-new.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateNewComponent {
    @Input() text = '';
    @Output() itemClicked: EventEmitter<void> = new EventEmitter();
}
