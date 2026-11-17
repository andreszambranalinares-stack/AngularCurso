import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarjetaProducto } from './bloques/bloque-1/ejercicio-1.3/tarjeta-producto/tarjeta-producto';
import { FichaProducto } from './bloques/bloque-1/ejercicio-1.4/ficha-producto/ficha-producto';
import { AltaRapida } from './bloques/bloque-1/ejercicio-1.5/alta-rapida/alta-rapida';
import { Cronometro } from './bloques/bloque-1/ejercicio-1.6/cronometro/cronometro';

@Component({
  imports: [RouterOutlet, TarjetaProducto, FichaProducto, AltaRapida, Cronometro],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('curso-angular');
}
