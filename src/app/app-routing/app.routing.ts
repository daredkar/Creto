import { LoginComponent } from './../app-component/login/login.component';
import { AppComponent } from './../app.component';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from '../app-component/about/about.component';
import { HomeComponent } from '../app-component/home/home.component';


export const ROUTES: Routes = [
    // {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'main', component: AppComponent},
    {path: '', component: LoginComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
