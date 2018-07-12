import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Child Routes

// Component
import { DashboardComponent } from "./component/dashboard/dashboard.component"; 
import { RegisterComponent} from "./component/session/register/register.component";
import { LoginComponent} from "./component/session/login/login.component";
import { LockscreenComponent} from "./component/session/lockscreen/lockscreen.component";


const appRoutes: Routes = [ 
    { path: '', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'lockscreen', component: LockscreenComponent },
 
   ];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);