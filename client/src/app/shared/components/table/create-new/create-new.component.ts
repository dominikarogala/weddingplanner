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
        <div class="create-new">
            <div class="create-new--content" (click)="itemClicked.emit()">
                <img src="assets/images/add_files.svg" alt="" />
                <h2>{{ text }}</h2>
            </div>
        </div>
    `,
    styleUrls: ['./create-new.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateNewComponent {
    @Input() text = '';
    @Output() itemClicked: EventEmitter<void> = new EventEmitter();
}
