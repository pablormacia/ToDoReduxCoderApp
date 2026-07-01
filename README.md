# 📱 Todo App – React Native (Expo SDK 56)

Aplicación de lista de tareas desarrollada con React Native + Expo, pensada como proyecto integrador para explicar herramientas modernas de desarrollo móvil.

Incluye autenticación, persistencia de sesión, base de datos en tiempo real y notificaciones locales.

---

## 🚀 Tecnologías utilizadas

- React Native (Expo SDK 56)
- React Navigation
- Redux Toolkit
- RTK Query
- Firebase Authentication
- Firebase Realtime Database (RTDB)
- Expo Notifications
- Expo Image Assets (icono + splash)
- AsyncStorage (persistencia de sesión Firebase)

---

## ⚠️ Requisito importante

Esta app **NO funciona correctamente en Expo Go**.

👉 Debe ejecutarse con:

- Development Build (Expo Dev Client)
- o `npx expo run:android`

---

## 🧩 Funcionalidades

### 🔐 Autenticación

- Registro de usuario con email y contraseña
- Login con Firebase Auth
- Logout
- Persistencia de sesión (el usuario no se desloguea al cerrar la app)

---

### 📋 Gestión de tareas

- Crear tareas
- Listar tareas desde Firebase RTDB
- Marcar tareas como completadas
- Eliminar tareas (opcional si lo agregaste en clase)

Implementado con:
- RTK Query para comunicación con Firebase
- Cache automática e invalidación de datos

---

### 🔔 Notificaciones locales

- Activar recordatorio al crear una tarea
- Notificación programada en segundos usando `expo-notifications`
- Ejecución incluso con la app en segundo plano

---

### 👤 Perfil de usuario

- Usuario autenticado desde Firebase
- Foto de perfil almacenada en Firebase RTDB (opcional según implementación)
- Estado global sincronizado con Redux

---

### 🎨 UI / UX

- Icono personalizado de la app
- Splash screen personalizado
- Componentes estilizados con React Native StyleSheet

---

## 🔑 Configuración de Firebase

El proyecto utiliza:

- Firebase Auth
- Firebase Realtime Database

Ejemplo de configuración:

```js
const firebaseConfig = {
  apiKey: "XXX",
  authDomain: "XXX",
  databaseURL: "XXX",
  projectId: "XXX",
  storageBucket: "XXX",
  messagingSenderId: "XXX",
  appId: "XXX",
};
```

## 📦 Instalación

```
npm install
```
o
```
yarn install
```

## ▶️ Ejecución en desarrollo

```
npx expo start
```

## ⚠️ Importante:
Para ejecutar correctamente todas las features nativas:
```
npx expo run:android
```
o usar Expo Development Build.


## 🧠 Conceptos enseñados en el proyecto

Este proyecto fue diseñado para explicar:

Estado global con Redux Toolkit
Queries y mutations con RTK Query
Sincronización con backend (Firebase RTDB)
Autenticación y sesión persistente
Integración con APIs nativas (notificaciones)
Ciclo completo de una app móvil moderna
Preparación para producción con EAS Build


## 📦 Build y publicación

Se utiliza Expo Application Services (EAS):

eas build -p android

Luego se genera un .aab para subir a Google Play Console.


## 🧑‍🏫 Objetivo pedagógico

Mostrar el flujo completo de una app real:

UI → Redux → RTK Query → Firebase → Notificaciones → Build → Deploy

## 👤 Autor

Pablo Macia, para Coderhouse