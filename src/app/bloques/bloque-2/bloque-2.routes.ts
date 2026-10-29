import { Routes } from '@angular/router';

export const routesBloque2: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'selector-cantidad' },
  {
    path: 'selector-cantidad',
    title: 'Bloque 2 · Selector de cantidad',
    loadComponent: () =>
      import('./selector-cantidad/ejercicio-selector-cantidad').then(
        (m) => m.EjercicioSelectorCantidad,
      ),
  },
  {
    path: 'carril-b/ejercicio-2.2',
    title: 'Bloque 2 · Carril B · Ejercicio 2.2',
    loadComponent: () =>
      import('./carril-b/ejercicio-2.2/ejercicio-2-2').then((m) => m.Ejercicio22),
  },
];
