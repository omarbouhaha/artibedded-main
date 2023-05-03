<?php
    $upgrading = time();
    header('HTTP/1.1 503 Service Temporarily Unavailable');
    header('Status: 503 Service Temporarily Unavailable');
    header('Retry-After: 3600');
    header('Content-Type: text/html; charset=utf-8');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Website Under Maintenance</title>
</head>
<body>
    <h1>Website Under Maintenance</h1>
    <p>We apologize for the inconvenience, but we're performing some maintenance at the moment. We'll be back soon!</p>
</body>
</html>
