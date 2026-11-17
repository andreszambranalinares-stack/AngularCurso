import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [NgClass],
  selector: 'app-tarjeta-estado',
  styleUrl: './tarjeta-estado.css',
  templateUrl: './tarjeta-estado.html',
})
export class TarjetaEstado {
  disponible = false;
  enOferta = true;
  precio = 50;
}
