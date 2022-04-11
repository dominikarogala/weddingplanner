import { NgModule } from '@angular/core';

import { ToDoListRoutingModule } from './to-do-list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToDoListComponents } from './components';
import { ToDoListComponent } from './to-do-list.component';
import { EditionComponent } from './components/edition/edition.component';

@NgModule({
    declarations: [...ToDoListComponents, ToDoListComponent, EditionComponent],
    imports: [ToDoListRoutingModule, SharedModule],
})
export class ToDoListModule {}
