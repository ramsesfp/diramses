
let contenedor = document.getElementById("contenedor");

//consumir productos
fetch("http://localhost:5297/productos")

    .then(res => {

        if (!res.ok) {
            return;
        } else {

            return res.json();
        }
    })
    .then(todos => {
        if (todos) {

            console.log(todos)

            todos.forEach(producto => {

                contenedor.innerHTML += `
            <div class="card">
            
                <div class="titulo">
               
                    <h2> ${producto.id} ${producto.nombre}</h2>
                </div>

                <div class="imagen"> 
                  <img src="${producto.urlImagen}"> 
                </div>

                <div class="precio"> 
                  <p >Precio: ${producto.precio} </p> 
                  <p >Categoria: ${producto.categoria} </p> 
                </div>

                <div class="botones">
                    <button onClick="eliminarProducto(${producto.id})">ELIMINAR</button>
                </div>

            </div>
        `;

            });



        } else {
            return;
        }
    })



    function eliminarProducto(id){

        if(confirm("quieres eliminar el producto?")){

            fetch("http://localhost:5297/producto/"+id,{
            method:"DELETE"
        }).then(() => {
            location.reload();
        })

        }

        
    }


    