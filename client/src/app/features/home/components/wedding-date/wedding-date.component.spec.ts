import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingDateComponent } from './wedding-date.component';

describe('WeddingDateComponent', () => {
  let component: WeddingDateComponent;
  let fixture: ComponentFixture<WeddingDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeddingDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeddingDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
