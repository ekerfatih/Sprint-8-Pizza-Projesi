import Product from "./Product.jsx";
import {products} from '../../data/products.js';

function Products() {
    return (
        <div className="products">
            {
                products.map(product => {
                    return <Product key={product.id} {...product}/>
                })
            }
        </div>
    )
}

export default Products;