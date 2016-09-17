<?php
/**
 * Created by IntelliJ IDEA.
 * User: rustem
 * Date: 08.09.16
 * Time: 18:00
 */


define('APP_PATH', __DIR__. ('production' == getenv('APP_ENV') ? '/../../application' : '/../application'));

require APP_PATH . '/vendor/autoload.php';;


session_start();

// Instantiate the app
$settings = require APP_PATH . '/src/settings.php';

$app = new \Slim\App($settings);

// Set up dependencies
require APP_PATH . '/src/dependencies.php';
// Register middleware
require APP_PATH . '/src/middleware.php';
// Register routes
require APP_PATH . '/src/routes.php';

$app->run();