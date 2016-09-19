<?php

$sub = 'production' == getenv('APP_ENV') ? '/../': '';

require __DIR__.$sub.'/../application/run.php';