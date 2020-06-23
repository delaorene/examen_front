import { Component } from '@angular/core';
import { orden } from 'src/app/Modelo/orden';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Service/authentication.service';
import { PedidoService } from 'src/app/Service/pedido.service';
import { authentication } from 'src/app/Modelo/authentication';
import { pedido } from 'src/app/Modelo/pedido';

@Component({
  templateUrl: './pedidoDetalle.component.html'
})
export class PedidoDetalleComponent {

    token: authentication;
    pedidos:pedido[];
    constructor(public orden: orden, private authService:AuthenticationService, private pedidoService:PedidoService,  private router: Router) { }

  hacerPedido(crear:orden) {
        this.authService.getToken().subscribe(data => {
            this.token = data;
            this.pedidoService.crearPedido(this.token.access_token,crear).subscribe(data => {});
            crear.limpiar();
        })
        this.router.navigate(['exito']);
    }
 }
