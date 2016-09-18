/**
 * Created by rustem on 10.09.16.
 */
const express = require('express');
const sysPath = require('path');
const http = require('http');
const proxy = require('http-proxy-middleware');
const logger = require('loggy');


exports.startServer = function(config, callback){

  logger.info('Server options',config);

  const apiProxy = proxy(config.options);

  const app = express();

  app.use(express['static'](config.path));

  app.use(config.context, apiProxy);

  const index = sysPath.join(config.path, 'index.html');
  logger.info('Static path:',index);

  app.all('/*', function(request, response) {
    return response.sendfile(sysPath.resolve(index));
  });

  const server = http.createServer(app);

  server.listen(config.port, config.hostname, callback);
  logger.info(`application started on http://${config.port}:${config.port}/`);

  return server;
};