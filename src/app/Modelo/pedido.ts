import { pedidoDetalle } from './pedidoDetalle';

export class pedido {
    total:number;
    dateSale:Date;
    constructor(cantidad:number) {
        this.total = cantidad;
    }
}