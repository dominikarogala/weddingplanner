import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Pages } from './pages';
import { SharedModule } from '../shared/shared.module';
import { DoubleScreenComponent } from './components/double-screen/double-screen.component';
import { AccountService } from './services';
import { AuthService } from './services/auth.service';

@NgModule({
    declarations: [...Pages, DoubleScreenComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        RouterModule,
    ],
    providers: [AccountService, AuthService],
})
export class CoreModule {}
