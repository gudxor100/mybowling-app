import { componentFactoryName } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../service/http.service';

@Component({
    selector: 'login',
    templateUrl: './../view/html/login.html',
    styleUrls: ['./../view/css/login.css']
})
export class LoginComponent {
    constructor(private router: Router, private httpService: HttpService) {
        
    }

    public login(): void {
        alert("test");
        this.httpService.getOnlyUrl("localhost:8080/login/test");
        this.router.navigateByUrl('main');
    }
}