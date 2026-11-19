import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ViajesService } from '../viajes-service';

@Component({
  imports: [RouterLink],
  selector: 'app-detalle-planeta',
  styleUrl: './detalle-planeta.css',
  templateUrl: './detalle-planeta.html',
})
export class DetallePlaneta {
  private route = inject(ActivatedRoute)
  private viajesService = inject(ViajesService)
  planeta = this.viajesService.buscarPorId(Number(this.route.snapshot.paramMap.get("id")))
}
