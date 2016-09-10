var express, http, request, sysPath;

express = require('express');

sysPath = require('path');

http = require('http');

request = require('request');

exports.startServer = function(port, path, callback) {
    var api_endpoint, app, proxy, server;
    app = express();
    app.use(express["static"](path));

    proxy = 'http://localhost:9000';
    api_endpoint = 'http://r.zarur.ru';


    request = request.defaults({
        proxy: proxy
    });
    app.all('/api/*', function(req, res) {
        return req.pipe(request(api_endpoint + req.url)).pipe(res);
    });
    app.all('/*', function(req, res) {
        return res.sendFile(sysPath.resolve(sysPath.join(path, 'index.html')));
    });
    server = http.createServer(app);
    server.listen(parseInt(port, 10), callback);
    return server;
};