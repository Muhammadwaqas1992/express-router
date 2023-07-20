import express from 'express';

let router = express.Router();

router.get('/comment/:postId/:commentId', (req, res, next) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Routing Server</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- css -->
        <link rel="stylesheet" href="./style.css" type="text/css">
        <!-- font -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet">
        <!-- icons -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
        <!-- moment js -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>
        <!-- javascript -->
        <script src="./main.js"></script>
    </head>
    
    <body>
        <h1 class="center">Routing Server</h1>
        <h3 class="center">This Is Routing Server</h3>
        <h3 class="center" id="date"></h3>
        <p class="center">Thanks For Visiting Regards! Muhammad Waqas&copy;</p>
        <table>
            <tr>
                <td>1</td>
                <td>Login V1</td>
                <td><a href="https://wild-erin-bass-yoke.cyclic.app/api/v1/login"><i class="bi bi-arrow-up-right-square"></i></a></td>
            </tr>
            <tr>
                <td>2</td>
                <td>Signup V1</td>
                <td><a href="https://wild-erin-bass-yoke.cyclic.app/api/v1/signup"><i class="bi bi-arrow-up-right-square"></i></a></td>
            </tr>
            <tr>
                <td>3</td>
                <td>Feed V1</td>
                <td><a href="https://wild-erin-bass-yoke.cyclic.app/api/v1/feed/:userId"><i class="bi bi-arrow-up-right-square"></i></a></td>
            </tr>
            <tr>
                <td>4</td>
                <td>Post V1</td>
                <td><a href="https://wild-erin-bass-yoke.cyclic.app/api/v1/post/:userId/:postId"><i class="bi bi-arrow-up-right-square"></i></a></td>
            </tr>
            <tr>
                <td>5</td>
                <td>Comment V1</td>
                <td><a href="https://wild-erin-bass-yoke.cyclic.app/api/v1/comment/:postId/:commentId"><i class="bi bi-arrow-up-right-square"></i></a></td>
            </tr>
        </table>
    </body>
    </html>`);
});

router.get('/comments/:postId', (req, res, next) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Routing Server</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- css -->
        <link rel="stylesheet" href="./style.css" type="text/css">
        <!-- font -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet">
        <!-- icons -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
        <!-- moment js -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>
        <!-- javascript -->
        <script src="./main.js"></script>
    </head>
    
    <body>
        <h1 class="center">Routing Server</h1>
        <h3 class="center">This Is Routing Server</h3>
        <h3 class="center" id="date"></h3>
        <p class="center">Thanks For Visiting Regards! Muhammad Waqas&copy;</p>
        <table>
            <tr>
                <td>1</td>
                <td>Login V1</td>
                <td><a href="https://wild-erin-bass-yoke.cyclic.app/api/v1/login"><i class="bi bi-arrow-up-right-square"></i></a></td>
            </tr>
            <tr>
                <td>2</td>
                <td>Signup V1</td>
                <td><a href="https://wild-erin-bass-yoke.cyclic.app/api/v1/signup"><i class="bi bi-arrow-up-right-square"></i></a></td>
            </tr>
            <tr>
                <td>3</td>
                <td>Feed V1</td>
                <td><a href="https://wild-erin-bass-yoke.cyclic.app/api/v1/feed/:userId"><i class="bi bi-arrow-up-right-square"></i></a></td>
            </tr>
            <tr>
                <td>4</td>
                <td>Post V1</td>
                <td><a href="https://wild-erin-bass-yoke.cyclic.app/api/v1/post/:userId/:postId"><i class="bi bi-arrow-up-right-square"></i></a></td>
            </tr>
            <tr>
                <td>5</td>
                <td>Comment V1</td>
                <td><a href="https://wild-erin-bass-yoke.cyclic.app/api/v1/comment/:postId/:commentId"><i class="bi bi-arrow-up-right-square"></i></a></td>
            </tr>
        </table>
    </body>
    </html>`);
});

