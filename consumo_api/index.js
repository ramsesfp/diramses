
if(document.getElementById("contenedor")){
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
                    <button style="background:green;" onClick="editarProducto(${producto.id})">EDITAR</button>
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

}



    //para crear producto

    // if(document.getElementById('formulario')){
    //      let formulario=document.getElementById('formulario');


    //      formulario.addEventListener('submit', (e)=>{

    //             e.preventDefault();

    //             fetch("http://localhost:5297/productos", {

    //                 method:"POST",
    //                 headers:{ "Content-Type": "application/json" },
    //                 body: JSON.stringify({
    //                     nombre: formulario.nombre.value,
    //                     precio: Number(formulario.precio.value),
    //                     categoria: formulario.categoria.value,
    //                     urlImagen: formulario.urlImagen.value
    //                 })
    //             })
    //             .then((res)=>{
    //                 if(res.status == 201){
    //                     alert("producto creado")

    //                     location.href="index.html"
    //                 }
    //             })



    // })

    // }
   
    
    


    function editarProducto(id){

        fetch(`http://localhost:5297/productos/${id}`,{
            method:'GET'
        }).then((res)=>{
            
            if (!res.ok) {
                return;
        } else {
            return res.json();
        }
        }).then((datos)=>{

            let section=document.getElementById("contenedor")
            section.style.display="none"
            location.href="#formulario"
     
            let nombre = document.getElementById('nombreInput')
            let categoria = document.getElementById('categoriaInput')
            let precio = document.getElementById('precioInput')
            let urlImagen = document.getElementById('urlImagenInput')
            let id =document.getElementById("idInput")

            id.value = datos.id;
            nombre.value = datos.nombre;
            precio.value = datos.precio;
            categoria.value = datos.categoria;
            urlImagen.value = datos.urlImagen;

        })
    }


    if(document.getElementById('formulario')){
         let formulario=document.getElementById('formulario');


         formulario.addEventListener('submit', (e)=>{

                e.preventDefault();

            let nombre = document.getElementById('nombreInput')
            let categoria = document.getElementById('categoriaInput')
            let precio = document.getElementById('precioInput')
            let urlImagen = document.getElementById('urlImagenInput')
            let id =document.getElementById("idInput")

                fetch("http://localhost:5297/productos", {

                    method:"PUT",
                    headers:{ "Content-Type": "application/json" },
                    body: JSON.stringify({
                        id:Number(id.value),
                        Nombre: nombre.value,
                        precio: Number(precio.value),
                        categoria: categoria.value,
                        urlImagen: urlImagen.value
                    })
                })
                .then((res)=>{
                  
                    

                        location.reload()
                    
                })



    })

    }