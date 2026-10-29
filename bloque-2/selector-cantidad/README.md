# Bloque 2 · Selector de cantidad

Proyecto Angular `Bloque2`, en curso. Practica la comunicación entre un componente padre y el componente `SelectorCantidad` mediante `@Input()` y `@Output()`.

## Continuar en casa

Usa Node.js 24 (24.15 o superior dentro de la rama 24) y npm 11. La compilación se ha comprobado con Node.js 24.21.0 y npm 11.19.0.

Desde esta carpeta:

```bash
npm ci
npm start
```

Abre `http://localhost:4200/`. No necesitas instalar Angular CLI globalmente: `npm start` utiliza la versión del proyecto.

## Archivos principales

- `src/app/app.ts` y `app.html`: componente padre y recepción de la cantidad.
- `src/app/selector-cantidad/`: selector, entradas, evento de salida y botones.
- `package.json` y `package-lock.json`: dependencias y versiones para reinstalarlas.
- `angular.json` y `tsconfig*.json`: configuración de Angular y TypeScript.

`npm run build` compila la aplicación. Se conserva el código del ejercicio tal como está para seguir trabajando.

Las dependencias (`node_modules`), cachés (`.angular`), compilaciones (`dist`), cobertura y ajustes del editor no se suben. Se generan o configuran en cada equipo.

En GitHub este proyecto está en `bloque-2/selector-cantidad/`. El ejercicio anterior se conserva en `bloque-2/carril-b/ejercicio-2.2/`.
