import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';
import { CreateNewComponent } from './create-new/create-new.component';
import { TableComponent } from './table/table.component';
import { TableCategoryComponent } from './table-category/table-category.component';
import { TableCategoryElementComponent } from './table-category-element/table-category-element.component';

@NgModule({
    declarations: [
        CreateNewComponent,
        TableComponent,
        TableCategoryComponent,
        TableCategoryElementComponent,
    ],
    imports: [CommonModule, SharedModule],
    exports: [
        CreateNewComponent,
        TableComponent,
        TableCategoryComponent,
        TableCategoryElementComponent,
    ],
})
export class TableModule {}
