import "./Success.css"

function Success({ingredients, price, pizzaSize, dough}) {
    return (
        <div className="area barlow">
            <div className="middle-area">
                <img src="images/iteration-1-images/logo.svg" alt=""/>

                <div className="order-confirm">
                    <span className="yellow-text-italic satisfy">lezzetin yolda</span>
                    <h1 id="order" className="white roboto">Sipariş alındı</h1>
                </div>

                <hr/>

                <div className="white pizza-info">
                    <h2>Position Absolute Acı Pizza</h2>
                    <div className="pizza-summary">
                        <p>Boyut : <span>{pizzaSize}</span></p>
                        <p>Hamur : <span>{dough}</span></p>
                        <p>Ek Malzemeler : <span>{ingredients.join(", ")}</span></p>
                    </div>
                </div>
                <div className="white order-total">
                    <h3>Sipariş Toplamı</h3>
                    <p>Seçimler <span>{ingredients.length * 5}₺</span></p>
                    <p>Toplam <span>{price}₺</span></p>
                </div>

            </div>
        </div>
    )
}

export default Success;