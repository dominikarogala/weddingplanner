import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetDetermineDialogComponent } from './budget-determine-dialog.component';

describe('BudgetDetermineDialogComponent', () => {
  let component: BudgetDetermineDialogComponent;
  let fixture: ComponentFixture<BudgetDetermineDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetDetermineDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetDetermineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
