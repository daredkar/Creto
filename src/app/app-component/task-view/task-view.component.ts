import { HttpModule, Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';  

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  open: boolean = false;
  addTaskForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  openAddTask() {this.open = true}
}
