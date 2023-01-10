import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetOverviewItemComponent } from './budget-overview-item.component';

describe('BudgetOverviewItemComponent', () => {
  let component: BudgetOverviewItemComponent;
  let fixture: ComponentFixture<BudgetOverviewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetOverviewItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetOverviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
