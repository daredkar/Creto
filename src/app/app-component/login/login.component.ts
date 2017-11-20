import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  open: Boolean = true;
  constructor(private rout: Router) { }

  ngOnInit() {
  }

  login() {
    this.open = false;
    localStorage.setItem('loggedIn', 'true');
    let some = localStorage.getItem('loggedIn');
    this.rout.navigate(['home']);
    console.log(some);
  }

  home() {
    this.open = false;
    this.rout.navigate(['home']);
  }
}
