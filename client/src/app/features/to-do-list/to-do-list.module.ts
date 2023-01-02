import { NgModule } from '@angular/core';

import { ToDoListRoutingModule } from './to-do-list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToDoListComponents } from './components';
import { ToDoListComponent } from './to-do-list.component';
import { PdfService } from 'src/app/shared/services/pdf.service';

import {
    CreateNewComponent,
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
        SectionComponent,
        TableComponent,
        TableCategoryComponent,
        TableCategoryElementComponent,
        CategoryDialogComponent,
    ],
    providers: [PdfService],
})
export class ToDoListModule {}
