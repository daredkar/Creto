import { SignUpComponent } from './../app-component/sign-up/sign-up.component';
import { KnowledgeBaseComponent } from './../app-component/knowledge-base/knowledge-base.component';
import { LoginComponent } from './../app-component/login/login.component';
import { AppComponent } from './../app.component';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from '../app-component/about/about.component';
import { HomeComponent } from '../app-component/home/home.component';
import { TaskViewComponent } from '../app-component/task-view/task-view.component';
import { AuthGuard } from 'app/app-guard/auth.guard';
import { DashboardComponent } from 'app/app-component/dashboard/dashboard.component';



export const ROUTES: Routes = [
    // {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
    {path: 'document', component: AppComponent, canActivate: [AuthGuard]},
    {path: 'task', component: TaskViewComponent, canActivate: [AuthGuard]},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    {path: 'knowledge', component: KnowledgeBaseComponent, canActivate: [AuthGuard]},
    {path: 'register', component: SignUpComponent, canActivate: [AuthGuard]},
    {path: '', component: LoginComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
