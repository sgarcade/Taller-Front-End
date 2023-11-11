# Creación de páginas

Para crear una nueva página en la aplicación, cree un archivo `.js` dentro de la carpeta `pages` del proyecto. Use el nombre con el cual quiere acceder la página, por ejemplo, `dashboard/users.js` para crear una página que será accedida usando la dirección `http://localhost:3000/dashboard/users`.

## Layout

El proyecto ya cuenta con un componente de layout que puede usar para crear nuevas páginas. Este componente agregará los menús y demás elementos comunes de una página de la aplicación. El nombre de este componente es `DashboardLayout`. Para usarlo importe el componente y agregue la etiqueta `DashboardLayout` a su página, por ejemplo:

```javascript
import DashboardLayout from 'layouts/DashboardLayout';
export default function UsersPage() {
  return (
    <DashboardLayout>
      ... // el contenido de la página
    </DashboardLayout>
  );
}
```

## Componentes

Este proyecto usa la librería Material UI (mui). Esta ofrece componentes para crear formularios, menús, paneles, y muchos otros elementos comunes en una aplicación web. Puede consultar más sobre como usar estos componentes en la página de [mui](https://mui.com/core/).

Por ejemplo, para agregar un panel que contendrá un formulario con un campo de texto puede usar el siguiente código:

```javascript
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';
...
export default function UsersPage() {
  return (
    <DashboardLayout>
      <FormControl>
       <FormLabel>Enter Name</FormLabel>
       <TextField value={name}></TextField>
       <Button>Submit</Button>
      </FormControl>
    </DashboardLayout>
  );
}
```

## Formularios

Cuando quiera crear un formulario con el que pueda capturar información del usuario use la etiqueta `form`. Esta etiqueta tiene un atributo `onSubmit` que indica que función del componente manejara el procesamiento de los datos al dar clic en enviar. Por ejemplo:

```javascript
...
export default function UsersPage() {
  // Esta función manejará el envío del formulario
  const handleSubmit = async (event) => {
    // Use esta instrucción para evitar que el navegador refresque la página
    event.preventDefault();
    // Agregue aquí el código para procesar los datos
  }
  return (
    ...
    <form onSubmit={handleSubmit}>
        ... // incluya aquí los componentes del formulario
    </form>
    ...
  );
}
```

## Consumir un API

Puede usar la librería [axios](https://axios-http.com/docs/intro) o la [función fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) para interactuar con un API.

## Navegar a otra página

Si necesita enviar al usuario a otra página después de procesar un resultado, puede usar el objeto router https://nextjs.org/docs/pages/api-reference/functions/use-router a través del hook useRouter. Este tiene un método push que puede usar para enviar el usuario a otra página. Por ejemplo, para ir a la página principal desde otra página, puede usar el siguiente código:

```javascript
import { useRouter } from 'next/router';
...
export default function CreateUserPage() {
  const router = useRouter();
  const handleSubmit = async (event) => {
    ...
    // Al terminar envíe el usuario a la página principal
    router.push("/home");
  }
  return (
    <form onSubmit={handleSubmit}>
    </form>
  );
}
```

## Referencias

- [Navegando entre páginas en NextJS](https://nextjs.org/learn/basics/navigate-between-pages/pages-in-nextjs)
