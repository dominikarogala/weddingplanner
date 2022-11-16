import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';
import { AccountService } from './services';
import { AuthService } from './services/auth.service';
import { taskReducer } from './store/task/task.reducer';
import { TaskEffects } from './store/task/task.effect';
import { TaskService } from './store/task/task.service';
import { UserConfigEffects } from './store/user-config/user-config.effect';
import { userConfigReducer, UserConfigService } from './store/user-config';

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
