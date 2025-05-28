import './OrderForm.css';
import Check from "./Check.jsx";
import Footer from "../Footer/Footer.jsx";

const ingredientsList = ["Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan", "Domates", "Mısır", "Sucuk", "Jalepeno", "Sarımsak", "Biber", "Karides", "Ananas", "Kabak"]


function OrderForm({onChange, formData, homePage, sendActive, increment, decrement}) {
    const {pizzaSize, ingredients, quantity} = formData;
    return (
        <section className="orderFormSection barlow">
            <div className="header">
                <img src="images/iteration-1-images/logo.svg" alt=""/>
            </div>
            <div className="grayArea">
                <div className="grayContent">
                    <div className="image">
                        <img src="images/iteration-2-images/pictures/form-banner.png" alt=""/>
                    </div>

                    <div className="ugh">
                        <div className="header-text barlow">
                            <a onClick={homePage}>Anasayfa-</a><strong>Sipariş Oluştur</strong>
                        </div>
                    </div>

                    <div className="pizza-text barlow">
                        <h2>Position Absolute Acı Pizza</h2>
                        <div className="price-data barlow">
                            <span><strong className="price">Price</strong></span><span>Score</span><span>Rating</span>
                        </div>
                        <p>
                            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam
                            sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle
                            kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek
                            sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı
                            hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya
                            bazen pizzetta denir.
                        </p>
                    </div>

                </div>
            </div>


            <div className="form-content">
                <div className="form-container">

                    <div className="pizza-size">
                        <div className="size">
                            <h3>Boyut Seç<span className="red"> *</span></h3>
                            <div className="sizeContainer">
                                <div className="radioDiv">
                                    <input checked={pizzaSize === "Küçük Boy"} onChange={onChange} value="Küçük Boy"
                                           type="radio"
                                           name="pizzaSize" id="small"/>
                                    <label className="lblRadio" htmlFor="small">S</label>
                                </div>
                                <div className="radioDiv">
                                    <input checked={pizzaSize === "Orta Boy"} onChange={onChange} value="Orta Boy"
                                           type="radio"
                                           name="pizzaSize" id="mid"/>
                                    <label htmlFor="mid">M</label>
                                </div>
                                <div className="radioDiv">
                                    <input checked={pizzaSize === "Büyük Boy"} onChange={onChange} value="Büyük Boy"
                                           type="radio"
                                           name="pizzaSize" id="big"/>
                                    <label htmlFor="big">L</label>
                                </div>
                            </div>

                        </div>
                        <div className="hamurSecim">
                            <div>
                                <h3>Hamur Seç<span className="red"> *</span></h3>
                                <select
                                    onChange={onChange}
                                    name="dough"
                                    aria-label="Lütfen hamur seçiminizi yapın"
                                    defaultValue=""
                                >
                                    <option value="" disabled>Hamur Kalınlığı</option>
                                    <option value="İnce">İnce</option>
                                    <option value="Normal">Normal</option>
                                    <option value="kalın">Kalın</option>
                                </select>

                            </div>
                        </div>
                    </div>
                    <h3 id="ekMalzemeler">Ek Malzemeler</h3>
                    <span>En fazla 10 malzeme seçebilirsiniz. 5₺</span>
                    <div className="checkboxes">
                        {ingredientsList.map((item, index) => {
                            return <Check onChange={onChange} ingredients={ingredients} ingredient={item} key={index}/>
                        })}
                    </div>

                    <div className="order-note">
                        <h2>Sipariş Notu</h2>
                        <textarea onChange={onChange} name="orderNote" id="orderNote" rows="3"
                                  placeholder={"Siparişine eklemek istediğin bir not var mı?"}>

                        </textarea>
                    </div>
                    <hr/>
                    <div className="summary">
                        <div className="numberInc">
                            <span onClick={decrement}>-</span>
                            <input onChange={onChange} value={quantity} name="quantity" className="number"
                                   type="number"/>
                            <span onClick={increment}>+</span>
                        </div>
                        <div className="summary-price">
                            <div className="topSummary">
                                <h3>Sipariş Toplamı</h3>
                                <div>
                                    <p>Seçimler<span> 25.00₺</span></p>
                                    <p>Toplam <span>110.00₺</span></p>
                                </div>
                            </div>
                            <button disabled={!sendActive}>Sipariş ver</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </section>
    )
}

export default OrderForm;