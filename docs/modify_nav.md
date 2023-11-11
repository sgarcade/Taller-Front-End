# Modificar la navegación de la aplicación

Esta aplicación usa la librería MUI de componentes de React. Hay varios componentes disponibles para crear elementos de navegación dentro de una aplicación:

- [Bottom Navigation](https://mui.com/material-ui/react-bottom-navigation/)
- [Breadcrumbs](https://mui.com/material-ui/react-breadcrumbs/)
- [Menu](https://mui.com/material-ui/react-menu/)
- [App Bar](https://mui.com/material-ui/react-app-bar/)

La aplicación ya tiene creados algunos componentes listos para usar y modificar la navegación usando un componente [`Drawer`](https://mui.com/material-ui/react-drawer/#responsive-drawer) de `mui`. Estos están dentro de la carpeta `layouts` de la app. Modifique el archivo `layouts/DashboardLayout/nav/config.js` para agregar nuevos elementos al panel izquierdo de la app:

```javascript
const navConfig = [
  {
    title: 'Users', // título de la página
    path: '/dashboard/users', // ruta para llegar a la página
    icon: <PeopleIcon />, // icono a usar en el menú
  },

```

Puede encontrar un catálogo de iconos disponibles en la la página de [@mui/material-icons](https://mui.com/material-ui/material-icons/).
