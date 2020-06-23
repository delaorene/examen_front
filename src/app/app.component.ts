import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Examen';

  constructor(private router: Router) { }

  productos() {
    this.router.navigate(['listar']);
  }

  pedidos() {
    this.router.navigate(['pedidos']);
  }
}
