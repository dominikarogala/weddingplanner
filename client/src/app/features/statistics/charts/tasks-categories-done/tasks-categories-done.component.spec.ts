import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksCategoriesDoneComponent } from './tasks-categories-done.component';

describe('TasksCategoriesDoneComponent', () => {
  let component: TasksCategoriesDoneComponent;
  let fixture: ComponentFixture<TasksCategoriesDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksCategoriesDoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksCategoriesDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
