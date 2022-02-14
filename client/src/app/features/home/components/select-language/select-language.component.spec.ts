import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from 'ngx-localstorage';

import { LocalStorageMock, TranslateMock } from 'src/app/tests';
import { SelectLanguageComponent } from './select-language.component';

describe('SelectLanguageComponent', () => {
    let component: SelectLanguageComponent;
    let fixture: ComponentFixture<SelectLanguageComponent>;
    let translate: TranslateService;
    let localStorage: LocalStorageService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [CommonModule, FormsModule, MatMenuModule],
            providers: [
                { provide: TranslateService, useClass: TranslateMock },
                { provide: LocalStorageService, useClass: LocalStorageMock },
            ],
            declarations: [SelectLanguageComponent],
        }).compileComponents();

        translate = TestBed.inject(TranslateService);
        localStorage = TestBed.inject(LocalStorageService);
        fixture = TestBed.createComponent(SelectLanguageComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('#ngOnInit() should set selectedLang', () => {
        const lang = 'en';

        translate.use(lang);

        expect(component.selectedLang.label).toBe(lang);
    });

    it('#selectLang() should set selectedLang', () => {
        component.selectLang(0);

        expect(component.selectedLang.label).toBe('pl');
    });

    it('#selectLang() should save selected language to localStorage', () => {
        const spy = spyOn(localStorage, 'set');

        component.selectLang(0);

        expect(localStorage.set).toHaveBeenCalled();
    });
});
