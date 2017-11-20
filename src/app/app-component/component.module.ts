import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from 'clarity-angular';
import { ROUTING } from "../app-routing/app.routing";
import { MaterialModule } from "../material.module";
import { MatButtonModule, MatButton } from "@angular/material";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import "hammerjs";
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    ROUTING,
    MaterialModule,
    MatButtonModule
  ],
  declarations: [
    HomeComponent,
    AboutComponent,
    LoginComponent
  ]
})
export class ComponentModule { }
