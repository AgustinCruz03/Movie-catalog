class CarritoCompra{
    constructor(){
        this.products = []
        this.descuento = 0;
    }

    agregarProducto(obj){
        if(typeof obj != "object"){
            throw Error("no esta ingresando un objeto")
        }
        this.products.push(obj)
    }

    calcularTotal(){
        let total = 0;
        for(let product of this.products){
            total += (product.precio * product.cantidad)
        }
        total = total - total * (this.descuento /100)
        return total;
    }

    aplicarDescuento(porcentaje){
        this.descuento = porcentaje
    }

}

module.exports = {CarritoCompra}