---
name: zulia-marca
description: Sistema visual de ZulIA y generador de piezas para redes (carrusel, historia, feature image). Úsala cuando haya que diseñar imágenes, decidir tipografía o color de marca, o producir material para Instagram, Facebook o LinkedIn.
---

# Sistema visual de ZulIA

La regla que gobierna todo: **el material de redes se ve como el sitio, no como
una plantilla**. Todos los valores de abajo salen de `src/styles/global.css`.
Si algo no está ahí, no se inventa: se agrega primero al sitio.

## El sitio y las redes no se diseñan igual

Esta es la corrección más importante de esta skill. El sitio tiene que verse
sobrio: alguien ya decidió entrar y lo que necesita es leer. Una pieza de redes
compite contra un pulgar que va a toda velocidad, y ahí la sobriedad se lee como
vacío. **La misma marca, dos registros distintos.**

### En el sitio

Fondo `--stage`, filetes de `--stage-line`, paneles al `.04`, resplandor al
`.22`, jerarquía por tamaño y no por color. Nada de bloques saturados.

### En redes

Bold, y sin miedo:

- **Color a sangre.** Láminas enteras en `--brand-blue` alternadas con oscuras.
  El azul de la marca es casi el mismo eléctrico que se usa en este tipo de
  pieza, así que no hace falta salirse de la paleta para que pegue.
- **Titular enorme y apretado**, de 110 px para arriba en un lienzo de 1080,
  partido a mano en líneas para poder resaltar una palabra.
- **Un resaltado** detrás de la palabra clave: rectángulo blanco y el texto en
  azul. Invierte el contraste y ancla la mirada.
- **Ornamento de interfaz.** Pastillas con icono, botones circulares, tarjetas
  con dos o tres grados de giro, contadores. Elementos que parecen de una UI y
  se colocan encima de la composición, rompiendo la retícula a propósito.
- **Tres o cuatro ornamentos como máximo**, y cada uno tiene que decir algo. Si
  una pastilla no aporta un dato, sobra: se quitó un "DESDE 2026" por eso.

- **Volumen.** Lo plano se ve pobre al lado de las referencias del sector, que
  usan render 3D. Canvas llega solo con lo que ya trae: `ctx.filter` para
  desenfoque, `shadowColor` con color para el halo, y degradados diagonales más
  un especular en la mitad superior para que una baldosa se lea como objeto.
  No hace falta comprar assets 3D.

Los ayudantes están en la plantilla: `pastillaIcono`, `botonCirculo`,
`resaltado`, `tarjetaGirada`, `girado`, y para el volumen `fondoProfundo`,
`resplandorSuave`, `baldosa` y `vidrio`.

Un racimo de tres baldosas a distinta escala, giro y profundidad rinde mucho
más que una fila de iconos del mismo tamaño.

### Lo que sí está mal en ambos registros

- Resplandor azul intenso de fondo. En el sitio es `.22`; en redes el color va
  plano, no en degradado.
- Iconos metidos en cuadros tintados. Los glifos van sólidos, sueltos o dentro
  de una pastilla con propósito.
- Una sola tipografía para rótulos, cifras y texto corrido.
- Verde menta y ámbar saturados que no existen en la marca.
- Alto de caja fijado a ojo. Se calcula desde el contenido.

## Tipografía

| Uso | Fuente |
|---|---|
| Titulares y texto corrido | Onest (`--font-sans`), 680 para titular, 400 para cuerpo |
| Rótulos, versalitas, cifras, folios, URLs | JetBrains Mono (`--font-mono`), 700, `letter-spacing` .12em |

La mono no es decorativa: el sitio la usa en la calculadora, en los ordinales de
sección y en las etiquetas. Es la mitad de la identidad. Una pieza con Onest en
todo se ve genérica.

## Color

```
--stage        #0e1013   fondo
--stage-line   rgb(255 255 255 / .12)   filetes y bordes
panel          rgb(255 255 255 / .04)
--stage-text   #f2f3f5   texto principal
--stage-muted  #9da5b0   texto secundario
--ordinal      #7d848f   ordinales, folios, notas al pie
--brand-blue   #2f6bff   rótulos y glifos
               #5a8dff   la "IA" del logotipo sobre fondo oscuro
--green        #24b879   estados positivos ("sigue gratis")
```

Única extensión fuera del sitio: `#e0a33a` para "esto ahora cuesta". La paleta
no tiene un tono de advertencia y en redes hace falta. No se usa en el sitio.

Fondo: `#0e1013` con un resplandor elíptico `rgba(45,106,245,.22)` centrado al
20% del ancho y −10% del alto, del tamaño que usa `.escenario`. Uno solo.

## Iconos

Phosphor **Fill**, los mismos que usa el sitio (`node_modules/phosphor-astro`).
Se dibujan como glifos sólidos del color del texto, **sin cuadro de fondo**:
así los pinta el sitio con `mask` + `background-color`.

## Retícula

Margen 88 px en piezas de 1080. Cabecera con rótulo mono a la izquierda, folio
a la derecha y filete debajo. Pie con filete arriba, logotipo a la izquierda y
"Desliza →" en mono a la derecha.

**Padding de las cajas.** Onest y JetBrains Mono tienen altura de mayúscula
≈ 0.72em y descendente ≈ 0.21em. El alto de un panel se calcula a partir del
contenido, nunca a ojo, o el aire de abajo sale distinto al de arriba:

```
base1 = PAD + 0.72*f1
base2 = base1 + interlínea + 0.72*f2
alto  = base2 + 0.21*f2 + PAD
```

Y todo bloque arranca de la `y` que devuelve el bloque anterior, para que un
texto más largo recorra la composición en vez de encimarse.

## Producir las piezas

```bash
npm run build
./tools/social/generar.sh          # escribe dist/_social.html y levanta el receptor
npx serve dist -l 4321             # o el estático que uses
# abre http://localhost:4321/_social.html y espera a que el título diga LISTO
```

Los diseños viven en `tools/social/plantilla.html`. Se dibujan en canvas al
tamaño exacto con la fuente real del sitio y se guardan en
`~/Downloads/zulia-social/`.

Medidas: carrusel 1080×1350, historia 1080×1920, feature image 1200×630.
En la historia hay que dejar libre la franja de 1400 a 1740 px para el sticker
del enlace.

La feature image se convierte a JPEG antes de subirla a `public/og/`: en PNG
pesa medio mega y WhatsApp se salta la vista previa.

```bash
sips -s format jpeg -s formatOptions 92 ~/Downloads/zulia-social/og-x.png --out public/og/x.jpg
```

## Antes de publicar

- Ningún dato inventado. Las cifras salen de `src/data/`; si una tarifa cambia
  ahí, hay que regenerar las piezas que la muestran.
- Distingue lo que Meta ya publicó de lo que anunció. Si es un supuesto, dilo en
  la pieza, no solo en la guía.
- Registro "tú" profesional, sin coloquialismos. Ver la memoria del proyecto.
