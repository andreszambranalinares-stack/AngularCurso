import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectorCantidad } from './selector-cantidad/selector-cantidad';

@Component({
  imports: [RouterOutlet, SelectorCantidad],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  private cantidad = 0;
  mostrarCantidad(numero:number){
    this.cantidad = numero;
  }
}
