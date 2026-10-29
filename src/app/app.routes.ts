import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'bloque-2/selector-cantidad' },
  {
    path: 'bloque-2',
    loadChildren: () =>
      import('./bloques/bloque-2/bloque-2.routes').then((m) => m.routesBloque2),
  },
  { path: '**', redirectTo: 'bloque-2/selector-cantidad' },
];
