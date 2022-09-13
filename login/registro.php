<!DOCTYPE html>
<html>
<head>
    <title>Regristro</title>
    <link rel="stylesheet" href="style_registro.css">
    <link rel="shortcut icon" href="yo.png" type="image/x-icon">
</head>
<body>
    <header>
        <div class="hbar">
            <h1>EMMA</h1>
            <ul>
                <li><a href="https://www.instagram.com/direct/inbox/">Insta</a></li>
                <li><a href="https://www.facebook.com">Face</a></li>
                <li><a href="https://api.whatsapp.com/send?phone=8297721111&text=Hola, Nececito mas informacion!">whatsa</a></li>
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
            <form id="survey-form">
                <div class="form-group">
                    <div class="form-group">
                        <label id="user" for="name">USUARIO</label>
                        <input type="text" name="user" id="user" class="form-control" placeholder="Enter your new user" required/>
                    </div>
                    <div class="form-group">
                        <label id="name" for="name">NOMBRE</label>
                        <input type="text" name="name" id="name" class="form-control" placeholder="Enter your name" required/>
                    </div>
                    <div class="form-group">
                        <label id="lastname" for="lastname">APELLIDO</label>
                        <input type="text" name="lastname" id="lastname" class="form-control" placeholder="Enter your lastname" required/>
                    </div>
                    <div class="form-group">
                        <label id="password" for="password">CONTRASEÑA</label>
                        <input type="password" name="password" id="password" class="form-control" placeholder="Enter your password" required/>
                    </div>
                        <div class="form-group">
                            <a href="/index.php">
                                <button  id="submit" class="submit-button1">
                                REGRESAR
                                </button>
                            </a>
                        </div>
                        <div class="form-group">
                            <button type="submit" name="register" id="submit" class="submit-button2">
                            REGISTRARSE
                            </button>
                        </div>
                </div>
            </div>
        </form>
        <?php
        include('registValidar.php');
        ?>
      </div>
    </section>
    <footer>
        <div class="footer">
          <p>&copy Create by Emmanue1</p>
        </div>
      </footer>
</body>
</html>