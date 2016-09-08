
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

    $posts = $this->db->table('posts')->take(20)->get();

    $count = count($posts);

    $this->logger->info("Posts count = $count");

    $data = array('posts'=>'api','count'=>$count,'items'=> $posts);

    return $response->withJson($data);
});



$app->get('/api/posts/{id}', function (Request $request, Response $response, $args) {

    $id = $request->getAttribute('id');

    $post = $this->db->table('posts')->where('id',$id)->get();

    $this->logger->info("Post id =  $id");

    return $response->withJson($post);

});


$app->get('/api/term', function (Request $request, Response $response, $args) {

    $name = $request->getQueryParams('name');

    $this->logger->info("Word name = $name");

    $term = $this->db->table('dict_tatrus')->where('name',$name)->get();
    $like = $this->db->table('dict_tatrus')->where('name','like',$name.'%')->get();

    $data = array('term'=>$term,'count'=>count($like),'like'=> $like);

    return $response->withJson($data);

});