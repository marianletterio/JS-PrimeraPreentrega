let respuesta = prompt("Seleccione la opción deseada: \n 1) Ver todas las prendas disponibles \n 2) Ver los precios \n 3) Ver talles disponibles")


if (respuesta == "1"){
    alert("Nuestras prendas disponibles son:" + mostrarPrendas());
}else if (respuesta == "2"){
    alert("Quiero saber el precio de todos los productos: " + mostrarSoloPrecios())
}else if(respuesta == "3"){
    alert("Los talles actuales son: " + mostrarTalles())
}

let confirmar = prompt("Deseas comprar algo? \n 1) Si 2) No");

if(confirmar == "1"){
    elegirPrenda()
}
else if(confirmar == "2"){
    alert("Gracias por visitarnos!")
}

function elegirPrenda(){
    let prendasStock = prompt("Qué prenda deseás comprar? (Seleccioná el número) \n \n 1) Buzo Eyes \n 2) Campera Dogs \n 3) Remera Jungle \n 4) Camisa Daisy \n 5) Sweater Lazy \n 6) Camisa Patchwork")
    if(prendasStock == "1"){
        alert("Compraste el Buzo Eyes! En breve recibirás un correo con los detalles de tu pedido")
    }else if(prendasStock == "2"){
        alert("Compraste la Campera Dogs! En breve recibirás un correo con los detalles de tu pedido")
    }else if(prendasStock == "3"){
        alert("Compraste la Remera Jungle! En breve recibirás un correo con los detalles de tu pedido")
    }else if(prendasStock == "4"){
        alert("Compraste la Camisa Daisy! En breve recibirás un correo con los detalles de tu pedido")
    }else if(prendasStock == "5"){
        alert("Compraste el Sweater Lazy! En breve recibirás un correo con los detalles de tu pedido")
    }else if(prendasStock == "6"){
        alert("Compraste la Camisa Patchwork! En breve recibirás un correo con los detalles de tu pedido")
}
}

function mostrarPrendas(){
let stock = "";
for(let i = 0; i < prendas.length 
    ;i++){
    stock += "\n"+prendas[i].mostrarTodo();
}
return stock ; 
} 

function mostrarSoloPrecios(){
    let precios = "";
    for (let i = 0; i <prendas.length;i++){
        precios += "\n"+prendas[i].mostrarPrecios();
    }
return precios;
}

function mostrarTalles(){
    let talle = "";
    for (let i = 0; i < prendas.length;i++){
        talle += "\n" + prendas[i].mostrarTalles();
    }
    return talle;
}
s