import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-ficha-producto',
  styleUrl: './ficha-producto.css',
  templateUrl: './ficha-producto.html',
})
export class FichaProducto {
  nombre = 'camiseta';
  precio = '50';
  imageUrl = 'https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif';
  disponible = true;
}
