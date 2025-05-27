function Product({src, content, price, score, rating}) {
    return (
        <div className="product-card">
            <div className="product-img">
                <img src={src} alt={content}/>
            </div>
            <h3>{content}</h3>
            <p className="product-detail">
                <span className="roboto detail">{rating}</span><span
                className="roboto detail">({score})</span> <span
                className="barlow price">{price}₺</span></p>
        </div>
    )
}

export default Product;