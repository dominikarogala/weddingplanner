import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetCategoriesCostComponent } from './budget-categories-cost.component';

describe('BudgetCategoriesCostComponent', () => {
  let component: BudgetCategoriesCostComponent;
  let fixture: ComponentFixture<BudgetCategoriesCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetCategoriesCostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetCategoriesCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
