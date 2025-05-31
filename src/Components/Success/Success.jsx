import "./Success.css"
import Footer from "../Footer/Footer.jsx";
import {toCamelCase} from "../../HelperMethods.jsx";

function Success({ingredients, price, pizzaSize, dough, orderTime, quantity}) {
    return (
        <>
            <div className="area barlow">
                <div className="middle-area">
                    <img src="images/iteration-1-images/logo.svg" alt=""/>

                    <div className="order-confirm">
                        <span className="yellow-text-italic satisfy">lezzetin yolda</span>
                        <h1 id="cong" className="white roboto">TEBRİKLER!</h1>
                        <h1 id="order" className="white roboto">SİPARİŞİNİZ ALINDI!</h1>
                    </div>

                    <hr/>

                    <div className="white pizza-info">
                        <h2>Position Absolute Acı Pizza {ingredients.length > 1 && `x${quantity}`}</h2>
                        <div className="pizza-summary">
                            <p>Boyut : <span>{toCamelCase(pizzaSize)}</span></p>
                            <p>Hamur : <span>{toCamelCase(dough)} Hamur</span></p>
                            <p>Ek Malzemeler : <span>{ingredients.join(", ")}</span></p>
                            <p>Sipariş Zamanı : <span>{orderTime}</span></p>
                        </div>
                    </div>
                    <div className="white order-total">
                        <h3>Sipariş Toplamı</h3>
                        <p>Seçimler <span>{ingredients.length * 5}₺</span></p>
                        <p>Toplam <span>{price}₺</span></p>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Success;

