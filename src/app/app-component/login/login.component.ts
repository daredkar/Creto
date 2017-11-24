import { HttpModule, Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [FormBuilder]
})
export class LoginComponent implements OnInit {

  open: Boolean = true;
  username: string = '';
  password: String = '';
  loginForm: FormGroup;
  constructor(private rout: Router, private fb: FormBuilder) {
    this.loginForm = fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.compose([Validators.minLength(10), Validators.maxLength(50),  Validators.required])]
    });
  }

  ngOnInit() {
  }

  login(form) {
    this.open = false;
    if (form.username === 'darshan' && form.password === 'darshan') {
      localStorage.setItem('loggedIn', 'true');
      let some = localStorage.getItem('loggedIn');
      this.rout.navigate(['home']);
      console.log(some);
     } else {
       this.rout.navigate(['about']);
     }
  }

  home() {
    this.open = false;
    this.rout.navigate(['home']);
  }
}
