# Matías Di Franco — sitio web

Este paquete es una versión estática, responsive y gratuita del mockup creado para:
https://matiasdifranco.musica.ar

## Archivos
- index.html — estructura y textos
- styles.css — diseño completo
- script.js — menú móvil + carga de imágenes
- assets/ — colocar aquí tus fotos

## Antes de publicar
1. Abrí `index.html` en el navegador para probarlo.
2. Reemplazá los placeholders de `assets/` con fotos usando EXACTAMENTE estos nombres:
   hero.jpg
   tu-vida.jpg
   me-perdono.jpg
   una-cosa.jpg
   en-adoracion.jpg
   ep-01.jpg
   ep-02.jpg
   ep-03.jpg
   ep-04.jpg
   sobre-mi.jpg
   video-tu-vida.jpg
   video-una-cosa.jpg
   video-nda.jpg
   agenda.jpg
3. En `index.html`, reemplazá los enlaces `href="#"` por los links reales de Spotify, Apple Music y YouTube.
4. En el formulario, reemplazá `TU_EMAIL_AQUI` en la URL de FormSubmit por tu email. Es una opción simple para recibir mensajes sin montar un backend.
5. Cambiá los textos de EP 01/02/03 por los nombres reales si querés.

## Publicar gratis en Cloudflare Pages
Opción recomendada:
1. Crear una cuenta gratuita en Cloudflare.
2. Ir a Workers & Pages > Create > Pages.
3. Crear un proyecto conectado a GitHub o subir el sitio según la opción disponible.
4. Publicar la carpeta que contiene `index.html`, `styles.css`, `script.js` y `assets/`.
5. Cloudflare dará una dirección `*.pages.dev`.
6. En el proyecto, agregar `matiasdifranco.musica.ar` como Custom Domain.
7. En la gestión DNS del dominio, seguir exactamente los registros que Cloudflare indique.
8. Cuando el DNS se propague, el sitio quedará disponible en tu dominio.

## Importante
No subas contraseñas, claves API ni datos privados al repositorio.
# pagina-mati
