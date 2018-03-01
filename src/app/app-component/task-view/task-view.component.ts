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
  constructor(private fb: FormBuilder) {
    this.addTaskForm = fb.group({
      'title':[null, Validators.required],
      'description':[null, Validators.required],
      'assignee':[null, Validators.required],
      'startDate':[null, Validators.required],
      'status':[null, Validators.required],
      'type':[null, Validators.required],      
      'dependency':[null, Validators.required],
      'area_work':[null, Validators.required]
    });
   }

  ngOnInit() {
  }
  openAddTask() {this.open = true}
}
