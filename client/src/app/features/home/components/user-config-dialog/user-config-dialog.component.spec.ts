import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfogDialogComponent } from './user-config-dialog.component';

describe('UserInfogDialogComponent', () => {
    let component: UserInfogDialogComponent;
    let fixture: ComponentFixture<UserInfogDialogComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserInfogDialogComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(UserInfogDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
