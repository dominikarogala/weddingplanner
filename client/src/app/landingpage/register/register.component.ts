import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { IRegisterData } from 'src/app/core/models';
import { AccountService } from 'src/app/core/services';

@Component({
    selector: 'wp-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss', '../styles.scss'],
})
export class RegisterComponent implements OnInit {
    registerForm = this._fb.group({
        name: ['', { validators: [Validators.required] }],
        email: ['', { validators: [Validators.required, Validators.email] }],
        password: ['', { validators: [Validators.required] }],
        repeatPassword: ['', { validators: [Validators.required] }],
    });

    constructor(
        private _account: AccountService,
        private _toastr: ToastrService,
        private _fb: FormBuilder
    ) {}

    ngOnInit(): void {}

    onFormSubmit(): void {
        const accountData: IRegisterData = {
            name: this.registerForm.value.name.toString(),
            email: this.registerForm.value.email.toString(),
            password: this.registerForm.value.password.toString(),
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
