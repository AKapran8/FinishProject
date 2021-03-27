// Опис товара, его вид
export interface IProduct {
   _id: string,
   rating: number,
   numReviews: number,
   price: number,
   countInStock: number,
   name: string,
   image: string,
   description: string,
   brand: string,
   category: string,
   user: string,
   createdAt: string,
   updatedAt: string,
   reviews: IProductReviews
}

// Для перехода по страницаъ
export interface IGetProductResponse {
   page: string,
   pages: number,
   products: IProduct[]
}

// Товар и к-во товара
export interface IGetProductAndCount {
   products: IProduct,
   count: number
}

// Ревьюшки
export interface IProductReviews {
   _id: string,
   name: string,
   rating: number,
   comment: string,
   user: string,
   createdAt: string,
   updatedAt: string,
   product_id: string
}
