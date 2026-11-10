import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotiicacionesService } from '../notiicaciones-service';

@Component({
  imports: [FormsModule],
  selector: 'app-panel-acciones',
  styleUrl: './panel-acciones.css',
  templateUrl: './panel-acciones.html',
})
export class PanelAcciones {
 
  servicio = inject(NotiicacionesService)
  texto=""
  enviar(): void{
    this.servicio.anadir(this.texto)
  }
}
