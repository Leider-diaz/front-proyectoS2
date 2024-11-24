

const apiBack = "http://localhost:8094/api"

export const obtenerProductos = async () => {const res = await fetch(apiBack + "/producto/list")
    if(!res.ok){
        console.log("error")
    }
    return res.json();
}

export const obtenerProductosCarrito = async (idUsuario) => {const res = await fetch(apiBack + "/productosCarrito/list?idUsuario=" + idUsuario)
    if(!res.ok){
        console.log("error")
    }
    return res.json();
}

export const setProductosCarrito = async (idUsuario, idProducto, cantidad) => {const res = await fetch(apiBack + "/productosCarrito/add?idUsuario=" + idUsuario + "&idProducto=" + idProducto + "&cantidad=" + cantidad, {method:"POST"})
    if(!res.ok){
        console.log("error")
    }
    return res.json();
}

export const realizarPedido = async (idUsuario, idProducto, cantidad) => {const res = await fetch(apiBack + "/pedido/realizarPedido?idUsuario=" + idUsuario + "&idProducto=" + idProducto + "&cantidad=" + cantidad, {method:"POST"})
    if(!res.ok){
        console.log("error")
    }
    return res.json();
}

export const realizarPedidoCarrito = async (idUsuario) => {const res = await fetch(apiBack + "/pedido/realizarPedidoCarrito?idUsuario=" + idUsuario, {method:"POST"})
    if(!res.ok){
        console.log("error")
    }
    return res.json();
}

export const editProductos = async (idProducto, idUsuario) => {const res = await fetch(apiBack + "/productos", {method:"PUT", body:{idProducto: idProducto, idUsuario: idUsuario}})
    if(!res.ok){
        console.log("error")
    }
    return res.json();
}

export const deleteProductosCarrito = async (idProducto) => {const res = await fetch(apiBack + "/productosCarrito/delete/" + idProducto, {method:"DELETE"})
    if(!res.ok){
        console.log("error")
    }
    return res.json();
}

