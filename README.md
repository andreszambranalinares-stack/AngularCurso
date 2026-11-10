# Curso de Angular

Repositorio de ejercicios organizado por bloques.

## Estructura

```text
AngularCurso/
├── Bloque 2/
│   ├── angular.json
│   ├── package.json
│   ├── package-lock.json
│   ├── public/
│   ├── src/
│   │   └── app/bloques/bloque-2/
│   │       ├── ejercicio-2.1/
│   │       ├── ejercicio-2.2/
│   │       ├── ejercicio-2.3/
│   │       ├── ejercicio-2.4/
│   │       ├── ejercicio-2.5/
│   │       ├── ejercicio-2.6/
│   │       └── ejercicio-2.7/
│   └── tsconfig*.json
└── Bloque 3/
    └── ejercicio3.4/
```

- [Bloque 2](Bloque%202/README.md): proyecto de los ejercicios del bloque 2. El ejercicio 2.7 incluye su propio proyecto Angular.
- [Bloque 3 · ejercicio 3.4](Bloque%203/ejercicio3.4/README.md): proyecto de panel de acciones y notificaciones.

Los ejercicios 2.1, 2.3, 2.4 y 2.6 tienen carpetas reservadas. Los ejercicios realizados conservan sus archivos y su estado de desarrollo.

## Ejecutar el bloque 2

Desde la raíz del repositorio:

```bash
cd "Bloque 2"
npm ci
npm start
```

Para ejecutar el proyecto independiente del ejercicio 2.7:

```bash
cd "Bloque 2/src/app/bloques/bloque-2/ejercicio-2.7"
npm ci
npm start
```

Consulta su [CONTINUAR.md](Bloque%202/src/app/bloques/bloque-2/ejercicio-2.7/CONTINUAR.md) para ver el trabajo pendiente.

## Ejecutar el ejercicio 3.4

Desde la raíz del repositorio:

```bash
cd "Bloque 3/ejercicio3.4"
npm ci
npm start
```

Cada proyecto se ejecuta desde la carpeta que contiene su `angular.json`. Para compilarlo, ejecuta `npm run build` en esa misma carpeta.

## Archivos excluidos

El repositorio excluye `node_modules`, `dist`, `.angular`, coberturas, registros y archivos temporales. Se conservan los archivos `package-lock.json` para instalar las dependencias con `npm ci`.
