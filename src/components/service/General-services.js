
const apiBack = "http://20.197.225.198:8080/api"
const apiBack3A = "https://invencloud.up.railway.app/customers/api"

export const obtenerProductos = async () => {const res = await fetch(apiBack + "/producto/list")
    if(!res.ok){
        console.log("sisas")
    }
    return res.json();
}

export const obtenerPedidos = async () => {const res = await fetch(apiBack + "/pedido/list")
    if(!res.ok){
        console.log("error")
    }
    return res.json();
}

export const obtenerPedidos3A = async () => {const res = await fetch(apiBack3A + "/orders")
    if(!res.ok){
        console.log("error")
    }
    return res.json();
}

export const obtenerProductosCarrito = async (idUsuario) => {const res = await fetch(apiBack + "/productosCarrito/list?idUsuario=" + idUsuario)
    if(!res.ok){
        console.log("sisas")
    }
    return res.json();
}

export const setProductosCarrito = async (idUsuario, idProducto, cantidad) => {const res = await fetch(apiBack + "/productosCarrito/add?idUsuario=" + idUsuario + "&idProducto=" + idProducto + "&cantidad=" + cantidad, {method:"POST"})
    if(!res.ok){
        console.log("sisas")
    }
    return res.json();
}

export const setUnProductosCarrito = async (idUsuario, idProducto) => {const res = await fetch(apiBack + "/productosCarrito/addUn?idUsuario=" + idUsuario + "&idProducto=" + idProducto, {method:"POST"})
    if(!res.ok){
        console.log("error")
    }
    return res.json();
}

export const deleteUnProductosCarrito = async (idUsuario, idProducto) => {const res = await fetch(apiBack + "/productosCarrito/deleteUn?idUsuario=" + idUsuario + "&idProducto=" + idProducto, {method:"POST"})
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
        console.log("sisas")
    }
    return res.json();
}

export const deleteProductos = async (idProducto) => {const res = await fetch(apiBack + "/productos/" + idProducto, {method:"DELETE"})
    if(!res.ok){
        console.log("sisas")
    }
    return res.json();
}