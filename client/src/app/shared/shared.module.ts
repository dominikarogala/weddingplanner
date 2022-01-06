import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

import { Components } from './components';

const materialModules = [
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
];

@NgModule({
    declarations: [...Components],
    imports: [...materialModules],
    exports: [...materialModules, ...Components, CommonModule, TranslateModule],
})
export class SharedModule {}
