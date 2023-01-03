import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSpendingDialogComponent } from './new-spending-dialog.component';

describe('NewSpendingDialogComponent', () => {
  let component: NewSpendingDialogComponent;
  let fixture: ComponentFixture<NewSpendingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSpendingDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSpendingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
