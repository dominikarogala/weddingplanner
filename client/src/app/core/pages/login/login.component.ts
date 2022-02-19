import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ILoginData } from '../../models';

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
