import { NgModule } from '@angular/core';

import { GuestsComponent } from './guests.component';
import { GuestsRoutingModule } from './guests-routing.module';
import {
    EditionComponent,
    SectionComponent,
} from 'src/app/standalone/components';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { AddGuestDialogComponent } from './add-guest-dialog/add-guest-dialog.component';
import { GuestsService } from './guests.service';
import { GuestTableElementComponent } from './guest-table-element/guest-table-element.component';
import { GuestTableCategoryComponent } from './guest-table-category/guest-table-category.component';
import { YesNoPipe } from 'src/app/standalone/pipes';

@NgModule({
    declarations: [
        GuestsComponent,
        AddGuestDialogComponent,
        GuestTableElementComponent,
        GuestTableCategoryComponent,
    ],
    imports: [
        // user
        GuestsRoutingModule,
        SharedModule,
        TableModule,

        // standalone
        SectionComponent,
        EditionComponent,
        YesNoPipe,
    ],
    providers: [GuestsService],
})
export class GuestsModule {}
