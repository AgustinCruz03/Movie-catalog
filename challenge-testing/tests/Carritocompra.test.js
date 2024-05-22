const { CarritoCompra } = require("../index")
// constructor(): Inicializa el carrito como un array vacío.

// agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

// calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

// aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado

//CarritoCompra debe ser una clase

const mockAgregarProducto = CarritoCompra.prototype.agregarProducto
// console.log(mockAgregarProducto.mocks.call)
describe("la clase CarritoCompra debe...", () => {

    let carritoNuevo;
    beforeEach(() => {
        carritoNuevo = new CarritoCompra()
    })

    //acerca de constructor
    it("CarritoCOmpra debe ser una clase", () => {
        expect(typeof CarritoCompra.prototype.constructor).toEqual("function")
    });

    it("inicializar el carrito con un array vacío", () => {
        expect(carritoNuevo.products).toEqual([])
    });
    //funcion agregarProducto()
    it("tener una funcion agregarProducto()",() => {
        expect(mockAgregarProducto).toBeDefined();
    })

    it("recibir un objeto representando un producto y lo agrega al carrito con la funcion agregarProducto()", () => {
        carritoNuevo.agregarProducto({nameProducto:"yogur", precio:200, cantidad:2})
        expect(typeof carritoNuevo.products[0]).toEqual("object")
    })

    it("solo poder recibir objetos para agregarlos al carrito", () => {
        expect(() => carritoNuevo.agregarProducto("hola")).toThrowError("no esta ingresando un objeto")
        expect(() => carritoNuevo.agregarProducto(9).toThrowError("no esta ingresando un objeto"))
    })

    //funcion calcularTotal()
    it("tener una funcion calcularTotal", () => {
        expect(CarritoCompra.prototype.calcularTotal).toBeDefined();
    })

    it("calcular el total de la compra sumando los precios del carrito, usando la funcion calcularTotal()", () => {
        carritoNuevo.agregarProducto({nameProducto:"yogur", precio:200, cantidad:2})
        carritoNuevo.agregarProducto({nameProducto:"leche", precio:100, cantidad:3})
        carritoNuevo.agregarProducto({nameProducto:"carne", precio:300, cantidad:2})
        expect(carritoNuevo.calcularTotal()).toEqual(1300);
    })

    //aplicarDescuento(Porcentje)
    it("aplicar un descuento al total de la compra, utilizando la funcion aplicarDescuento(porcentaje)", () => {
        carritoNuevo.agregarProducto({nameProducto:"yogur", precio:200, cantidad:2})
        carritoNuevo.agregarProducto({nameProducto:"leche", precio:100, cantidad:3})
        carritoNuevo.agregarProducto({nameProducto:"carne", precio:300, cantidad:2})
        carritoNuevo.aplicarDescuento(10)
        expect(carritoNuevo.calcularTotal()).toEqual(1170);
    })
})