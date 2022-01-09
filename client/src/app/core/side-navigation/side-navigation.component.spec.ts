import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

import { TranslateMock, TranslateMockPipe } from 'src/app/tests';
import { SideNavigationComponent } from './side-navigation.component';

describe('SideNavigationComponent', () => {
    let component: SideNavigationComponent;
    let fixture: ComponentFixture<SideNavigationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SideNavigationComponent, TranslateMockPipe],
            providers: [{ provide: TranslateService, useClass: TranslateMock }],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();

        fixture = TestBed.createComponent(SideNavigationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have 2 navigations item', () => {
        const debugElement = fixture.debugElement;
        const navigationItems: DebugElement[] = debugElement.queryAll(
            By.css('.navigation--item')
        );

        expect(navigationItems.length).toBe(2);
    });
});
