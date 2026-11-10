import { Component } from '@angular/core';
import { SelectorCantidad } from './selector-cantidad/selector-cantidad';

@Component({
  selector: 'app-ejercicio-2-5',
  imports: [SelectorCantidad],
  templateUrl: './ejercicio-2-5.html',
  styleUrl: './ejercicio-2-5.css',
})
export class Ejercicio25 {
  protected cantidad = 0;

  mostrarCantidad(numero: number) {
    this.cantidad = numero;
  }
}
