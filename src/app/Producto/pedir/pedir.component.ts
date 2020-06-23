import { Component } from '@angular/core';
import { orden } from 'src/app/Modelo/orden';
import { Router } from '@angular/router';

@Component({
  selector: 'pedido-suma',
  templateUrl: 'pedir.component.html'
})
export class PedirComponent {

  constructor(public orden: orden) { }

}
