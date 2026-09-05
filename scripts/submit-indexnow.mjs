const host = 'zulia.lat';
const key = 'b10db6fccd430f3cff69c9bf5f668cda';
const paths = [
  '/',
  '/semilla/',
  '/servicios/desarrollo-software-a-medida/',
  '/servicios/agentes-inteligencia-artificial/',
  '/servicios/automatizacion-procesos/',
  '/servicios/landing-pages-seo/',
  '/servicios/consultoria-arquitectura-tecnologica/',
];

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host,
    key,
    keyLocation: `https://${host}/${key}.txt`,
    urlList: paths.map((path) => `https://${host}${path}`),
  }),
});

if (!response.ok) {
  const body = await response.text();
  throw new Error(`IndexNow rejected the submission (${response.status}): ${body}`);
}

console.log(`IndexNow accepted ${paths.length} URLs (${response.status}).`);
