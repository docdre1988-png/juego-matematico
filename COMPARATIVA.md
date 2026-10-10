# Nueva landing: decisiones de diseño y contenido

Estado actual: la nueva landing pasó a `index.html`, con `styles.css` y `script.js`. Se eliminó la landing anterior. Las referencias a `nueva.html` más abajo corresponden al historial del trabajo. La configuración de despliegue está en `vercel.json` y las instrucciones actuales en `README.md`.

## Ajuste al plan de campaña familiar

Actualización basada en el plan de campaña facilitado por el usuario: madres de niños de 3 a 6 años, refuerzo escolar jugando en casa, precio S/ 59 visible y un solo recorrido hacia la consulta por WhatsApp. Se mantienen las fotografías, colores, mascota y actividades interactivas.

La portada se dirige a mamá y presenta colores, conteo y primeras sumas como actividades para acompañar a su peque. Los mensajes reducen presión y destacan las láminas y videos como guía para ella. Se retiraron la sección para instituciones, el selector familia/aula/colegio y el testimonio docente; el pedido y su mensaje preparado ahora son familiares. La ubicación sigue siendo opcional y la entrega se confirma por chat. No se incorporó información interna de presupuesto, gestión, calendario o pagos de la campaña.

La versión actual se comprobó a 390 y 1280 píxeles, sin imágenes rotas. Cambiar de uno a dos kits actualiza el total a S/ 118. JavaScript pasó la comprobación de sintaxis. No se enviaron pedidos reales.

La tabla siguiente documenta la primera combinación de las dos landings; las opciones institucionales mencionadas se retiraron en esta actualización.

La nueva versión está en `nueva.html`, con estilos y comportamiento en `nueva.css` y `nueva.js`. La landing original permanece en `index.html`.

Referencia revisada: https://miprimerjuegomatematico.hanseduca.com/ (9 de octubre de 2026). Se revisó el contenido completo mediante el navegador y su portada visual. La referencia expone textos de rutas de video en algunas secciones; no se verificó la reproducción de esos videos.

| Aspecto | Original local | Referencia | Nueva versión |
| --- | --- | --- | --- |
| Identidad | Colores vivos, cubos, fotografías y geometrías divertidas | Interacciones y recorrido educativo extenso | Colores, fotos y mascota existentes, marcos inclinados y tipografía redondeada |
| Mensaje inicial | Aprender matemática jugando | Expone la dificultad del niño | Mensaje positivo centrado en descubrir y compartir |
| Explicación | Tres etapas y mucho texto | Demostraciones de cantidades y colores | Demostración interactiva de descomposición de 5 + tres etapas breves |
| Edades | Tres tarjetas extensas | Pestañas con actividades y videos | Pestañas accesibles de 3, 4 y 5–6 años con ejemplos concretos |
| Kit | Detalle de materiales | Cantidades, medidas, QR y manual | Detalle específico, dimensiones y supervisión adulta |
| Confianza | Reseñas y calificación sin fuente identificada | Testimonios atribuidos y trayectoria desde 1996 | Dos citas breves de la referencia, sin calificación inventada; logos descritos como relaciones de la marca |
| Precio | US$ 39.90 / US$ 65 | S/ 59 / S/ 79 | Precio publicado en soles; total referencial, envío aparte por coordinar |
| Pedido | Datos personales obligatorios y número de ejemplo | Audiencia y cantidad | Familia/aula/colegio, cantidad, ciudad opcional y contacto oficial 51910988400 |
| Confirmación | Afirma haber recibido una solicitud al abrir WhatsApp | Mensaje preparado para envío manual | Explica que el visitante debe enviar el mensaje y ofrece un enlace de respaldo |
| Garantía | Genérica | Condiciones y devolución de 7 días | Condiciones publicadas por la marca, con atribución |

Se omitieron urgencia de stock, homologación, libre de BPA, promesas de resultados y afirmaciones de exclusividad que no se comprobaron. No se copiaron ni descargaron videos de terceros: los testimonios en video enlazan a la referencia. Los precios, pagos y condiciones deben mantenerse sincronizados con la oferta comercial de Hans Educa.

La implementación usa HTML, CSS y JavaScript sin compilación ni dependencias de ejecución; solo las fuentes usan Google Fonts, con fuentes de respaldo. Las imágenes se reutilizan del proyecto. No se publicó ni se reemplazó la página original.

## Verificación

- JavaScript: `node --check nueva.js`, correcto.
- Vista previa revisada en navegador a 1280 px y 390 px.
- Interacción de suma: cambiar a 1 + 4 actualiza piezas, números y anuncio accesible.
- Pestaña 5–6 años: actualiza título y actividades.
- Cantidad: pasar de uno a dos juegos actualiza el total a S/ 118.
- Sin imágenes rotas ni destinos de anclas inexistentes; sin errores registrados en consola.
- No se enviaron mensajes ni se realizaron pedidos reales. El envío manual en WhatsApp no se probó.
