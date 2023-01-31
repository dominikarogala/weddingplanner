import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

export type OverviewItemType = 'money' | 'customText';

@Component({
    selector: 'wp-overview-item',
    styleUrls: ['./overview-item.component.scss'],
    templateUrl: './overview-item.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [SharedModule],
})
export class OverviewItemComponent {
    @Input() type: OverviewItemType = 'customText';
    @Input() title = '';
    @Input() amountOfMoney = 0;
    @Input() text = '';
    @Input() textColor = 'ffffff';
}
