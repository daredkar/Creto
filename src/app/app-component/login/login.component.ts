import { HttpModule, Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
      'password': [null, Validators.compose([Validators.minLength(2), Validators.maxLength(5),  Validators.required])]
    });
  }

  ngOnInit() {
  }

  login(form) {
    this.open = false;
    if (form.username === 'admin' && form.password === 'admin') {
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
