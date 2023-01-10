import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TaskTableElementComponent } from './task-table-element.component';

describe('TableElementComponent', () => {
    let component: TaskTableElementComponent;
    let fixture: ComponentFixture<TaskTableElementComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [TaskTableElementComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TaskTableElementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
