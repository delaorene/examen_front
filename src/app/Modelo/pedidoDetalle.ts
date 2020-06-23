import { producto } from './producto';
import { Injectable } from '@angular/core';
import { pedido } from './pedido';

@Injectable({
    providedIn: 'root'
  })
export class pedidoDetalle {
    sku:producto;
    amout:number;
    pedido:pedido;
    price:number;

    constructor(producto: producto, cantidad:number) {
        this.sku = producto;
        this.amout = cantidad;
    }


}