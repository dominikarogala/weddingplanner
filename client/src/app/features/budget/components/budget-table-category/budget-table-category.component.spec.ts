import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetTableCategoryComponent } from './budget-table-category.component';

describe('BudgetTableCategoryComponent', () => {
  let component: BudgetTableCategoryComponent;
  let fixture: ComponentFixture<BudgetTableCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetTableCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetTableCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
