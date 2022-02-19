import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface IRegisterData {
    name: string;
    email: string;
    password: string;
    repeatPassword: string;
}

@Component({
    selector: 'wp-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss', '../styles.scss'],
})
export class RegisterComponent implements OnInit {
    registerForm = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required),
        repeatPassword: new FormControl('', Validators.required),
    });

    constructor() {}

    ngOnInit(): void {}

    onFormSubmit(): void {}
}
