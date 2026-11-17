import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-alta-rapida',
  styleUrl: './alta-rapida.css',
  templateUrl: './alta-rapida.html',
})
export class AltaRapida {
  nombreProducto = '';
  mensaje = '';

  guardar(): void {
    if (this.nombreProducto.trim() === '') {
      this.mensaje = 'Escribe un nombre primero';
    } else {
      this.mensaje = `Guardado: ${this.nombreProducto}`;
    }
  }
}
