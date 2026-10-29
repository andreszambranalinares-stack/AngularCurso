import { Component } from '@angular/core';
import { SelectorCantidad } from './selector-cantidad/selector-cantidad';

@Component({
  selector: 'app-ejercicio-selector-cantidad',
  imports: [SelectorCantidad],
  templateUrl: './ejercicio-selector-cantidad.html',
})
export class EjercicioSelectorCantidad {
  protected cantidad = 0;

  mostrarCantidad(numero: number) {
    this.cantidad = numero;
  }
}
