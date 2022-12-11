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
            <div class="create-new--content">
                <img src="assets/images/add_files.svg" />
                <h2>{{ text }}</h2>
            </div>
        </div>
    `,
    styleUrls: ['./create-new.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class CreateNewComponent {
    @Input() text = '';
    @Output() itemClicked: EventEmitter<void> = new EventEmitter();
}
