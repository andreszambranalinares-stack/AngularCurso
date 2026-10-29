# Bloque 2 · Selector de cantidad

Proyecto independiente `b2-selector-cantidad`, en curso. Practica la comunicación entre un componente padre y un hijo mediante `@Input()` y `@Output()`.

## Trabajar en este ejercicio

Desde la raíz del repositorio:

```bash
npm run start:b2-selector
```

Abre `http://localhost:4200/`.

| Acción | Comando desde la raíz |
| --- | --- |
| Arrancar | `npm run start:b2-selector` |
| Compilar solo este ejercicio | `npm run build:b2-selector` |
| Probar solo este ejercicio | `npm run test:b2-selector -- --watch=false` |
| Generar un componente en este ejercicio | `npm run ng -- generate component nombre --project=b2-selector-cantidad` |

## Archivos

- `src/app/app.ts` y `app.html`: componente padre.
- `src/app/selector-cantidad/`: componente hijo con sus entradas y evento.
- `src/styles.css` y `public/`: estilos globales y recursos exclusivos del ejercicio.
- `tsconfig.app.json` y `tsconfig.spec.json`: configuración de compilación y pruebas de este proyecto.

Se conserva la lógica del selector para continuar el ejercicio. El resto de ejercicios está en otras carpetas y se ejecuta con sus propios comandos. La instalación de Angular y sus herramientas se comparte desde la raíz.

[Volver al bloque 2](../README.md).
