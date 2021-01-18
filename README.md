# 📦 PRUEBA INDRA - RIMAC

![simple webpack boilerplate by angel salvador](https://repository-images.githubusercontent.com/330041103/08b4fc80-591b-11eb-93f2-05a25c684360)

## 📝 Resumen

Prueba técnica usando como framework React JS junto con Typescript y creación de store global con Redux.

## 👨‍💻 Tecnologias

- React
- Redux
- Typescript
- React Router Dom
- Sass
- Axios

## 🧐 Estructura de carpetas

```
.
├── src
     ├─ assets
          ├─ images
     ├─ components
          ├─ common
          ├─ layout
          ├─ views
     ├─ routes
          ├─ private-route.tsx
          ├─ router.tsx
          ├─ routes.tsx
     ├─ services
          ├─ api-data.tsx
          ├─ user-service.tsx
     ├─ store
          ├─ actions
          ├─ reducers
          ├─ types
          ├─ store.tsx
     ├─ style
          ├─ base
          ├─ config
          ├─ layout
          ├─ lib
          ├─ themes
          ├─ style.scss
     ├─ utilities
          ├─ hooks
          ├─ types
          ├─ validators
├── App.tsx
├── index.tsx
├── .
├── .
├── .

```

## 💻 Para ejecutar

```
  Paso 1: npm install
  Paso 2: npm start
```

## 😃 Uso

Para ingresar como usuario que existe en base de datos, coloque en el campo dni `87654321`.
Para ingresar como usuario que no existe en base de datos, coloque cualquier cifra de 8 dígitos.

## 💡 Características

- Creación de una estructura de carpetas escalable
- Protección de rutas (Por ejemplo /insured)
- Creación y conexión de store global con Redux
- Creación de custom hook useForm()
- Validación de formularios y uso de useState()
- Uso de useEffect() para habilitar boton
- Creación de interfaces para tipado

## 🤔 Observaciones

- Se hizo la creación de un método falso para capturar datos `getFakeData()`, ya que no se encuentra habilitado actualmente el API
  [Obtener datos persona](https://freestyle.getsandbox.com/dummy/obtenerdatospersona), sin embargo existe un método preparado para consumir el API llamado `getData()`. Esto se encuentra en la carpeta `src/services/api-data.tsx`

## 👀 Demo

[Web Prueba Indra/Rimac](https://prueba-indra-rimac.web.app/)
