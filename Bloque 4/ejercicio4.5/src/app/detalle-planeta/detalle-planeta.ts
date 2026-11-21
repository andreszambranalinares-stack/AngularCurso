import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViajesService } from '../viajes-service';

@Component({
  imports: [],
  selector: 'app-detalle-planeta',
  styleUrl: './detalle-planeta.css',
  templateUrl: './detalle-planeta.html',
})
export class DetallePlaneta {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private viajesService = inject(ViajesService);
  planeta = this.viajesService.buscarPorId(Number(this.route.snapshot.paramMap.get('id')));

  comprar() {
    if (this.planeta) {
      this.viajesService.comprarBillete(this.planeta);
      this.router.navigate(['/embarque']);
    }
  }
}
