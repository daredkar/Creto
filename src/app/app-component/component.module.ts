import { environment } from './../../environments/environment';
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
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { DashboardComponent } from './dashboard/dashboard.component';
import { KnowledgeBaseComponent } from './knowledge-base/knowledge-base.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    ROUTING,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    HomeComponent,
    AboutComponent,
    LoginComponent,
    TaskViewComponent,
    DashboardComponent,
    KnowledgeBaseComponent,
    SignUpComponent
  ],
  providers: [
    AuthGuard
  ]
})
export class ComponentModule { }
