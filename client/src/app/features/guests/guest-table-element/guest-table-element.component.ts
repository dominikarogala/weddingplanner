import { Component, Input } from '@angular/core';

import { IGuest, IGuestsGroup } from '../guests.model';

@Component({
    selector: 'wp-guest-table-element',
    templateUrl: './guest-table-element.component.html',
    styleUrls: ['./guest-table-element.component.scss'],
})
export class GuestTableElementComponent {
    @Input() guest: IGuest;
    @Input() groupId: string;
}
