import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendingDialogComponent } from './spending-dialog.component';

describe('NewSpendingDialogComponent', () => {
    let component: SpendingDialogComponent;
    let fixture: ComponentFixture<SpendingDialogComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SpendingDialogComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(SpendingDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
