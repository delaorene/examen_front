import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { orden } from '../Modelo/orden';
import { pedido } from '../Modelo/pedido';
import { datosPedido } from '../Modelo/datosPedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  Url = "http://localhost:8899/micro_app_rest_full/ws/pedido";
  UrlPedidos = "http://localhost:8899/micro_app_rest_full/ws/pedido/detalles";

  crearPedido(token: String, orden:orden) {
    let p = new pedido(orden.precio);
    let cr = new datosPedido(p, orden.detalles);
    return this.http.post(this.Url + "?access_token=" + token, cr);
  }

  obtenerPedidos(token: String) {
    return this.http.get<datosPedido[]>(this.UrlPedidos + "?access_token=" + token);
  }
}
