import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Ruta
import { routing } from "./app.router";

// Component
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeaderComponent } from './component/dashboard/header/header.component';
import { SidebarComponent } from './component/dashboard/sidebar/sidebar.component';
import { ContentComponent } from './component/dashboard/content/content.component';
import { LoginComponent } from './component/session/login/login.component';
import { RegisterComponent } from './component/session/register/register.component';
import { LockscreenComponent } from './component/session/lockscreen/lockscreen.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    LoginComponent,
    RegisterComponent,
    LockscreenComponent
  
  ],
  imports: [
    BrowserModule,
    routing
    
  ],
  providers: [],
  exports: [ RouterModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
