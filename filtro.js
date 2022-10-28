// Tenemos un li de productos

const productos = [
  //Corrección de todas las rutas de imágenes
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "/taco-negro.jpg"}, 
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "/taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "/bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "/zapato-rojo.jpg"}
]

const li = document.getElementsByName("lista-de-productos");
const objInput = document.querySelector('.input'); //Cambio nombre de variable

//Este for crea nuevos elementos de tipo div y párrafo por cada producto y lo agrega dentro del div con nombre "lista-de-productos"
// Cambio de todas las variables var por let
//Se agrega la declaración de la función displayProductos
function displayProductos(arreglo){
for (let i = 0; i < productos.length; i++) {
  let nuevoDiv = document.createElement("div"); //Cambio de nombre de variable
  nuevoDiv.classList.add("producto");

  let nuevoParr = document.createElement("p"); //Cambio de nombre de variable
  nuevoParr.classList.add("titulo");
  nuevoParr.textContent = productos[i].nombre;
  
  let imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  nuevoDiv.appendChild(nuevoParr)
  nuevoDiv.appendChild(imagen)

  li.appendChild(nuevoDiv)
}
}

displayProductos(productos); //Se manda llamar la función

const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = objInput.value; //Cambio de variable en .value
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    let d = document.createElement("div")
    d.classList.add("producto")
  
    let ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    let imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  