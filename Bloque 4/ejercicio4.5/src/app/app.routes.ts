import { Routes } from '@angular/router';
import { Planetas } from './planetas/planetas';
import { AgujeroNegro } from './agujero-negro/agujero-negro';
import { DetallePlaneta } from './detalle-planeta/detalle-planeta';
import { billeteGuard } from './billete-guard';

export const routes: Routes = [
  { path: '', component: Planetas },
  { path: 'planeta/:id', component: DetallePlaneta },
  {
    path: 'embarque',
    loadComponent: () => import('./embarque/embarque').then((m) => m.Embarque),
    canActivate: [billeteGuard],
  },
  { path: '**', component: AgujeroNegro },
];
