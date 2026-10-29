import { Component } from '@angular/core';
import { SelectorCantidad } from './selector-cantidad/selector-cantidad';

@Component({
  selector: 'app-root',
  imports: [SelectorCantidad],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected cantidad = 0;

  mostrarCantidad(numero: number) {
    this.cantidad = numero;
  }
}
