import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetTableElementComponent } from './budget-table-element.component';

describe('BudgetTableElementComponent', () => {
  let component: BudgetTableElementComponent;
  let fixture: ComponentFixture<BudgetTableElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetTableElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetTableElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
