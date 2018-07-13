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
import { Stats1Component } from './component/dashboard/content/stats1/stats1.component';
import { Stats2Component } from './component/dashboard/content/stats2/stats2.component';
import { ResumenVentasComponent } from './component/dashboard/content/resumen-ventas/resumen-ventas.component';
import { SuscriptoresComponent } from './component/dashboard/content/suscriptores/suscriptores.component';
import { PlanesActivosComponent } from './component/dashboard/content/planes-activos/planes-activos.component';
import { MovimientosRecienteComponent } from './component/dashboard/content/movimientos-reciente/movimientos-reciente.component';
import { ChatComponent } from './component/dashboard/chat/chat.component';
import { PlanesComponent } from './component/dashboard/planes/planes.component';
import { ClientesComponent } from './component/dashboard/clientes/clientes.component';
import { LoteriaComponent } from './component/dashboard/loteria/loteria.component';
import { MensajeComponent } from './component/dashboard/mensaje/mensaje.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    LoginComponent,
    RegisterComponent,
    LockscreenComponent,
    Stats1Component,
    Stats2Component,
    ResumenVentasComponent,
    SuscriptoresComponent,
    PlanesActivosComponent,
    MovimientosRecienteComponent,
    ChatComponent,
    PlanesComponent,
    ClientesComponent,
    LoteriaComponent,
    MensajeComponent
  
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
