import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnChanges, DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, DoCheck {
    open: Boolean = true;
    loggedIn: boolean = false;
    constructor(private router: Router) {
        console.log(localStorage.getItem('loggedIn'));
    }
    ngOnInit() {
        if (localStorage.getItem('loggedIn') === "true") {
            this.loggedIn = true;
        }
    }
    ngOnChanges() {
        if (localStorage.getItem('loggedIn') === "true") {
            this.loggedIn = true;
        }
    }
    ngDoCheck() {
        if (localStorage.getItem('loggedIn') === "true") {
            this.loggedIn = true;
        }
    }
    logout() {
        localStorage.setItem('loggedIn', 'false');
        this.loggedIn = false;
        console.log(localStorage.getItem('loggedIn'));
        this.router.navigate(['']);
    }
    login() {
        localStorage.setItem('loggedIn', 'true');
        let some = localStorage.getItem('loggedIn');
        this.router.navigate(['home']);
        console.log(some);
      }
      home() {
        this.open = false;
        this.router.navigate(['home']);
      }
}
