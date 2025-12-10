// let section2 = document.getElementById("section2");

// let titulo = "mi titulo 2"

// let texto = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi saepe, unde nesciunt expedita qui sit dolorem nam inventore repellat maxime atque quaerat nihil, molestiae autem ratione odio eligendi laboriosam corporis?";

// let img = "img/main_image_star-forming_region_carina_nircam_final-5mb.webp";

// let articulo = document.createElement("article");

// let section3 = document.getElementById("section3");
// let contenedor = document.getElementById("contenedor");


// articulo.innerHTML = `
// <div class="titulo">
//     <h1>  ${titulo}  </h1>
// </div>

// <div class="texto">
//     ${texto}
// </div>

// <div class="imagen">
//     <img src="${img}">
// </div>
// `;

// articulo.className = "articulo2";
// section2.appendChild(articulo);


//consumir el json

// fetch("/productos.json")
//     .then(response => response.json())
//     .then(data => {

//         data.productos.forEach(p => {


        

// contenedor.innerHTML += `
//             <div class="card">
//                 <div class="titulo">
//                     <h2>${p.nombre}</h2>
//                 </div>
//                 <div class="imagen">
//                     <img class="img" src="${p.imagen}">
//                 </div>
//                 <div class="precio">
//                     <p>Precio: ${p.precio} €</p>
//                 </div>

//                 <div class="botones"> 
//                     <button>Comprar</button>
//                  </div>
//             </div>
//         `;
//             section3.appendChild(contenedor)

//         });//fin del for


//     })//fin del then
//     .catch(e => console.log(e))



    /* INDEX 2 */
    let section1=document.getElementById("section1")

    let contendeor2 = document.getElementById("contenedor2");

    fetch("/productos2.json")
    .then(res => res.json()) 
       
    .then(data =>{
        data.productos.forEach(e => {

            contendeor2.innerHTML+=`
            <div class="card">
                
                <div class="titulo">
                    <h3>${e.nombre}</h3>
                </div>

                <div class="imagen">
                    <img src="${e.imagen}">
                </div>

                <div class="precio">
                    <p>${e.precio} €</p>
                </div>

                <div class="botones">
                    <button class="boton" id="${e.id}">COMPRAR</button>
                </div>           
            </div>
            `;

            
            section1.appendChild(contendeor2);



        })
    })
    .catch(e => console.log(e))


