import { Component, OnInit, ViewEncapsulation } from '@angular/core';

interface ILoginData {
    email: string;
    password: string;
}

@Component({
    selector: 'wp-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss', '../styles.scss'],
})
export class LoginComponent implements OnInit {
    loginData: ILoginData = { email: '', password: '' };

    constructor() {}

    ngOnInit(): void {}

    login(): void {}
}
