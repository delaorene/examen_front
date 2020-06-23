import { pedidoDetalle } from './pedidoDetalle';
import { Injectable } from '@angular/core';
import { producto } from './producto';

@Injectable({
    providedIn: 'root'
  })
export class orden {
    detalles: pedidoDetalle[] = [];
    cantidad: number = 0;
    precio: number = 0;
  
    agregarProducto(producto: producto, cantidad: number = 1) {
      let prod = this.detalles.find(prod =>  prod.sku.sku == producto.sku);
  
      if (prod != undefined) {
          prod.amout += Number(cantidad);
      }
      else {
        this.detalles.push(new pedidoDetalle(producto, cantidad));
      }
  
      this.calcular();
    }
  
    eliminarProducto(id: String) {
      const index = this.detalles.findIndex(prod => prod.sku.sku == id);
      this.detalles.splice(index, 1);
      this.calcular();
    }
  
    limpiar() {
      this.detalles = [];
      this.cantidad = 0;
      this.precio = 0;
    }
  
    private calcular() {
      this.cantidad = 0;
      this.precio = 0;
      this.detalles.forEach(detalle => {
        this.cantidad += detalle.amout;
        this.precio += (detalle.amout* detalle.sku.price);
      });
    }
  }
  