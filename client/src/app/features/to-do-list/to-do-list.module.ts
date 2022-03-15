import { NgModule } from '@angular/core';

import { ToDoListRoutingModule } from './to-do-list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToDoListComponents } from './components';
import { ToDoListComponent } from './to-do-list.component';

@NgModule({
    declarations: [...ToDoListComponents, ToDoListComponent],
    imports: [ToDoListRoutingModule, SharedModule],
})
export class ToDoListModule {}
