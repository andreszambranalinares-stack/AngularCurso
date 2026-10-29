# Bloque 2 · Carril B · Ejercicio 2.2

Proyecto independiente `b2-carril-b-2-2`. La directiva `appResaltado` cambia el fondo al pasar el ratón y lo restaura al salir.

## Consultar o ejecutar

Desde la raíz del repositorio:

```bash
npm run start:b2-2-2
```

Abre `http://localhost:4201/`.

| Acción | Comando desde la raíz |
| --- | --- |
| Arrancar | `npm run start:b2-2-2` |
| Compilar solo este ejercicio | `npm run build:b2-2-2` |
| Probar solo este ejercicio | `npm run test:b2-2-2 -- --watch=false` |
| Generar un componente en este ejercicio | `npm run ng -- generate component nombre --project=b2-carril-b-2-2` |

## Archivos

- `src/app/app-resaltado.ts`: implementación de la directiva.
- `src/app/app-resaltado.spec.ts`: pruebas de los colores y eventos del ratón.
- `src/app/app.ts` y `app.html`: componente raíz y ejemplos.
- `src/styles.css` y `public/`: estilos globales y recursos exclusivos.
- `tsconfig.app.json` y `tsconfig.spec.json`: compilación y pruebas de este proyecto.

Se conserva la implementación de la directiva. El proyecto utiliza la instalación común de Angular de la raíz y se arranca de forma independiente.

[Volver al bloque 2](../../README.md).
