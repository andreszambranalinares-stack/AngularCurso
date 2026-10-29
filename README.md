# Curso de Angular

Ejercicios organizados por bloque. Cada proyecto incluye su código, configuración y archivos de dependencias para poder continuar en otro equipo.

```text
bloque-2/
├── selector-cantidad/          # Proyecto Bloque2 actual
│   ├── angular.json
│   ├── package.json
│   ├── package-lock.json
│   ├── public/
│   ├── src/
│   └── tsconfig*.json
└── carril-b/
    └── ejercicio-2.2/          # Directiva de resaltado
```

| Bloque | Proyecto | Descripción |
| --- | --- | --- |
| 2 | [Selector de cantidad](bloque-2/selector-cantidad/README.md) | Proyecto actual en curso: comunicación entre componentes con entradas y eventos |
| 2 · Carril B | [Ejercicio 2.2](bloque-2/carril-b/ejercicio-2.2/README.md) | Directiva de resaltado configurable |

## Continuar en casa con el proyecto actual

El proyecto actual se ha compilado con Node.js 24.21.0 y npm 11.19.0. Usa Node.js 24 (24.15 o superior dentro de la rama 24) y npm 11.

La primera vez:

```bash
git clone https://github.com/andreszambranalinares-stack/AngularCurso.git
cd AngularCurso/bloque-2/selector-cantidad
npm ci
npm start
```

Abre `http://localhost:4200/`. No hace falta instalar Angular CLI globalmente.

Si ya tienes el repositorio clonado, ejecuta `git pull` desde su carpeta y después entra en `bloque-2/selector-cantidad`, ejecuta `npm ci` y `npm start`.

## Ejecutar el ejercicio anterior

Desde la raíz del repositorio:

```bash
cd bloque-2/carril-b/ejercicio-2.2
npm ci
npm start
```

## Qué se guarda

Se incluyen el código fuente, los recursos, las pruebas existentes, `package.json`, `package-lock.json` y la configuración de Angular y TypeScript. El archivo de bloqueo permite reinstalar las mismas versiones con `npm ci`.

Las dependencias, cachés, compilaciones y cobertura se regeneran en cada equipo y están excluidas mediante `.gitignore`. El proyecto actual se sube sin ajustes del editor; los ajustes de formato se comparten desde la raíz.

Para nuevos ejercicios, conserva una carpeta independiente dentro de `bloque-N/`, siguiendo el carril y número cuando se conozcan, y añádela al índice.
