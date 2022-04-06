
let opcion = "";
let arrayLibros = [];
class Libros{
    constructor(titulo, autor, isbn, editorial, precio){
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = parseInt(isbn);
        this.editorial = editorial;
        this.precio = parseFloat(precio);
    }
}
/*
menu();

function menu(){
    while (opcion !=4) {
        alert(
                "MENU\n"+
                "1) CARGAR LIBRO\n"+
                "2) LISTAR LIBRO\n"+
                "3) FILTRAR LIBRO\n"+
                "4) SALIR")
        opcion=parseInt(prompt("ELIJA OPCIÓN"));
        switch (opcion) {
            case 1:
                cargarLibros();
                //let ingreso = "S"
                //while(ingreso!="N"){
                    //cargarLibros();
                    //ingreso = prompt("DESEA INGRESAR OTRO PRODUCTO (S/N)").toUpperCase()
                //}
                //ingreso = ingreso.toUpperCase()
                break;

//            case 2:
//                listarProductos();
//              break;

//            case 3:
//                let nombre = prompt("INGRESE NOMBRE DE PRODUCTO A FILTRAR: ");
//                console.log(filtrarProducto(nombre));
//                
//                break;    
            
            case 4:
                alert("HASTA LA PRÓXIMA");
                break;    
        
            default:
                alert("OPCION INCORRECTA")
                break;
        }                
    }
}
*/
/*
let formulario = document.getElementById("form");
console.log(formulario);

formulario.addEventListener("submit", cargarLibros);

function cargarLibros(e){
    e.preventDefault();
    //Obtener el elemento desde el cual se ingresa
    let dato = e.target
    // Obtener datos de los hijos
    console.log(dato.children[2].value);
    console.log(dato.children[5].value);
    //console.log(dato.children[2].value);
    //console.log(dato.children[3].value);
    //console.log(dato.children[4].value);
}

function listarProductos(){
    for(let Producto of arrayProductos){        
        console.log(`Producto: ${Producto.nombre} color:  ${Producto.color}: $ ${Producto.precio}`)
        }
}

function filtrarProducto(nombre){
    console.log(nombre);
    return arrayProductos.find(objeto => objeto.nombre === nombre.toUpperCase());
}
for (let i = 0; i < arrayProductos; i++) {
    let busqueda = filtrarProducto(nombre, prompt('INGRESAR NOMBRE DE PRODUCTO'));
    if(busqueda != undefined){
        alert('PRODUCTO '+ busqueda.nombre+' COLOR '+ busqueda.color+' PRECIO '+ busqueda.precio);
    }else{
        alert('NO EXISTE PRODUCTO CON ESE NOMBRE');
    }
}
*/


let menu = document.getElementById("navbar")
navbar.innerHTML = 
`<nav class="navbar navbar-expand-lg navbar-dark bg-black">
<div class="container-fluid">
    <a class="navbar-brand" href="index.html"><img class="imagen-logo" src="../imagenes/logoLibreria.png" alt="logo Libreria"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
            <a class="nav-link active" href="../index.html">Inicio</a>
            </li>
            <li class="nav-item">
            <a class="nav-link active" href="../paginas/cargarLibros.html">Cargar Libros</a>
            </li>
            <li class="nav-item">
            <a class="nav-link active" href="#">Listar Libros</a>
            </li>
            <li class="nav-item">
            <a class="nav-link active" href="#">Buscar Libro</a>
            </li>
            <li class="nav-item">
            <a class="nav-link active" href="#">Eliminar Libro</a>
            </li>
        </ul>
    </div>
</div>
</nav>` 


//let imagenCentral = document.getElementById("imagenCentral")
//imagenCentral.innerHTML = `<img src="./imagenes/libreria.jpg" alt="">`


let formulario = document.getElementById("formulario")
formulario.innerHTML = ` <h3>CARGAR LIBRO</h3>
<form>

<label>Titulo</label>  
<br><input type="text" id="titulo" placeholder="Titulo" required><br>
<label>Autor</label> 
<br><input type="text" id="autor" placeholder="Autor" required><br>
<label>Editorial</label>  
<br><input type="text" id="editorial" placeholder="Editorial" required><br>
<label>isbn</label>
<br><input type="number" id="isbn" placeholder="ISBN" required><br>
<label>precio</label>
<br><input type="number" id="precio" placeholder="Precio" required><br>

<br><button class="boton" type="submit" onclick="cargarLibros()">Enviar</button>
</form>`


function cargarLibros(){
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let editorial = document.getElementById("editorial").value;
    let isbn = document.getElementById("isbn").value;
    let precio = document.getElementById("precio").value;

    console.log("Titulo: " + titulo + "\nAutor: " + autor + "\nEditorial: " + editorial + 
    "\nISBN: " + isbn + "\nPrecio: " + precio)
}




