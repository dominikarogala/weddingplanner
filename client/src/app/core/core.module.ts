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

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        StoreModule.forRoot({ tasks: taskReducer }),
        EffectsModule.forRoot([TaskEffects]),
    ],
    providers: [AccountService, AuthService, TaskService],
})
export class CoreModule {}
