<?php
/**
 * Created by IntelliJ IDEA.
 * User: rustem
 * Date: 08.09.16
 * Time: 18:00
 */

define('APP_DIR', '/../application');
define('APP_PATH', file_exists(__DIR__.APP_DIR) ? __DIR__.APP_DIR : __DIR__.'/..'.APP_DIR);


require APP_PATH . '/vendor/autoload.php';


$dotenv = new Dotenv\Dotenv();
if (file_exists(__DIR__.'/../.etc'))
    $dotenv->load(__DIR__.'/..');
else if(file_exists(APP_PATH.'/.etc'))
    $dotenv->load(APP_PATH);


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