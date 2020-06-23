import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './Service/authentication.service';
import { ProductoService } from './Service/producto.service';
import { ListarComponent } from './Producto/listar/listar.component';
import { PedirComponent } from './Producto/pedir/pedir.component';
import { PedidoService } from './Service/pedido.service';
import { orden } from './Modelo/orden';
import { PedidoDetalleComponent } from './Producto/pedir/pedidoDetalle.component';
import { ExitosoComponent } from './Producto/exitoso/exitoso.component';
import { PedidoComponent } from './Producto/pedido/pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    PedirComponent,
    PedidoDetalleComponent,
    ExitosoComponent,
    PedidoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthenticationService, 
    ProductoService, 
    PedidoService,
    orden],
  bootstrap: [AppComponent]
})
export class AppModule { }
