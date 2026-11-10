# Continuar el ejercicio 2.7

Este directorio contiene una copia completa del proyecto local, incluidos los cambios sin terminar, sin node_modules ni archivos de compilación.

Desde la raíz de AngularCurso:

```bash
cd src/app/bloques/bloque-2/ejercicio-2.7
npm ci
npm start
```

También puedes abrir directamente esta carpeta en Visual Studio Code.

Estado al guardar: el ejercicio está en desarrollo. La compilación falla en `src/app/app.ts` porque `@Input()onProductoAnadido()` todavía no tiene implementación. Se conserva tal como estaba para poder continuarlo en casa.

Este proyecto tiene sus propios archivos de configuración y dependencias. Queda excluido de la compilación y las pruebas del proyecto principal.
