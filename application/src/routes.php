
<?php
// Routes

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;


$app->get('/', function (Request $request, Response $response, $args) {
    $this->logger->info("Start page");
    // Render index view
    return $this->renderer->render($response, 'index.phtml', $args);
});


$app->get('/api/', function (Request $request, Response $response, $args) {
    $data = array('name'=>'api','message'=>"Hello!");
    return $response->withJson($data);
});


$app->get('/api/posts', function (Request $request, Response $response, $args) {
    $name = $request->getAttribute('name');
    $data = array('name'=>'posts','message'=>"POSTS");
    return $response->withJson($data);
});