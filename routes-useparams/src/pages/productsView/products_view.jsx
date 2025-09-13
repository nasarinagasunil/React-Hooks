import { Navbar } from "../../components/navbar/navbar"
import { products } from "../../db/products"
import { Product } from "../../components/products/products_card"
export const ProductsView = () => {
    return (
        <>
            <Navbar />
            <div className="flex gap-16px flex-wrap">
                {products.map((product) => (
                    <div key={product.id} className="flex-col border">
                        <Product product={product} />
                    </div>
                ))}
            </div>
        </>
    )

}