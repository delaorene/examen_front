import { pedido } from "./pedido";
import { pedidoDetalle } from './pedidoDetalle';

export class datosPedido{

    pedido:pedido;
    detalle:pedidoDetalle[];

    constructor(pedidos:pedido, detalles:pedidoDetalle[]) {
        this.pedido = pedidos;
        this.detalle = detalles;
    }

}