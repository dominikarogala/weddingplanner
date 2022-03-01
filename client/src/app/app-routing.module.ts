import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards';

import { LandingpageComponent } from './core/pages/landingpage/landingpage.component';
import { LoginComponent } from './core/pages/login/login.component';
import { RegisterComponent } from './core/pages/register/register.component';

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
