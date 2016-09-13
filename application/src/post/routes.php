<?php
/**
 * Created by IntelliJ IDEA.
 * User: rustem
 * Date: 10.09.16
 * Time: 15:34
 */

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$app->get('/api/taxonomy', function (Request $request, Response $response, $args) {

    $terms = $this->db->table('term_taxonomy')
        ->join('terms','terms.term_id','=','term_taxonomy.term_id')->get();

    $count = count($terms);

    $this->logger->info("Terms count = $count");

    $data = array('count'=>$count,'items'=> $terms);

    return $response->withJson($data);
});

$app->get('/api/posts', function (Request $request, Response $response, $args) {

    $term = $request->getAttribute('term');
    $page = $request->getAttribute('page');

    $posts = $this->db->table('posts')
        ->when($term>0, function ($query) use ($term) {
           return $query->join('term_relationships','term_relationships.object_id','=','posts.ID')
                ->where('term_relationships.taxonomy_term_id',$term);
        })
        ->where('posts.post_type','post')
        ->limit(20)
          ->get();

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