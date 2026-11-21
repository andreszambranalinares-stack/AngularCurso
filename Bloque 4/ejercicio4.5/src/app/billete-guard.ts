import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ViajesService } from './viajes-service';

export const billeteGuard: CanActivateFn = (route, state) => {
  const servicio = inject(ViajesService);
  const router = inject(Router);

  if (servicio.tieneBillete() === false) {
    alert('No tienes billete');
    router.navigate(['/']);
    return false;
  }
  return true;
};
