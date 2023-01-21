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
import { GuestsEffects, guestsReducer, GuestsService } from './store/guests';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        StoreModule.forRoot({
            tasks: taskReducer,
            userConfig: userConfigReducer,
            budget: budgetReducer,
            guests: guestsReducer,
        }),
        EffectsModule.forRoot([
            TaskEffects,
            UserConfigEffects,
            BudgetEffects,
            GuestsEffects,
        ]),
    ],
    providers: [
        AccountService,
        AuthService,
        TaskService,
        UserConfigService,
        BudgetService,
        GuestsService,
    ],
})
export class CoreModule {}
