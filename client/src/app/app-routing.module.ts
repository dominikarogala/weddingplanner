import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
    {
        path: 'todos',
        loadChildren: () =>
            import('./features/to-do-list/to-do-list.module').then(
                (m) => m.ToDoListModule
            ),
    },
    {
        path: 'budget',
        loadChildren: () =>
            import('./features/budget/budget.module').then(
                (m) => m.BudgetModule
            ),
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: '**',
        redirectTo: 'home',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
