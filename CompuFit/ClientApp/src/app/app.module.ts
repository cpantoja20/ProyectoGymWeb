import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AppRoutingModule } from './app-routing.module';
import { ClienteConsultaComponent } from './gymnasio/cliente/cliente-consulta/cliente-consulta.component';
import { ClienteRegistroComponent } from './gymnasio/cliente/cliente-registro/cliente-registro.component';
import { ProductoRegistroComponent } from './gymnasio/productos/producto-registro/producto-registro.component';
import { ProductoConsultaComponent } from './gymnasio/productos/producto-consulta/producto-consulta.component';
import { VentaConsultaComponent } from './gymnasio/venta/venta-consulta/venta-consulta.component';
import { VentaRegistroComponent } from './gymnasio/venta/venta-registro/venta-registro.component';
import { ClientesService } from './services/clientes.service';
import { FiltroClientePipe } from './pipespipe/filtro-cliente.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ClienteConsultaComponent,
    ClienteRegistroComponent,
    ProductoRegistroComponent,
    ProductoConsultaComponent,
    VentaConsultaComponent,
    VentaRegistroComponent,
    FiltroClientePipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    AppRoutingModule
  ],
  providers: [ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
