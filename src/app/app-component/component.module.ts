import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from 'clarity-angular';
import { ROUTING } from "../app-routing/app.routing";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import "hammerjs";
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TaskViewComponent } from './task-view/task-view.component';
import { AuthGuard } from 'app/app-guard/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    ROUTING,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    HomeComponent,
    AboutComponent,
    LoginComponent,
    TaskViewComponent
  ],
  providers: [
    AuthGuard
  ]
})
export class ComponentModule { }
