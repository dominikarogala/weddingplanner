import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'todos',
                loadChildren: () =>
                    import('./to-do-list/to-do-list.module').then(
                        (m) => m.ToDoListModule
                    ),
            },
            {
                path: 'budget',
                loadChildren: () =>
                    import('./budget/budget.module').then(
                        (m) => m.BudgetModule
                    ),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FeaturesRoutingModule {}
