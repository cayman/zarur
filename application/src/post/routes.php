<?php
/**
 * Created by IntelliJ IDEA.
 * User: rustem
 * Date: 10.09.16
 * Time: 15:34
 */

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$app->get('/api/posts', function (Request $request, Response $response, $args) {

    $posts = $this->db->table('posts')
        ->where('post_type','post')->take(20)->get();

    $count = count($posts);

    $this->logger->info("Posts count = $count");

    $data = array('total'=>100,'count'=>$count,'items'=> $posts);

    return $response->withJson($data);
});



$app->get('/api/posts/{id}', function (Request $request, Response $response, $args) {

    $id = $request->getAttribute('id');

    $post = $this->db->table('posts')->find($id);

    $this->logger->info("Post id =  $id");

    return $response->withJson($post);

});