const { createServer } = require('http');

const next = require('next');
const { parse } = require('url');

const app = next({ dev: false });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  createServer((req, res) => {
    handle(req, res, parse(req.url, true));
  }).listen(3000, () => {
    // eslint-disable-next-line no-console
    console.info(`Main Server listening on port 3000`);
  });

  createServer((req, res) => {
    res.writeHead(301, { Location: `https://${req.headers.host}${req.url}` });
    res.end();
  }).listen(3080, () => {
    // eslint-disable-next-line no-console
    console.info(`Redirect server listening on port 3080`);
  });
})();
