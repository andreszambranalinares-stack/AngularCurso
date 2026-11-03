import { Component, Input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  private productos = [
    {id:1, nombre:"Zapatos",precio:39.99, disponible: true},
    {id:2, nombre:"Limpia Zapatos",precio:9.99, disponible: true},
    {id:3, nombre:"Camiseta NBA",precio:59.99, disponible: false}
  ];
  private carrito: string[] = []


  @Input()onProductoAnadido()
}
