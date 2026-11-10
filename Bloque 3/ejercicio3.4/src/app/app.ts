import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PanelAcciones } from './panel-acciones/panel-acciones';
import { PanelNotificaciones } from './panel-notificaciones/panel-notificaciones';

@Component({
  imports: [RouterOutlet, PanelAcciones, PanelNotificaciones],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Ejercicio3.4');
}
