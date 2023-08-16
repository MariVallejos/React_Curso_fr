# Instalación y configuracion de Jest + React Testing Library
## En proyectos de React + Vite

1. Instalaciones:
```
npm install --save-dev babel-jest @babel/preset-env  @babel/preset-react 
npm install --save-dev @testing-library/react @types/jest jest-environment-jsdom
```

2. Opcional: Si usamos Fetch API en el proyecto:
```
npm install whatwg-fetch --save
```

3. Actualizar los scripts del __package.json__
```
"scripts: {
  ...
  "test": "jest --watchAll"
```

4. Crear la configuración de babel __babel.config.js__
```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```

5. Opcional, pero eventualmente necesario, crear Jest config y setup:

__jest.config.js__  __NUEVA VERSION NO NECESARIO__
```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```

__jest.setup.js__
```
// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
```

6. Modificar archivos, babel.config.js y jest.config.js:

__name.config.js "js x cjs"__
```
// Modificar archivos, 
babel.config.js por babel.config.cjs 
y jest.config.js por jest.config.cjs


//En la nueva actualizacion:

1.  No se necesita el archivo jest.config.js 
```

7. Correr test
```
npm test
```
