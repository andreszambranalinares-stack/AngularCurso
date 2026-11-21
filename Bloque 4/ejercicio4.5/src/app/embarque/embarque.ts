import { Component, inject } from '@angular/core';
import { ViajesService } from '../viajes-service';
import { Router } from '@angular/router';
@Component({
  imports: [],
  selector: 'app-embarque',
  styleUrl: './embarque.css',
  templateUrl: './embarque.html',
})
export class Embarque {
  private servicio = inject(ViajesService);
  private router = inject(Router);
  billete = this.servicio.verBillete();

  despegar() {
    alert('Buen Viaje!!');
    this.servicio.anularBillete();
    this.router.navigate(['/']);
  }

  anular() {
    alert('Viaje anulado');
    this.servicio.anularBillete();
    this.router.navigate(['/']);
  }
}
