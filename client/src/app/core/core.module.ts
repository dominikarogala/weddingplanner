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

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        StoreModule.forRoot({
            tasks: taskReducer,
            userConfig: userConfigReducer,
        }),
        EffectsModule.forRoot([TaskEffects, UserConfigEffects]),
    ],
    providers: [AccountService, AuthService, TaskService, UserConfigService],
})
export class CoreModule {}
