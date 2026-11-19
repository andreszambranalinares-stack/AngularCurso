import { Routes } from '@angular/router';
import { Planetas } from './planetas/planetas';
import { AgujeroNegro } from './agujero-negro/agujero-negro';
import { DetallePlaneta } from './detalle-planeta/detalle-planeta';

export const routes: Routes = [
    {path: '' , component: Planetas},
    {path: 'planeta/:id', component: DetallePlaneta},    
    {path: '**', component: AgujeroNegro}
];
