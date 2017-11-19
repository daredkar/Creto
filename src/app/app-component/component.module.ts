import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from 'clarity-angular';
import { ROUTING } from "../app-routing/app.routing";
import { MaterialModule } from "../material.module";

import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import "hammerjs";

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    ROUTING,
    MaterialModule
  ],
  declarations: [
    HomeComponent,
    AboutComponent
  ]
})
export class ComponentModule { }
