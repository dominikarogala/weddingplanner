import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from 'ngx-localstorage';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HeaderComponent } from './core/header/header.component';
import { LocalStorageMock, TranslateMock } from './tests';

@Component({
    selector: 'wp-header',
    template: '',
})
export class HeaderFakeComponent implements Partial<HeaderComponent> {}

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let translate: TranslateService;
    let localStorage: LocalStorageService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent, HeaderFakeComponent],
            schemas: [NO_ERRORS_SCHEMA],
            imports: [RouterTestingModule],
            providers: [
                { provide: TranslateService, useClass: TranslateMock },
                { provide: LocalStorageService, useClass: LocalStorageMock },
            ],
        });

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        translate = TestBed.inject(TranslateService);
        localStorage = TestBed.inject(LocalStorageService);

        fixture.detectChanges();
    });

    it('should create the app', () => {
        expect(component).toBeTruthy();
    });

    it(`should have as title 'wedding-planner'`, () => {
        expect(component.title).toEqual('wedding-planner');
    });

    it('#ngOnInit() should add available langs', () => {
        const spy = spyOn(translate, 'addLangs');

        component.ngOnInit();

        expect(translate.addLangs).toHaveBeenCalled();
    });
});
