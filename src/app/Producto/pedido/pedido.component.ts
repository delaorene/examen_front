import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Service/authentication.service';
import { PedidoService } from 'src/app/Service/pedido.service';
import { authentication } from 'src/app/Modelo/authentication';
import { pedido } from 'src/app/Modelo/pedido';
import { datosPedido } from 'src/app/Modelo/datosPedido';
import { pedidoDetalle } from 'src/app/Modelo/pedidoDetalle';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  token:authentication;
  pedidos:datosPedido[];
  totalPedidos:number;
  constructor(private authService:AuthenticationService, private pedidoService:PedidoService) { }

  ngOnInit() {
    this.authService.getToken().subscribe(data => {
      this.token = data;
      this.pedidoService.obtenerPedidos(this.token.access_token).subscribe(data => {
          this.pedidos = data;
          this.totalPedidos = data.length
        });
    })
  }

}
