import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { IRegisterData } from 'src/app/core/models';
import { AccountService } from 'src/app/core/services';

@Component({
    selector: 'wp-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss', '../styles.scss'],
})
export class RegisterComponent implements OnInit {
    registerForm = new UntypedFormGroup({
        name: new UntypedFormControl('', Validators.required),
        email: new UntypedFormControl('', [Validators.required, Validators.email]),
        password: new UntypedFormControl('', Validators.required),
        repeatPassword: new UntypedFormControl('', Validators.required),
    });

    constructor(
        private _account: AccountService,
        private _toastr: ToastrService
    ) {}

    ngOnInit(): void {}

    onFormSubmit(): void {
        const accountData: IRegisterData = {
            name: this.registerForm.get('name')?.value,
            email: this.registerForm.get('email')?.value,
            password: this.registerForm.get('password')?.value,
        };

        this._account.createAccount(accountData).subscribe({
            next: (value) => {
                this._toastr.success(
                    'Udało się utworzyć konto. Zaloguj się i baw się dobrze, podczas korzystania z Wedding Planner!',
                    'Konto utworzone!'
                );
            },
            error: (err: HttpErrorResponse) => {
                if (
                    err.error.statusCode === 400 &&
                    err.error.message === 'user exists'
                ) {
                    this._toastr.error(
                        'Konto o podanym adresie e-mail już istnieje'
                    );
                }
            },
        });
    }
}
