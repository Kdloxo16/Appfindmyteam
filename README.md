# Find my team — prototipo Awakenings

Este prototipo demuestra la idea principal de la app:

- obtiene la ubicación del usuario;
- calcula la distancia y el rumbo hacia un amigo simulado;
- usa la brújula real del teléfono cuando está disponible;
- comparte/actualiza ubicación únicamente mientras la app está visible;
- al salir, conserva la última ubicación conocida y su antigüedad;
- puede instalarse en la pantalla de inicio como aplicación web.
- permite crear un punto de encuentro con el botón **Reunirse aquí**;
- muestra el punto dentro del plano y una notificación de demostración.
- simula tres integrantes seleccionables: KIKI, Amelie y Marlon;
- muestra `Live` en verde y `Offline` en rojo.
- muestra simultáneamente a los tres integrantes dentro del plano;
- mantiene la ruta oculta hasta pulsar **Trazar ruta** sobre la persona elegida;
- usa `#BDFF78` como color principal, `#3892FF` como secundario y `#3E4957` como fondo.
- incorpora una flecha geométrica modular como logo de la aplicación.

## Probar en el computador

Abre `index.html`. La ubicación puede requerir un servidor local o HTTPS según el navegador.

## Publicar con GitHub Pages

1. Crea un repositorio nuevo en GitHub.
2. Sube todos los archivos de esta carpeta a la raíz del repositorio.
3. En GitHub entra en **Settings > Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Selecciona la rama `main`, carpeta `/ (root)` y presiona **Save**.
6. Espera a que GitHub muestre el enlace público HTTPS.
7. Abre ese enlace desde Safari en el iPhone.

## Probar en iPhone

1. Abre el enlace HTTPS en Safari.
2. Pulsa **Activar ubicación** y autoriza el permiso.
3. Pulsa **Activar brújula del dispositivo** y autoriza el movimiento/orientación.
4. Mueve el amigo simulado y gira el teléfono para comprobar la flecha.
5. Usa **Simular que Felipe cerró la app** para mostrar la regla de última ubicación.
6. Pulsa **Reunirse aquí** para marcar la posición y probar el aviso.
7. Para instalarla: **Compartir > Agregar a pantalla de inicio**.

## Alcance de esta versión

La ubicación de Felipe todavía es simulada. La notificación actual demuestra el flujo en el mismo dispositivo. El siguiente paso será conectar una base de datos en tiempo real y un servicio de notificaciones para enviar el punto de encuentro a todos los teléfonos del grupo.
