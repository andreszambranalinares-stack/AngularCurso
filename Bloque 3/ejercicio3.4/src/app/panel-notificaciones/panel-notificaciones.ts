import { Component, inject } from '@angular/core';
import { NotiicacionesService } from '../notiicaciones-service';

@Component({
  imports: [],
  selector: 'app-panel-notificaciones',
  styleUrl: './panel-notificaciones.css',
  templateUrl: './panel-notificaciones.html',
})
export class PanelNotificaciones {
  servicio = inject(NotiicacionesService)
}
