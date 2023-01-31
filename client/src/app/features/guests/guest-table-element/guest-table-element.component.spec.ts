import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestTableElementComponent } from './guest-table-element.component';

describe('GuestTableElementComponent', () => {
  let component: GuestTableElementComponent;
  let fixture: ComponentFixture<GuestTableElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestTableElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestTableElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