router.put('/comment/:postId/:commentId', (req, res, next) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Routing Server</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- css -->
        <link rel="stylesheet" href="./style.css" type="text/css">
        <!-- font -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet">
        <!-- icons -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
        <!-- moment js -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>
        <!-- javascript -->
        <script src="./main.js"></script>
    </head>
    
    <body>
        <h1 class="center">Routing Server</h1>
        <h3 class="center">This Is Routing Server</h3>
        <h3 class="center" id="date"></h3>
        <p class="center">Thanks For Visiting Regards! Muhammad Waqas&copy;</p>
        <table>
            <tr>
                <td>1</td>
                <td>Login V1</td>
                <td><a href="https://wild-erin-bass-yoke.cyclic.app/api/v1/login"><i class="bi bi-arrow-up-right-square"></i></a></td>
            </tr>
            <tr>
                <td>2</td>
                <td>Signup V1</td>
                <td><a href="https://wild-erin-bass-yoke.cyclic.app/api/v1/signup"><i class="bi bi-arrow-up-right-square"></i></a></td>
            </tr>
            <tr>
                <td>3</td>
                <td>Feed V1</td>
                <td><a href="https://wild-erin-bass-yoke.cyclic.app/api/v1/feed/:userId"><i class="bi bi-arrow-up-right-square"></i></a></td>
            </tr>
            <tr>
                <td>4</td>
                <td>Post V1</td>
                <td><a href="https://wild-erin-bass-yoke.cyclic.app/api/v1/post/:userId/:postId"><i class="bi bi-arrow-up-right-square"></i></a></td>
            </tr>
            <tr>
                <td>5</td>
                <td>Comment V1</td>
                <td><a href="https://wild-erin-bass-yoke.cyclic.app/api/v1/comment/:postId/:commentId"><i class="bi bi-arrow-up-right-square"></i></a></td>
            </tr>
        </table>
    </body>
    </html>`);
})
router.delete('/comment/:postId/:commentId', (req, res, next) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Routing Server</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- css -->
        <link rel="stylesheet" href="./style.css" type="text/css">
        <!-- font -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet">
        <!-- icons -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
        <!-- moment js -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>
        <!-- javascript -->
        <script src="./main.js"></script>
    </head>
    
    <body>
        <h1 class="center">Routing Server</h1>
        <h3 class="center">This Is Routing Server</h3>
        <h3 class="center" id="date"></h3>
        <p class="center">Thanks For Visiting Regards! Muhammad Waqas&copy;</p>
        <table>
            <tr>
                <td>1</td>
                <td>Login V1</td>
                <td><a href="https://wild-erin-bass-yoke.cyclic.app/api/v1/login"><i class="bi bi-arrow-up-right-square"></i></a></td>
            </tr>
            <tr>
                <td>2</td>
                <td>Signup V1</td>
                <td><a href="https://wild-erin-bass-yoke.cyclic.app/api/v1/signup"><i class="bi bi-arrow-up-right-square"></i></a></td>
            </tr>
            <tr>
                <td>3</td>
                <td>Feed V1</td>
                <td><a href="https://wild-erin-bass-yoke.cyclic.app/api/v1/feed/:userId"><i class="bi bi-arrow-up-right-square"></i></a></td>
            </tr>
            <tr>
                <td>4</td>
                <td>Post V1</td>
                <td><a href="https://wild-erin-bass-yoke.cyclic.app/api/v1/post/:userId/:postId"><i class="bi bi-arrow-up-right-square"></i></a></td>
            </tr>
            <tr>
                <td>5</td>
                <td>Comment V1</td>
                <td><a href="https://wild-erin-bass-yoke.cyclic.app/api/v1/comment/:postId/:commentId"><i class="bi bi-arrow-up-right-square"></i></a></td>
            </tr>
        </table>
    </body>
    </html>`);
})

export default router;
