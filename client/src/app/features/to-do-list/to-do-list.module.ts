import { NgModule } from '@angular/core';

import { ToDoListRoutingModule } from './to-do-list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToDoListComponents } from './components';
import { ToDoListComponent } from './to-do-list.component';
import { PdfService } from 'src/app/shared/services/pdf.service';

import {
    EditionComponent,
    OverviewItemComponent,
    SectionComponent,
} from 'src/app/standalone/components';
import { CategoryDialogComponent } from 'src/app/shared/dialogs';
import { TableModule } from 'src/app/shared/components/table/table.module';

@NgModule({
    declarations: [ToDoListComponent, ...ToDoListComponents],
    imports: [
        // user
        ToDoListRoutingModule,
        SharedModule,
        TableModule,

        // standalone
        OverviewItemComponent,
        SectionComponent,
        CategoryDialogComponent,
        EditionComponent,
    ],
    providers: [PdfService],
})
export class ToDoListModule {}
