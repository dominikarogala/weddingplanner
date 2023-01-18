import { NgModule } from '@angular/core';

import { ToDoListRoutingModule } from './to-do-list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToDoListComponents } from './components';
import { ToDoListComponent } from './to-do-list.component';
import { PdfService } from 'src/app/shared/services/pdf.service';

import {
    CreateNewComponent,
    EditionComponent,
    OverviewItemComponent,
    SectionComponent,
    TableCategoryComponent,
    TableCategoryElementComponent,
    TableComponent,
} from 'src/app/shared/components';
import { CategoryDialogComponent } from 'src/app/shared/dialogs';

@NgModule({
    declarations: [ToDoListComponent, ...ToDoListComponents],
    imports: [
        ToDoListRoutingModule,
        SharedModule,

        CreateNewComponent,
        OverviewItemComponent,
        SectionComponent,
        TableComponent,
        TableCategoryComponent,
        TableCategoryElementComponent,
        CategoryDialogComponent,
        EditionComponent,
    ],
    providers: [PdfService],
})
export class ToDoListModule {}
