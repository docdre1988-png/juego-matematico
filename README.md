# Mi Primer Juego Matemático · Hans Educa

La landing actual es `index.html`. Usa `styles.css`, `script.js` y las imágenes de `assets/`. La versión anterior fue reemplazada.

## Desplegar en Vercel sin Git

Desde PowerShell, dentro de esta carpeta:

```powershell
npx vercel
```

Inicia sesión y crea o selecciona tu proyecto. Para un proyecto nuevo, elige la carpeta actual (`./`). La configuración incluida selecciona un sitio estático, sin compilación, con salida en la raíz.

El comando anterior crea una vista previa. Cuando la hayas revisado, publica producción:

```powershell
npx vercel --prod
```

No se necesitan variables de entorno ni un repositorio Git. Los documentos de trabajo y la captura móvil se excluyen con `.vercelignore`.

## Oferta de octubre

`script.js` configura la promoción de S/ 59 del 1 al 31 de octubre de 2026, hora de Perú (UTC-5). Desde el 1 de noviembre, el precio visible, el total y los mensajes de WhatsApp usan S/ 79. La fecha no se reinicia al recargar.

El pedido prepara un mensaje al WhatsApp oficial `51910988400`; el visitante debe enviarlo manualmente. No hay cobro ni registro de pedidos en el sitio.

Fuentes de configuración: https://vercel.com/docs/project-configuration/vercel-json y https://vercel.com/docs/builds/configure-a-build.
