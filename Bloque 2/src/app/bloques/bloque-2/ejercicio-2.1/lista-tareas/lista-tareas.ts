import { Component } from '@angular/core';

interface Tarea {
  id: number;
  titulo: string;
  prioridad: 'baja' | 'media' | 'alta';
}
@Component({
  imports: [],
  selector: 'app-lista-tareas',
  styleUrl: './lista-tareas.css',
  templateUrl: './lista-tareas.html',
})
export class ListaTareas {
  tareas: Tarea[] = [
    { id: 1, titulo: 'Estudiar', prioridad: 'alta' },
    { id: 2, titulo: 'Repasar', prioridad: 'media' },
    { id: 3, titulo: 'Jugar', prioridad: 'baja' },
    { id: 4, titulo: 'Jugar', prioridad: 'baja' },
  ];
}
