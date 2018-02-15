import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private rout: Router, private fb: FormBuilder) {
    this.registerForm = fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.compose([Validators.minLength(2), Validators.maxLength(5),  Validators.required])],
      'name' : [null, Validators.required],
      'team' : [null, Validators.required],
      'role' : [null, Validators.required],
      'area_work' : [null, Validators.required]
    });
  }
  ngOnInit() {
  }

}
