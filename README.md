# Proyecto de TODOs

Este proyecto es una aplicación de gestión de tareas (TODOs) creada con React. La aplicación permite a los usuarios añadir, completar y eliminar tareas, así como buscar tareas específicas y añadir notas a cada tarea.

## Características

- Añadir nuevas tareas con notas opcionales.
- Completar tareas existentes.
- Eliminar tareas.
- Buscar tareas por texto.
- Mensaje de alerta cuando se intenta añadir una tarea con un texto duplicado.
- Mensaje de felicitación cuando todas las tareas están completadas.
- Indicador de progreso mostrando el número de tareas completadas en relación al total de tareas.

## Tecnologías Utilizadas

- React
- JavaScript
- CSS

## Instalación

1. Clona el repositorio:

    ```sh
    git clone https://github.com/jbaxax/curso-react.git
    ```

2. Navega al directorio del proyecto:

    ```sh
    cd curso-react
    ```

3. Instala las dependencias:

    ```sh
    npm install
    ```

4. Inicia la aplicación:

    ```sh
    npm start
    ```

## Uso

1. Añadir una nueva tarea:
    - Escribe el texto de la tarea en el campo de entrada principal.
    - Escribe una nota opcional en el campo de entrada secundario.
    - Haz clic en "Añadir".

2. Completar una tarea:
    - Haz clic en el icono de completar junto a la tarea que deseas marcar como completada.

3. Eliminar una tarea:
    - Haz clic en el icono de eliminar junto a la tarea que deseas eliminar.
    - Confirma la eliminación en el modal que se abrirá.

4. Buscar tareas:
    - Escribe el texto de búsqueda en el campo de búsqueda. La lista de tareas se filtrará en tiempo real.
