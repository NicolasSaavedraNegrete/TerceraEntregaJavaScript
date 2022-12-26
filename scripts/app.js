
// PRE ENTREGA 1
// variables

//precio producto
// let producto01 = 50000;
// let producto02 = 200000;
// let producto03 = 75000;
// let producto04 = 40000;

// // stock productos

// let stock01 = 5;
// let stock02 = 10;
// let stock03 = 3;
// let stock04 = 2;

// PRE ENTREGA 1
// let cliente = prompt("Bienvenido, Ingrese su nombre");

// let orden = prompt(`
//         Hola ${cliente}, Que quieres adquirir con nosotros?
//         1 Placa madre : $50.000
//         `);

//         console.log(cliente)
//         console.log(orden)


//     switch (orden.toLowerCase()){

//         case "1":
        //      let orden = prompt (`Quedan: ${stock01} unidades en stock en este minuto.

        //    Cuantas unidades desea?

        //    `);
//     if (orden >= 1 && orden <= stock01){
//         alert (
//             `Se han agregado ` + orden + ` unidades al carro de compra
//             Tienes un total de $ ` + producto01 * orden + `
//         `);

//     }

//     else {
//         if (orden > stock01){
//             alert ("No hay stock suficiente")
//         }

//     }
// }

// PRE-ENTREGA NUMERO 2
// const productos = [
//     {nombre: "Placa madre", precio: 50000},
//     {nombre: "Procesador", precio: 250000},
//     {nombre: "Memoria Ram", precio: 45000},
//     {nombre: "Tarjeta de Video", precio: 350000},

// ];
// let carrito = []

// let cliente = prompt("Bienvenido, Ingrese su nombre");

// let orden = prompt(`Hola ${cliente}, Te gustaria comprar con nosotros?`);

// while (orden != "si" && orden != "no") {
//     alert("por favor ingrese si o no")
//     orden = prompt("Desea comprar algo con nosotros?")

// }

// if (orden === "si") {
//     alert("Que es lo que estas buscando?")
//     let TodosLosProductos = productos.map(
//         (producto) => producto.nombre + " " + "$" + producto.precio
//     );
//     alert(TodosLosProductos.join(" - "))
//     } else if (orden === "no") {
//         alert("Gracias por preferirnos , lo esperamos")

//     }

//     while (orden != "no") {
//         let producto = prompt("agrega un producto al carro de compra > placa madre , procesador , memoria ram , tarjeta de video")
//         let precio = 0

//         if(producto == "placa madre" || producto == "procesador" || producto == "memoria ram" || producto == "tarjeta de video"){
//             switch (producto){
//                 case "placa madre":
//                     precio = 50000;
//                     break;
//                 case "procesador":
//                     precio = 250000;
//                     break;
//                 case "memoria ram":
//                     precio = 45000;
//                     break;
//                 case "tarjeta de video":
//                     precio = 350000;
//                     break;
//                 default:
//                     break;
//             }
//             let unidades = parseInt(prompt("Cuantas unidades desea?"))

//             carrito.push({producto, unidades, precio})
//             console.log(carrito)
//         } else {
//             alert("no tenemos ese producto")
//         }
//     orden = prompt("Necesita algo mas?")

//     while (orden === "no") {
//         alert("Gracias por comprar , vuelva pronto !")
//         carrito.forEach((carritoFinal) => {
//             console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
//         })
//         break;
//     }
//         }

//         const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0 )
//         console.log(`El total de su compra es: ${total}`)



/* pre entrega 3 */

const Clickbutton = document.querySelectorAll('.button')
const tbody = document.querySelector('.tbody')
let carrito = []
Clickbutton.forEach(btn => {
    btn.addEventListener('click', addToCarritoItem)
    
})

function addToCarritoItem(e){
    const button = e.target;
    const item = button.closest('.card')
    const itemTitle = item.querySelector('.card-title').textContent;
    const itemPrice = item.querySelector('.precio').textContent;
    const itemImg = item.querySelector('.card-img-top').src;

    const newItem = {
        title: itemTitle,
        precio: itemPrice,
        img: itemImg,
        cantidad: 1
    }
    addItemCarrito(newItem)
} 

function addItemCarrito(newItem){

    const InputElemento = tbody.getElementsByClassName('input__elemento')
    for(let i = 0; i < carrito.length; i++){
        if(carrito[i].title.trim() === newItem.title.trim()){
            carrito[i].cantidad ++;
            const inputValue = InputElemento[i]
            inputValue.value++;
            CarritoTotal()

            return null;
        }
    }

    carrito.push(newItem)

    renderCarrito()
}
function renderCarrito(){
    tbody.innerHTML = ''
    carrito.map(item => {
        const tr = document.createElement('tr')
        tr.classList.add('ItemCarrito')
        const Content = ` <th scope="row">1</th>
        <td class="table__productos">
            <img src=${item.img} alt="">
            <h6 class="title">${item.title}</h6>
        </td>
        <td class="table__precio"><p>${item.precio}</p></td>
        <td class="table__cantidad">
            <input type="number" min="1" value=${item.cantidad} class="input__elemento">
            <button class="delete btn btn-danger">X</button>
        </td> `

        tr.innerHTML = Content;
        tbody.append(tr)
    })
    CarritoTotal()
}

function CarritoTotal(){
    let Total = 0;
    const ItemCartTotal =document.querySelector('.itemCartTotal')
    carrito.forEach((item) => {
        const precio = Number(item.precio.replace("$", ''))
        Total = Total + precio*item.cantidad
    })
    ItemCartTotal.innerHTML = `Total $${Total}`
}