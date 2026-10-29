# Curso de Angular

Una sola aplicación Angular para todos los bloques del curso. Cada ejercicio tiene su carpeta y su ruta, y todos comparten las dependencias y la configuración de la raíz.

## Empezar en casa

Usa Node.js 24 (24.15 o superior dentro de la rama 24) y npm 11.

```bash
git clone https://github.com/andreszambranalinares-stack/AngularCurso.git
cd AngularCurso
npm ci
npm start
```

Abre `http://localhost:4200/` y elige el ejercicio en el menú. Angular CLI está incluido en el proyecto.

La instalación se hace una vez en la raíz de cada equipo. En las siguientes sesiones basta con `npm start`. Después de `git pull`, repite `npm ci` si ha cambiado `package-lock.json`.

## Estructura

```text
AngularCurso/
├── package.json                 # Dependencias comunes
├── package-lock.json            # Versiones comunes
├── angular.json                 # Una sola aplicación
├── tsconfig*.json
├── public/
└── src/
    └── app/
        ├── app.*                # Menú, configuración y rutas generales
        └── bloques/
            └── bloque-2/
                ├── bloque-2.routes.ts
                ├── selector-cantidad/
                │   ├── ejercicio-selector-cantidad.ts
                │   ├── ejercicio-selector-cantidad.html
                │   └── selector-cantidad/
                │       ├── selector-cantidad.ts
                │       ├── selector-cantidad.html
                │       ├── selector-cantidad.css
                │       └── selector-cantidad.spec.ts
                └── carril-b/
                    └── ejercicio-2.2/
                        ├── ejercicio-2-2.ts
                        ├── ejercicio-2-2.html
                        ├── app-resaltado.ts
                        └── app-resaltado.spec.ts
```

## Ejercicios

| Bloque | Ejercicio | Ruta en el navegador |
| --- | --- | --- |
| 2 | [Selector de cantidad](src/app/bloques/bloque-2/selector-cantidad/README.md) | `/bloque-2/selector-cantidad` |
| 2 · Carril B | [Ejercicio 2.2: resaltado](src/app/bloques/bloque-2/carril-b/ejercicio-2.2/README.md) | `/bloque-2/carril-b/ejercicio-2.2` |

El selector conserva sus entradas, evento de salida y lógica actual para continuar el ejercicio. La directiva del ejercicio 2.2 conserva su implementación y ejemplos.

## Añadir ejercicios y bloques

1. Crea la carpeta del ejercicio dentro de `src/app/bloques/bloque-N/`; añade el carril cuando corresponda.
2. Guarda allí sus componentes, directivas, plantillas, estilos y pruebas.
3. Añade la ruta a `bloque-N.routes.ts` y un enlace al menú en `src/app/app.html`.
4. Para un bloque nuevo, conecta su archivo de rutas desde `src/app/app.routes.ts`.

Los ejercicios comparten el `package.json` y el `angular.json` de la raíz. No hay que crear un proyecto Angular ni instalar dependencias por cada ejercicio.

## Comandos comunes

Ejecuta todos los comandos desde la raíz:

| Comando | Uso |
| --- | --- |
| `npm start` | Abrir todos los ejercicios con un servidor de desarrollo |
| `npm run build` | Compilar la aplicación completa |
| `npm test -- --watch=false` | Ejecutar las pruebas una vez |

Git excluye `node_modules`, cachés de Angular, compilaciones, cobertura y ajustes del editor. Se guarda `package-lock.json` para poder reinstalar las mismas versiones.
