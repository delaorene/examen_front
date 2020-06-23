import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Producto/listar/listar.component';
import { PedidoDetalleComponent } from './Producto/pedir/pedidoDetalle.component';
import { ExitosoComponent } from './Producto/exitoso/exitoso.component';
import { PedidoComponent } from './Producto/pedido/pedido.component';

const routes: Routes = [
  {path: 'listar', component: ListarComponent},
  {path: "carrito", component: PedidoDetalleComponent},
  {path: "exito", component: ExitosoComponent},
  {path: "pedidos", component: PedidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
