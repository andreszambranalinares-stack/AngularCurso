# Curso de Angular

Todos los bloques del curso en un repositorio, con un proyecto Angular independiente por ejercicio. Cada proyecto tiene sus propios componentes, estilos, recursos, punto de arranque y pruebas. Las dependencias y herramientas se instalan una sola vez en la raíz.

## Estructura

```text
AngularCurso/
├── package.json                  # Dependencias y comandos comunes
├── package-lock.json             # Versiones para reinstalar
├── angular.json                  # Configuración de cada proyecto
├── tsconfig.json                 # Opciones base de TypeScript
└── bloques/
    └── bloque-2/
        ├── selector-cantidad/
        │   ├── src/              # Código exclusivo del ejercicio
        │   │   └── app/
        │   │       ├── app.ts
        │   │       ├── app.html
        │   │       └── selector-cantidad/
        │   ├── public/
        │   ├── tsconfig.app.json
        │   └── tsconfig.spec.json
        └── carril-b/
            └── ejercicio-2.2/
                ├── src/
                │   └── app/
                │       ├── app.ts
                │       ├── app.html
                │       └── app-resaltado.ts
                ├── public/
                ├── tsconfig.app.json
                └── tsconfig.spec.json
```

Los siguientes bloques irán en `bloques/bloque-3/`, `bloques/bloque-4/`, etc. Los ejercicios actuales tienen sus archivos separados y no importan código del otro proyecto.

## Preparar el equipo

Usa Node.js 24 (24.15 o superior dentro de la rama 24) y npm 11.

```bash
git clone https://github.com/andreszambranalinares-stack/AngularCurso.git
cd AngularCurso
npm ci
```

Instala las dependencias una vez por equipo. Después de `git pull`, repite `npm ci` si ha cambiado `package-lock.json`.

## Trabajar en un ejercicio

Ejecuta los comandos desde la raíz del repositorio:

| Ejercicio | Carpeta | Comando | Dirección |
| --- | --- | --- | --- |
| Bloque 2 · Selector | [selector-cantidad](bloques/bloque-2/selector-cantidad/README.md) | `npm run start:b2-selector` | `http://localhost:4200/` |
| Bloque 2 · Carril B · 2.2 | [ejercicio-2.2](bloques/bloque-2/carril-b/ejercicio-2.2/README.md) | `npm run start:b2-2-2` | `http://localhost:4201/` |

Cada comando abre solo ese ejercicio. Puedes cerrar el servidor con `Ctrl+C` y arrancar otro. También puedes ejecutarlos a la vez en dos terminales, ya que tienen puertos distintos.

`npm start` arranca únicamente el selector de cantidad, el ejercicio actual. Para consultar uno anterior puedes abrir sus archivos o arrancar su propio proyecto.

## Compilar y probar por separado

| Ejercicio | Compilar | Pruebas |
| --- | --- | --- |
| Selector | `npm run build:b2-selector` | `npm run test:b2-selector -- --watch=false` |
| Carril B · 2.2 | `npm run build:b2-2-2` | `npm run test:b2-2-2 -- --watch=false` |

Las compilaciones se guardan en carpetas distintas dentro de `dist/`. Cada proyecto compila y prueba sus propios archivos.

`npm run build` compila los dos proyectos. `npm test -- --watch=false` ejecuta las pruebas de los proyectos del workspace.

## Añadir otro ejercicio

Crea una nueva aplicación dentro del mismo workspace. Por ejemplo, para un futuro ejercicio del bloque 3:

```bash
npm run ng -- generate application b3-ejercicio-3-1 --project-root=bloques/bloque-3/ejercicio-3.1 --routing=false --style=css --skip-install --skip-package-json
```

El generador registra el nuevo proyecto en `angular.json` y crea sus propios archivos. Puedes arrancarlo con:

```bash
npm run ng -- serve b3-ejercicio-3-1
```

Para generar componentes dentro de un ejercicio existente, indica siempre su proyecto:

```bash
npm run ng -- generate component nombre --project=b2-selector-cantidad
```

Así el componente se crea en la carpeta de ese ejercicio. Si lo necesitas, añade un comando corto al `package.json` como los de los ejercicios actuales.

Se utiliza la estructura de [workspace con varios proyectos de Angular](https://angular.dev/reference/configs/file-structure#multiple-projects).

## Qué se guarda en Git

Código, recursos, pruebas, documentación, configuración y `package-lock.json`. Git excluye dependencias, cachés, compilaciones y ajustes del editor.
