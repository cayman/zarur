/**
 * Created by rustem on 10.09.16.
 */
const express = require('express');

const sysPath = require('path');

const http = require('http');

const httpProxy = require('http-proxy');

const logger = require('loggy');

const proxy = httpProxy.createServer({
  target: 'http://igrr.thprom.ru:80',
});

exports.startServer = function(port, path, callback) {
  const app = express();
  app.use(express["static"](path));
  app.all('/api/*', function(req, res) {
    logger.info('proxy rest ',req.url);
    return proxy.web(req, res);
  });
  app.all('/*', function(request, response) {
    return response.sendfile(sysPath.resolve(sysPath.join(path, 'index.html')));
  });
  const server = http.createServer(app);
  const serverPort = parseInt(port, 10);
  logger.info("listening on port",serverPort);
  server.listen(parseInt(port, 10), callback);
  return server;
};