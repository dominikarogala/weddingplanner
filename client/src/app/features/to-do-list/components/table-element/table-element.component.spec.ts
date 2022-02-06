import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TableElementComponent } from './table-element.component';

describe('TableElementComponent', () => {
    let component: TableElementComponent;
    let fixture: ComponentFixture<TableElementComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [TableElementComponent],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(TableElementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
