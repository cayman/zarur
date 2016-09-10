<?php
/**
 * Created by IntelliJ IDEA.
 * User: rustem
 * Date: 08.09.16
 * Time: 18:00
 */


define('APPLICATION_PATH', __DIR__ . '/../../application');

require APPLICATION_PATH . '/vendor/autoload.php';


session_start();
// Instantiate the app
$settings = require APPLICATION_PATH . '/src/settings.php';

$app = new \Slim\App($settings);

// Set up dependencies
require APPLICATION_PATH . '/src/dependencies.php';
// Register middleware
require APPLICATION_PATH . '/src/middleware.php';
// Register routes
require APPLICATION_PATH . '/src/routes.php';

$app->run();