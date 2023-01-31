import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestsSexComponent } from './guests-sex.component';

describe('GuestsSexComponent', () => {
  let component: GuestsSexComponent;
  let fixture: ComponentFixture<GuestsSexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ GuestsSexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestsSexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
