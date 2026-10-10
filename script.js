'use strict';
const phone = '51910988400';
const chatUrl = message => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
// La oferta termina al comenzar noviembre en Perú (UTC-5).
const offerEnd = Date.parse('2026-11-01T00:00:00-05:00');
const offerStart = Date.parse('2026-10-01T00:00:00-05:00');
function isOctoberOffer(now = Date.now()) { return now >= offerStart && now < offerEnd; }
function unitPrice(now = Date.now()) { return isOctoberOffer(now) ? 59 : 79; }
const blocksA = document.getElementById('blocks-a');
const blocksB = document.getElementById('blocks-b');
function showPair(a, b) {
  blocksA.replaceChildren(...Array.from({length:a}, () => document.createElement('i')));
  blocksB.replaceChildren(...Array.from({length:b}, () => document.createElement('i')));
  document.getElementById('number-a').textContent = a;
  document.getElementById('number-b').textContent = b;
  document.getElementById('demo-status').textContent = `${a} más ${b} es igual a 5.`;
}
document.querySelectorAll('[data-pair]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-pair]').forEach(item => {
    const selected = item === button;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  showPair(...button.dataset.pair.split(',').map(Number));
}));
showPair(2, 3);
const ages = {
  '3': ['EXPLORAR Y DESCUBRIR', 'Un mundo de colores por conocer', ['Agrupar cubos del mismo color.', 'Construir torres y caminos libremente.', 'Colocar un cubo en cada espacio de la lámina.'], '💡 Prueba esto: “¿Hacemos una familia con todos los cubos rojos?”'],
  '4': ['ORDENAR Y RELACIONAR', 'Cada pieza tiene su lugar', ['Construir una escalera de menor a mayor.', 'Comparar cantidades: más, menos e igual.', 'Continuar patrones con colores alternados.'], '💡 Prueba esto: “Rojo, verde, rojo… ¿qué color sigue?”'],
  '5': ['PENSAR Y RESOLVER', 'Las primeras sumas se pueden tocar', ['Juntar y separar cubos para sumar y restar.', 'Descubrir distintas formas de construir un número.', 'Resolver pequeños retos de cantidades y reparto.'], '💡 Prueba esto: “Tenemos 5 cubos. ¿De cuántas formas podemos separarlos?”']
};
const tabs = [...document.querySelectorAll('[data-age]')];
function selectAge(tab) {
  tabs.forEach(item => {const active = item === tab; item.setAttribute('aria-selected', String(active)); item.tabIndex = active ? 0 : -1;});
  const [label, title, activities, game] = ages[tab.dataset.age];
  document.getElementById('age-label').textContent = label;
  document.getElementById('age-title').textContent = title;
  document.getElementById('age-list').replaceChildren(...activities.map(text => {const li = document.createElement('li'); li.textContent = text; return li;}));
  document.getElementById('age-game').textContent = game;
  document.getElementById('age-panel').setAttribute('aria-labelledby', tab.id);
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectAge(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) {event.preventDefault(); tabs[next].focus(); selectAge(tabs[next]);}
  });
});
const quantity = document.getElementById('quantity');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
function updateTotal() {
  const count = Number(quantity.value);
  const valid = Number.isInteger(count) && count >= 1 && count <= 99;
  document.getElementById('total').textContent = valid ? `S/ ${count * unitPrice()}` : '—';
  minus.disabled = !valid || count <= 1;
  plus.disabled = !valid || count >= 99;
}
minus.addEventListener('click', () => {quantity.stepDown(); updateTotal();});
plus.addEventListener('click', () => {quantity.stepUp(); updateTotal();});
quantity.addEventListener('input', updateTotal);
quantity.addEventListener('change', () => {if (!quantity.value) quantity.value = 1; updateTotal();});
document.getElementById('order-form').addEventListener('submit', event => {
  event.preventDefault();
  if (!event.currentTarget.reportValidity()) return;
  const count = Number(quantity.value);
  const city = document.getElementById('city').value.trim();
  const price = unitPrice();
  const message = `¡Hola Hans Educa! Me interesa Mi Primer Juego Matemático para reforzar lo que aprende mi peque jugando en casa. Quisiera ${count} ${count === 1 ? 'juego' : 'juegos'}. Vi ${isOctoberOffer() ? 'la oferta de octubre' : 'el precio'} de S/ ${price} por juego (total referencial S/ ${count * price}, con IGV).${city ? ` Estoy en ${city}.` : ''} ¿Me confirman disponibilidad, formas de pago y costo de envío?`;
  window.open(chatUrl(message), '_blank', 'noopener,noreferrer');
  const status = document.getElementById('order-status');
  status.replaceChildren(document.createTextNode('Tu mensaje está listo. Si el chat no se abrió, '));
  const fallback = document.createElement('a');
  fallback.href = chatUrl(message); fallback.target = '_blank'; fallback.rel = 'noopener noreferrer'; fallback.textContent = 'abre WhatsApp aquí'; fallback.style.textDecoration = 'underline';
  status.append(fallback, document.createTextNode('. Envíalo allí para coordinar tu pedido.'));
});
function updateOffer() {
  const now = Date.now(), active = isOctoberOffer(now), price = unitPrice(now);
  const remaining = Math.max(0, Math.floor((offerEnd - now) / 1000));
  const parts = {days: Math.floor(remaining / 86400), hours: Math.floor(remaining / 3600) % 24, minutes: Math.floor(remaining / 60) % 60, seconds: remaining % 60};
  Object.entries(parts).forEach(([name, value]) => { document.getElementById(`offer-${name}`).textContent = String(value).padStart(2, '0'); });
  document.getElementById('countdown').hidden = !active;
  document.getElementById('offer-title').textContent = active ? 'Aprovecha S/ 59 antes de que vuelva a S/ 79' : 'Kit completo a su precio regular: S/ 79';
  document.getElementById('offer-deadline').textContent = active ? 'Oferta hasta el 31 de octubre de 2026, 11:59 p. m. (hora de Perú). Desde el 1 de noviembre, S/ 79 por kit.' : 'La oferta de octubre terminó. Puedes consultar tu pedido por WhatsApp al precio regular de S/ 79 por kit.';
  document.querySelectorAll('[data-unit-price]').forEach(el => {el.textContent = `S/ ${price}`;});
  document.querySelectorAll('[data-regular-price]').forEach(el => {el.hidden = !active;});
  document.querySelector('[data-price-label]').textContent = active ? 'Oferta de octubre' : 'Precio regular';
  document.querySelector('[data-offer-label]').textContent = active ? 'Kit completo · Oferta de octubre' : 'Kit completo · Precio regular';
  document.querySelector('[data-sticky-label]').textContent = active ? 'Kit completo · Oferta de octubre' : 'Kit completo · Precio regular';
  document.querySelector('meta[name="description"]').content = `Mamá, acompaña a tu peque de 3 a 6 años con actividades de conteo, colores y primeras sumas en casa. Kit completo S/ ${price}. Consulta tu pedido por WhatsApp.`;
  document.querySelectorAll('[data-chat]').forEach(link => {link.href = chatUrl(`¡Hola Hans Educa! Quisiera saber más sobre Mi Primer Juego Matemático para jugar con mi peque en casa. Vi el kit a S/ ${price}. ¿Me pueden asesorar y confirmar la entrega en mi zona?`);});
  updateTotal();
}
updateOffer();
setInterval(updateOffer, 1000);
document.addEventListener('visibilitychange', () => { if (!document.hidden) updateOffer(); });
const sticky = document.querySelector('.sticky-order');
const hero = document.querySelector('.hero');
const order = document.getElementById('pedido');
let heroVisible = true, orderVisible = false;
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {if (entry.target === hero) heroVisible = entry.isIntersecting; if (entry.target === order) orderVisible = entry.isIntersecting;});
  const visible = !heroVisible && !orderVisible;
  sticky.classList.toggle('visible', visible);
  sticky.inert = !visible;
});
sticky.inert = true;
observer.observe(hero); observer.observe(order);
