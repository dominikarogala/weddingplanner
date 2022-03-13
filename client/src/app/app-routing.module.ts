import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards';
import {
    LandingpageComponent,
    LoginComponent,
    RegisterComponent,
} from './landingpage';

const routes: Routes = [
    {
        path: 'landingpage',
        component: LandingpageComponent,
    },
    {
        path: 'signin',
        component: LoginComponent,
    },
    {
        path: 'signup',
        component: RegisterComponent,
    },
    {
        path: 'app',
        loadChildren: () =>
            import('./features/features.module').then((m) => m.FeaturesModule),

        canActivate: [AuthGuard],
    },
    {
        path: '**',
        redirectTo: 'landingpage',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
