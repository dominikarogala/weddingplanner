import { NgModule } from '@angular/core';

import { GuestsComponent } from './guests.component';
import { GuestsRoutingModule } from './guests-routing.module';
import { SectionComponent } from 'src/app/shared/components/standalone';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { AddGuestDialogComponent } from './add-guest-dialog/add-guest-dialog.component';
import { GuestsService } from './guests.service';

@NgModule({
    declarations: [GuestsComponent, AddGuestDialogComponent],
    imports: [
        // user
        GuestsRoutingModule,
        SharedModule,
        TableModule,

        // standalone
        SectionComponent,
    ],
    providers: [GuestsService],
})
export class GuestsModule {}
