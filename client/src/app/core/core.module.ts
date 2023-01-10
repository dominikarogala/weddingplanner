import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';
import { AccountService, AuthService } from './services';
import {
    UserConfigEffects,
    userConfigReducer,
    UserConfigService,
} from './store/user-config';
import { TaskEffects, taskReducer, TaskService } from './store/task';
import { BudgetEffects, budgetReducer } from './store/budget';
import { BudgetService } from './store/budget/budget.service';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        StoreModule.forRoot({
            tasks: taskReducer,
            userConfig: userConfigReducer,
            budget: budgetReducer,
        }),
        EffectsModule.forRoot([TaskEffects, UserConfigEffects, BudgetEffects]),
    ],
    providers: [
        AccountService,
        AuthService,
        TaskService,
        UserConfigService,
        BudgetService,
    ],
})
export class CoreModule {}
