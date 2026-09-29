# DESBLOQUEO

App/PWA de barajas creativas para publicistas inspirada en la lógica de las estrategias oblicuas.

## Qué incluye

- 3 mazos:
  - ⚡ El Cortocircuito
  - 🌍 Bájalo a la Tierra
  - 💣 La Bomba
- 20 cartas por mazo (60 en total).
- Orden aleatorio.
- Ninguna carta se repite hasta completar el mazo.
- El progreso queda guardado en `localStorage`.
- Al terminar, el usuario puede volver a mezclar el mazo.
- Funciona sin login y sin backend.
- Diseño responsive para computador y celular.
- PWA básica con manifest y service worker.

## Cómo abrirlo en Antigravity

1. Descomprime la carpeta `desbloqueo-app`.
2. Crea o abre un Project en Antigravity y agrega esta carpeta.
3. Puedes pedirle al agente:
   `Abre esta web app, levanta un servidor local y pruébala en el navegador.`
4. Si quieres hacerlo manualmente desde la terminal dentro de la carpeta:
   - Python: `python3 -m http.server 8080`
   - Luego abre `http://localhost:8080`

No necesita `npm install`.

## Archivos

- `index.html`: estructura base.
- `styles.css`: diseño y animaciones.
- `app.js`: contenido de las 60 cartas + lógica de barajado/progreso.
- `manifest.json`: configuración PWA.
- `sw.js`: caché offline.

## Cambiar el nombre

Busca `DESBLOQUEO` en `index.html`, `app.js` y `manifest.json`.

## Agregar cartas

En `app.js`, dentro de `DECKS`, cada mazo tiene un array `cards`.
Agrega nuevas frases como strings. La lógica calcula automáticamente el total y vuelve a crear el orden si cambia la cantidad de cartas.

## Reiniciar todo durante pruebas

En la consola del navegador:

```js
localStorage.removeItem("desbloqueo-progress-v1");
location.reload();
```

## Próximos upgrades posibles

- Swipe físico de cartas en celular.
- Vibración háptica.
- Sonido al sacar carta.
- Favoritos.
- Campo para escribir la idea que surgió.
- Exportar ideas.
- Modo equipo/proyector.
- Métricas para una investigación académica.
