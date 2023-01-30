import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestTableCategoryComponent } from './guest-table-category.component';

describe('GuestTableCategoryComponent', () => {
  let component: GuestTableCategoryComponent;
  let fixture: ComponentFixture<GuestTableCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestTableCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestTableCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
