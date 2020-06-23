import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { producto } from '../Modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8899/micro_app_rest_full/ws/products/stock';


  getProductos(token: String) {
    return this.http.get<producto[]>(this.Url + "?access_token=" + token);
  }
}
