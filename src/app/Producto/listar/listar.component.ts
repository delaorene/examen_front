import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authentication } from 'src/app/Modelo/authentication';
import { AuthenticationService } from 'src/app/Service/authentication.service';
import { producto } from 'src/app/Modelo/producto';
import { orden } from 'src/app/Modelo/orden';
import { ProductoService } from 'src/app/Service/producto.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  productos: producto[];
  token: authentication;
  totalProductos:number;
  constructor(private authService:AuthenticationService, private productoService: ProductoService, private orden:orden, private router: Router) {}

  ngOnInit() {
    this.authService.getToken().subscribe(data => {
      this.token = data;
      this.productoService.getProductos(this.token.access_token).subscribe(producto => {
        this.productos = producto;
        this.totalProductos = producto.length
      })
    })
  }  

  agregarProducto(producto:producto) {
    this.orden.agregarProducto(producto);
    this.router.navigateByUrl("/carrito");
   }

  elminarProducto(producto:producto) {
    this.orden.eliminarProducto(producto.sku);
    this.router.navigateByUrl("/listar");
  }
}
