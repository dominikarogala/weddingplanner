import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestsComponent } from './guests.component';
import { GuestsRoutingModule } from './guests-routing.module';
import {
    CreateNewComponent,
    SectionComponent,
    TableComponent,
} from 'src/app/shared/components';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [GuestsComponent],
    imports: [
        CommonModule,
        GuestsRoutingModule,
        SharedModule,

        SectionComponent,
        TableComponent,
        CreateNewComponent,
    ],
})
export class GuestsModule {}
