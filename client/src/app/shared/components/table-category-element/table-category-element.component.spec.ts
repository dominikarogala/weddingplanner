import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCategoryElementComponent } from './table-category-element.component';

describe('TableCategoryElementComponent', () => {
  let component: TableCategoryElementComponent;
  let fixture: ComponentFixture<TableCategoryElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TableCategoryElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCategoryElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
