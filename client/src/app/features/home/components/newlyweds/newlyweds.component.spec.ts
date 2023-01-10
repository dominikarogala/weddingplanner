import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlywedsComponent } from './newlyweds.component';

describe('NewlywedsComponent', () => {
  let component: NewlywedsComponent;
  let fixture: ComponentFixture<NewlywedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewlywedsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewlywedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
