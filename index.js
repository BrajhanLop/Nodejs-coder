class ProductManager {
  constructor () {
    this.product = []
  }

  getProducts () {
    return this.product
  }

  addProduct (title, description, price, thumbnail, code, stock) {
    const newProduct = new Product(title, description, price, thumbnail, code, stock)
    const findProductDuplicate = this.product.filter(prod => prod.code === newProduct.code)
    if (findProductDuplicate.length > 0) {
      console.log(`No se puede guardar, el codigo del producto ${newProduct.title} ya esta ingresado`)
      return
    }
    this.product.push(newProduct)
  }

  getProductById (id) {
    const getProduct = this.product.find(prod => prod.id === id)
    if (getProduct) {
      return getProduct
    }
    console.log('Product Not Found')
  }
}

class Product {
  static id = 1
  constructor (title, description, price, thumbnail, code, stock) {
    this.id = Product.id++
    this.title = title
    this.description = description
    this.price = price
    this.thumbnail = thumbnail
    this.code = code
    this.stock = stock
  }
}

const adminProducts = new ProductManager()

// AGREGANDO PRODUCTOS
adminProducts.addProduct('Fideo Di Maria', 'fideos de Angel', 200, 'sin archivo', 'fd-323', 50)
adminProducts.addProduct('Galleta Casino', 'galletas dulces', 50, 'sin archivo', 'gl-111', 20)
adminProducts.addProduct('Gaseosa Coca', 'gaseosa', 150, 'sin archivo', 'go-412', 20)

// TRAER TODOS LOS PRODUCTOS AGREGADOS
console.log('===TODOS LOS PRODUCTOS ===')
console.table(adminProducts.getProducts())

// AGREGANDO PRODUCTO DUPLICADO
console.log('===AGREGANDO DUPLICADO ===')
console.error(adminProducts.addProduct('Arroz Integral', 'arroz', 250, 'sin archivo', 'go-412', 12))
// FILTRAR PRODUCTOS POR ID
console.log('=== FILTRANDO PRODUCTO ===')
console.table(adminProducts.getProductById(2))
