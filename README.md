## GUIA CONCEPTOS BASICOS DE JAVASCRIPT


A continuacion estaremos desarrollando el paso a paso para conectar mi repositorio local (el codigo en mi computador), con mi repositorio remoto (mi biblioteca en GitHub)


  1. Crear  repositorio en GitHub (remoto)
 * Buscamos el boton verde con icono de libro que dice "nuevo"
 * Llenamos el nombre del repositorio,descricion(si quieren)y lo ponemos publico
  * Dar Click en el boton verde crear repositorio
 
  2. Crear nuestro repositorio local:

   *abrimos la consola de git bash desde visual:
 1.ctrl + ñ (debe estar en terminal)
 2. en visual buscar terminal ... -> nuevo terminal

 vamos a escribir los comandos para inicializar nuestro repositorio local y conectarlo con el remoto
       -COMANDOS (DEBEN IR EN ORDEN)
       1. git init -> inicializar mi repositorio local
       1.1 git status -> me muestra el estado de mis archivos

       2. git add . -> se usa para agregar cambios al entorno

       3. git commit ->nos permite poner un mensaje pero ademas significa que mis archivos estan listos para enviarse al repositorio remoto

       ej: it commit .m "lo que esta dentro de las comillas es lo que yo edito"

       (esto solo se usa la primera vez que creo el repositorio)
       4. git branch -m main -> establecer la rama main

       5. git remmote add origin -> me conecta con el repositorio en internet, el remoto
       ej: https://github.com/LuisaCastaño.40/actividadClase.git

       6. git push -u origin main -> me envia los cambios a la rama main en mi Github (me sube todo a internet)


 ## QUE PPONER EN EL README PARA MI PROYECTO FINAL

 1. titulo-> Entrga final diplomado
 2. Descricion general -> me hable de todo el proyecto
 3. Autor -> quien lo hizo - Mi nombre  #   m i P r i m e r R e p o s i t o r i o  
 