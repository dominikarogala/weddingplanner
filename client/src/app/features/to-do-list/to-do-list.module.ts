import { NgModule } from '@angular/core';

import { ToDoListRoutingModule } from './to-do-list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToDoListComponents } from './components';
import { ToDoListComponent } from './to-do-list.component';
import { EditionComponent } from './components/edition/edition.component';
import { PdfService } from 'src/app/shared/services/pdf.service';

import {
    CreateNewComponent,
    SectionComponent,
    TableComponent,
} from 'src/app/shared/components';

// TODO: clean declarations -> components/index.ts

@NgModule({
    declarations: [...ToDoListComponents, ToDoListComponent, EditionComponent],
    imports: [
        ToDoListRoutingModule,
        SharedModule,
        CreateNewComponent,
        SectionComponent,
        TableComponent,
    ],
    providers: [PdfService],
})
export class ToDoListModule {}
