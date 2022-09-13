<!-- VALIDACION DEL REGISTRO -->

<?php
include('db.php');


if (isset($_POST['register'])) {
    if (strlen($_POST['user']) >= 1 && strlen($_POST['name']) >= 1 && strlen($_POST['lastname']) >= 1 && strlen($_POST['password']) >= 1) {
        $usuario = trim($_POST['user']);
        $nombre = trim($_POST['name']);
        $apellido = trim($_POST['lastname']);
        $contraseña = trim($_POST['password']);
        $fechareg = date("Y-m-d");
        $consulta = "INSERT INTO registro (usuario, nombre, apellido, contraseña, fecha_reg) VALUES ('$usuario', '$nombre', '$apellido', '$contraseña', '$fechareg')";
        $resultado = mysqli_query($conexion, $consulta);
        if ($resultado) {
            ?>
            <h3 class="ok">Te haz inscrito correctamente</h3>
            <?php
        } else{
            ?>
            <h3 class="bad">Error al registrarte</h3>
            <?php
        }
    }   else{
            ?>
            <h3 class="bad">Por favor complete los campos</h3>
            <?php
        }    
}

?>