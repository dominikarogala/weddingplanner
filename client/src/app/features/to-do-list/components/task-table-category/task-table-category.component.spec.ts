import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTableCategoryComponent } from './task-table-category.component';

describe('TableCategoryComponent', () => {
    let component: TaskTableCategoryComponent;
    let fixture: ComponentFixture<TaskTableCategoryComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TaskTableCategoryComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TaskTableCategoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
