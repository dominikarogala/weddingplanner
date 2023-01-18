import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './home/components/dashboard/dashboard.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
            },
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
            {
                path: 'statistics',
                loadChildren: () =>
                    import('./statistics/statistics.module').then(
                        (m) => m.StatisticsModule
                    ),
            },
            {
                path: '**',
                redirectTo: 'dashboard',
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FeaturesRoutingModule {}
