import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';

import { Components } from './components';
import { FormsModule } from '@angular/forms';

const materialModules = [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
];

@NgModule({
    declarations: [...Components],
    imports: [...materialModules, FormsModule],
    exports: [
        ...materialModules,
        ...Components,
        CommonModule,
        FormsModule,
        TranslateModule,
    ],
})
export class SharedModule {}
