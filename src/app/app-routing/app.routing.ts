import { LoginComponent } from './../app-component/login/login.component';
import { AppComponent } from './../app.component';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from '../app-component/about/about.component';
import { HomeComponent } from '../app-component/home/home.component';
import { TaskViewComponent } from '../app-component/task-view/task-view.component';
import { AuthGuard } from 'app/app-guard/auth.guard';


export const ROUTES: Routes = [
    // {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
    {path: 'main', component: AppComponent, canActivate: [AuthGuard]},
    {path: 'task', component: TaskViewComponent, canActivate: [AuthGuard]},
    {path: '', component: LoginComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
