# Como contribuir a este proyecto

Tendrá asignadas distintas historias de usuario del proyecto. Para cada historia de usuario deberá crear distintos tipos de componentes en el proyecto. Dependiendo del tipo de componente siga la guía correspondiente:

- [Páginas](./create_new_page.md#creación-de-páginas)
- [Navegación](./modify_nav.md)
- [Recursos]()
- [Rutas dinámicas]()
- [Conectar con el API](./create_new_page.md#consumir-un-api)

## Correr el servidor de desarrollo

El primer paso a seguir es iniciar su servidor de desarrollo para verificar que su ambiente de desarrollo este funcionando correctamente. El código fuente de la aplicación esta en la carpeta app, así que todos los comandos descritos a continuación se deben ejecutar dentro de esta carpeta.

Inicie por instalar las dependencias usando

```bash
npm install
```

luego, puede iniciar el servidor de desarrollo con el comando

```bash
npm run dev
```

y luego abrir la dirección http://localhost:3000 en su navegador. Con cada cambio que haga en el código de la aplicación su navegador se actualizará automáticamente.

> La aplicación usará los APIs construidos en el taller de backend. Por lo que es importante que inicie el contenedor docker del backend.

Para verificar que su aplicación está lista para ser entregada corra el comando

```bash
npm run build
```

y asegúrese de que no hayan errores de compilación.

## Correr la aplicación con Docker

Este proyecto contiene un archivo `Dockerfile` que puede usar para crear un contenedor docker con la aplicación. Para crear la imagen use el siguiente comando:

```bash
docker build -t project-frontend:latest .
```

para ejecutar el contenedor en el puerto `13000` use:

```bash
docker run -p 13000:3000 project-frontend
```

## Referencias

- [Introducción a Next.js](https://nextjs.org/learn/foundations/about-nextjs)
