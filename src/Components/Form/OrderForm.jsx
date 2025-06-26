import './OrderForm.css';
import Check from "./Check.jsx";
import Footer from "../Footer/Footer.jsx";

const ingredientsList = ["Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan", "Domates", "Mısır", "Sucuk", "Jalepeno", "Sarımsak", "Biber", "Karides", "Ananas", "Kabak"]


function OrderForm({onChange, formData, errors, homePage, increment, decrement, onSubmit, isSubmitted, checkSendable}) {
    const {pizzaSize, ingredients, quantity} = formData;

    const handleScroll = () => {
        const section = document.querySelector('.form-container');
        section?.scrollIntoView({behavior: 'smooth'});
    };


    return (
        <>
            <section className="orderFormSection barlow">
                <div className="header">
                    <img src="/images/iteration-1-images/logo.svg" alt=""/>
                </div>
                <div className="grayArea">
                    <div className="grayContent">
                        <div className="image">
                            <img src="/images/iteration-2-images/pictures/form-banner.png" alt=""/>
                        </div>

                        <div className="ugh">
                            <div className="header-text barlow">
                                <a onClick={homePage}>Anasayfa-</a><strong>Sipariş Oluştur</strong>
                            </div>
                        </div>

                        <div className="pizza-text barlow">
                            <h2>Position Absolute Acı Pizza</h2>
                            <div className="price-data barlow">
                                <span><strong
                                    className="price">85.50₺</strong></span><span>4.9</span><span>(200)</span>
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

                <form onSubmit={onSubmit}>
                    <div className="form-content">

                        <div className="form-container">

                            <div className="pizza-size">
                                <div className="size">
                                    <h3>Boyut Seç<span className="red"> *</span></h3>
                                    <div className="sizeContainer">
                                        <div className="radioDiv">
                                            <input checked={pizzaSize === "Küçük Boy"} onChange={onChange}
                                                   value="Küçük Boy"
                                                   type="radio"
                                                   name="pizzaSize" id="small"

                                            />
                                            <label className="lblRadio" htmlFor="small">S</label>
                                            <label className="lblMobile" htmlFor="small">Küçük</label>
                                        </div>
                                        <div className="radioDiv">
                                            <input checked={pizzaSize === "Orta Boy"} onChange={onChange}
                                                   value="Orta Boy"
                                                   type="radio"
                                                   name="pizzaSize" id="mid"/>
                                            <label className="lblRadio" htmlFor="mid">M</label>
                                            <label className="lblMobile" htmlFor="mid">Orta</label>
                                        </div>
                                        <div className="radioDiv">
                                            <input checked={pizzaSize === "Büyük Boy"} onChange={onChange}
                                                   value="Büyük Boy"
                                                   type="radio"
                                                   name="pizzaSize" id="big"/>
                                            <label className="lblRadio" htmlFor="big">L</label>
                                            <label className="lblMobile" htmlFor="big">Büyük</label>
                                        </div>
                                    </div>
                                    {(errors.sizeEmpty && isSubmitted) &&
                                        <p className="error">Lütfen Boyut Seçimi yapınız</p>}
                                </div>
                                <div className="hamurSecim">
                                    <div>
                                        <h3>Hamur Seç<span className="red"> *</span></h3>
                                        <select
                                            onChange={onChange}
                                            name="dough"
                                            aria-label="Lütfen hamur seçiminizi yapın"
                                            value={formData.dough}
                                        >
                                            <option value="" disabled>Hamur Kalınlığı</option>
                                            <option value="İnce">İnce</option>
                                            <option value="Normal">Normal</option>
                                            <option value="kalın">Kalın</option>
                                        </select>
                                        {(errors.doughEmpty && isSubmitted) &&
                                            <p className="error">Lütfen Kalınlık Seçimi yapınız</p>}
                                    </div>
                                </div>
                            </div>

                            <h3 id="ekMalzemeler">Ek Malzemeler</h3>
                            <span>En fazla 10 malzeme seçebilirsiniz. 5₺</span>
                            {(errors.ingredientsLessThanFour && isSubmitted) &&
                                <p className="error">4 üründen fazla seçmelisiniz</p>}
                            <div className="checkboxes">
                                {ingredientsList.map((item, index) => {
                                    return <Check onChange={onChange} ingredients={ingredients} ingredient={item}
                                                  key={index}/>
                                })}
                            </div>

                            <div className="order-note">
                                <h2>Sipariş Notu</h2>
                                <textarea onChange={onChange} name="orderNote" id="orderNote" rows="3"
                                          value={formData.orderNote}
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

                                <div className="topSummary">
                                    <h3>Sipariş Toplamı</h3>
                                    <div>
                                        <p>Seçimler<span> {formData.quantity*(ingredients.length * 5)}₺</span></p>
                                        <p>Toplam <span>{formData.quantity * (85.50 + ingredients.length * 5)}₺</span></p>
                                    </div>
                                </div>

                                <button onClick={() => {
                                    !checkSendable && handleScroll();
                                }} className="order-button">Sipariş ver
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
            <Footer/>
        </>
    )
}

export default OrderForm;