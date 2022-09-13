<!DOCTYPE html>
<html>

<head>
    <title>Login</title>
    <link rel="stylesheet" href="style.css">
    <link rel="shortcut icon" href="yo.png" type="image/x-icon">
</head>

<body>
    <header>
        <div class="hbar">
            <h1>EMMA</h1>
            <ul>
                <li><a href="https://www.instagram.com/direct/inbox/">Insta</a></li>
                <li><a href="https://www.facebook.com">Face</a></li>
                <li><a
                        href="https://api.whatsapp.com/send?phone=8297721111&text=Hola, Nececito mas informacion!">whatsa</a>
                </li>
            </ul>
        </div>
        <nav>
            <div class="nav">
                <ul>
                    <li><a href=" ">Home</a></li>
                    <li><a href=" ">About</a></li>
                    <li><a href=" ">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
    <section>
        <div class="f-section">
            <h1>INICIAR SESION </h1>

            <!-- INICION DEL FORMULARIO -->
            <form id="survey-form" action="validar.php" method="post">
                <div class="form-group">
                    <div class="form-group">
                        <label id="user" for="name">USUARIO</label>
                        <input type="text" name="user" id="name" class="form-control" placeholder="Enter your user"
                            required />
                    </div>
                    <div class="form-group">
                        <label id="password" for="password">CONTRASEÑA</label>
                        <input type="password" name="password" id="password" class="form-control"
                            placeholder="Enter your password" required />
                    </div>
                    <div class="form-group">
                        <button type="submit" id="submit" class="submit-button1">
                            INGRESAR
                        </button>
                    </div>
                    <div class="form-group">
                        <button id="submit" class="submit-button2">
                            REGISTRARSE
                        </button>
                    </div>
                </div>
            </form>
            <?php
                include('registValidar.php');
            ?>
            <!-- FINAL DEL FROMULARIO -->
        </div>
    </section>
    <footer>
        <div class="footer">
            <p>&copy Create by Emmanue1</p>
        </div>
    </footer>
</body>

</html>