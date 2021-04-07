import { componentFactoryName } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './../view/html/login.html',
    styleUrls: ['./../view/css/login.css']
})
export class LoginComponent {
    private router: Router;
    constructor(router: Router) {
        this.router = router;
    }

    public login(): void {
        alert("test");
        this.router.navigateByUrl('main');
    }
}