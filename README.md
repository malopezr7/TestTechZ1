# Prueba técnica de React Native

## Introducción

Te damos la bienvenida a la prueba técnica para React Native Developer de [Z1](https://z1.digital/)!
En esta fase habrá que ejecutar un caso práctico muy parecido a lo que nos podemos encontrar en una aplicación de producción de Z1.

## Contexto

Dada la siguiente query de GraphQL, `items`, disponible en esta API:

⚙ [https://tech.z1.digital/graphql](https://tech.z1.digital/graphql)


Se busca implementar: 

- Una pantalla en la que se muestre:
    - Un título
    - Un menú horizontal que permita filtrar los elementos de la lista por tipo
    - Un listado con los elementos seleccionados en base al filtro
- **(Opcional)** Generar una pantalla extra que sirva para mostrar la vista de  "Detalle" para los items de la lista.
- **(Opcional)** Utilizar una librería de navegación para montar el flujo principal (listado & vista de detalle).

**El objetivo de la prueba no es estético, así que no hace falta implementar ningún estilo complejo** (ya sea tipografías, colores, loaders, empty states, etc), no se tendrá en cuenta.

La prueba es una versión muy simplificada de una de las pantallas que tenemos a día de hoy en una app en producción (la app en cuestión es [Trip](https://apps.apple.com/us/app/trip-expand-your-mind/id1520623904)), por si la queréis tomar como referencia.

## ¿Qué se tendrá en cuenta a la hora de evaluar?

- Estructura del proyecto en general.
- Estructura de los componentes / contenedores.
- Claridad del código y utilización de buenas prácticas.
- Eficiencia de la solución entregada.
- Utilización de herramientas para mantener la calidad del código elevada y que siga estándares.
- Utilización correcta de TypeScript.
- Utilización correcta de los Hooks de React.
- Estructurar correctamente la capa de datos (en este caso, via **[Apollo](https://www.apollographql.com/)**).
- Separar correctamente los componentes reutilizables de los componentes no reutilizables.
- Mantener el número de re-renders de cada componente / contenedor optimizado.
- Utilización de librerías externas para aumentar la calidad de la solución entregada.
- Funcionamiento de la implementación. Arranca el proyecto en al menos 1 de los 2 sistemas operativos, iOS o Android, y comprueba que funciona correctamente.
- **(Opcional)** Utilización de la librería [**styled-components](https://styled-components.com/)** para la maquetación de los componentes y vistas.
- **(Opcional)** Si tu ordenador te lo permite, arranca el proyecto tanto en iOS como en Android para asegurar su funcionamiento en ambos sistemas operativos.

## ¿Qué no se tendrá en cuenta (o tendrá poco peso) a la hora de evaluar?

- No hace falta intentar replicar los estilos (assets, colores, tipografías) del ejemplo planteado, así que no hace falta perder el tiempo en ello (entendemos que esto podría llevar mucho tiempo).
- La realización completa del ejercicio. Es deseable, pero si no quieres realizar los ítems marcados como opcionales, no hay problema.
- El tiempo que hayas tardado. No es una carrera. Tómate tu tiempo para la prueba(dentro de un márgen coherente), sigue buenas prácticas y organízate. Entendemos que hacer un trabajo muy rápido puede hacernos olvidar cosas importantes, ser propensos al código spaguetti, mala optimización y bugs que podrían evitarse si le dedicamos el tiempo correcto.

## Indicaciones

- Crear un repositorio en GitHub o GitLab con el nombre **z1-react-native.**
- Nos encantaría ver cómo trabajas el código con los commits, así que por favor, no realices 1 sólo commit grande para subir el proyecto al repositorio.
- **No** está permitido el uso de [Expo](https://docs.expo.io/) como framework para desarrollar el proyecto. Tampoco arranques el proyecto con Expo. No se utiliza en Z1 debido a sus limitaciones técnicas. Se debe crear un proyecto de React Native puro.
- **Sí** se permite el uso de las librerías/APIs de [Expo](https://docs.expo.io/) de manera independiente (instalando Expo como dependencia en el proyecto).