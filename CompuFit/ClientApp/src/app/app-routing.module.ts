import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClienteConsultaComponent } from './gymnasio/cliente/cliente-consulta/cliente-consulta.component';
import { ClienteRegistroComponent } from './gymnasio/cliente/cliente-registro/cliente-registro.component';
import { ProductoConsultaComponent } from './gymnasio/productos/producto-consulta/producto-consulta.component';
import { ProductoRegistroComponent } from './gymnasio/productos/producto-registro/producto-registro.component';
import { VentaConsultaComponent } from './gymnasio/venta/venta-consulta/venta-consulta.component';
import { VentaRegistroComponent } from './gymnasio/venta/venta-registro/venta-registro.component';

const routes: Routes = [
  {
    path: 'clienteConsulta',
    component: ClienteConsultaComponent
  },
  {
    path: 'clienteRegistro',
    component: ClienteRegistroComponent
  },
  {
    path: 'productoConsulta',
    component: ProductoConsultaComponent
  },
  {
    path: 'productoRegistro',
    component: ProductoRegistroComponent
  },
  {
    path: 'ventaConsulta',
    component: VentaConsultaComponent
  },
  {
    path: 'ventaRegistro',
    component: VentaRegistroComponent
  }
];




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
