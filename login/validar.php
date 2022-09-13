<?php
include('db.php');
/* INICIALIZACION DE VARIABLES */
/* TRIM: ELIMINA LOS ESPACIOS */
$usuario = trim($_POST['user']);
$contraseña =  trim($_POST['password']);

session_start();
$_SESSION['user'] = $usuario;

$consulta="SELECT * FROM usuarios WHERE usuario ='$usuario' AND contraseña = '$contraseña'";
$resultado=mysqli_query($conexion,$consulta);

$filas = mysqli_num_rows($resultado); 

if($filas){ 
    header("location:HEADPHONES/index.html");

}else{
    ?>
    <?php
    include("index.php");
    /* ERROR DE AUTENTIFICACION */
    ?>
    <h1 class="bad">ERROR DE AUTENTIFICACION</h1> 
    <?php
}

mysqli_free_result($resultado);
mysqli_close($conexion);

?>

