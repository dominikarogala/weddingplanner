import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoListComponent } from './to-do-list.component';
import { ToDoListRoutingModule } from './to-do-list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableComponent } from './components/table/table.component';
import { TableElementComponent } from './components/table-element/table-element.component';
import { TableCategoryComponent } from './components/table-category/table-category.component';
import { TaskDialogComponent } from './components/task-dialog/task-dialog.component';

@NgModule({
    declarations: [
        ToDoListComponent,
        TableComponent,
        TableElementComponent,
        TableCategoryComponent,
        TaskDialogComponent,
    ],
    imports: [ToDoListRoutingModule, SharedModule],
})
export class ToDoListModule {}
