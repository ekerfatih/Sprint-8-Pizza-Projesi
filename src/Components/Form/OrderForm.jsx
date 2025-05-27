import './OrderForm.css';

function OrderForm() {
    return (
        <section>
            <div className="header">
                <div className="image">
                    <img src="images/iteration-1-images/logo.svg" alt=""/>
                </div>
                <div className="ugh">
                    <div className="header-text">
                        <span>Anasayfa-<strong>Sipariş Oluştur</strong></span>
                    </div>
                </div>
            </div>
            <div className="form-content">
                <div className="form-container">
                    <div className="pizza-text">
                        <h2>Position Absolute Acı Pizza</h2>
                        <div className="price-data">
                            <span><strong>Price</strong></span><span>Score</span><span>Rating</span>
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
                    <div className="pizza-size">
                        <div className="size">
                            <h2>Boyut Seç</h2>
                            <div>
                                <input type="radio" name="size" id="small"/>
                                <label htmlFor="small">Küçük</label>
                            </div>
                            <div>
                                <input type="radio" name="size" id="mid"/>
                                <label htmlFor="mid">Orta</label>
                            </div>
                            <div>
                                <input type="radio" name="size" id="big"/>
                                <label htmlFor="big">Büyük</label>
                            </div>

                        </div>
                        <div className="dough">
                            <div>
                                <h2>Hamur Seç</h2>
                                <select
                                    id="hamurSecim"
                                    aria-label="Lütfen hamur seçiminizi yapın"
                                    defaultValue=""
                                >
                                    <option value="" disabled>Hamur Kalınlığı</option>
                                    <option value="ince">İnce</option>
                                    <option value="normal">Normal</option>
                                    <option value="kalın">Kalın</option>
                                </select>

                            </div>
                        </div>
                    </div>
                    <h2>Ek Malzemeler</h2>
                    <span>En fazla 10 malzeme seçebilirsiniz. 5₺</span>
                    <div className="checkboxes">
                        <div className="checkbox">
                            <input type="checkbox" value="" id="Pepperoni"/>
                            <label htmlFor="Pepperoni">Pepperoni</label>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" value="" id="Sosis"/>
                            <label htmlFor="Sosis">Sosis</label>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" value="" id="KanadaJambonu"/>
                            <label htmlFor="KanadaJambonu">Kanada Jambonu</label>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" value="" id="TavukIzgara"/>
                            <label htmlFor="TavukIzgara">Tavuk Izgara</label>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" value="" id="Soğan"/>
                            <label htmlFor="Soğan">Soğan</label>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" value="" id="Domates"/>
                            <label htmlFor="Domates">Domates</label>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" value="" id="Mısır"/>
                            <label htmlFor="Mısır">Mısır</label>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" value="" id="Sucuk"/>
                            <label htmlFor="Sucuk">Sucuk</label>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" value="" id="Jalepeno"/>
                            <label htmlFor="Jalepeno">Jalepeno</label>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" value="" id="Sarımsak"/>
                            <label htmlFor="Sarımsak">Sarımsak</label>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" value="" id="Biber"/>
                            <label htmlFor="Biber">Biber</label>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" value="" id="Sucuk2"/>
                            <label htmlFor="Sucuk2">Başka Sucuk</label>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" value="" id="Ananas"/>
                            <label htmlFor="Ananas">Ananas</label>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" value="" id="Kabak"/>
                            <label htmlFor="Kabak">Kabak</label>
                        </div>

                    </div>
                    <div className="order-note">
                        <h2>Sipariş Notu</h2>
                        <textarea name="" id="" rows="3" placeholder={"Siparişine eklemek istediğin bir not var mı?"}>

                        </textarea>
                    </div>
                    <hr/>
                    <div className="summary">
                        <input className="number" type="number"/>
                        <div className="summary-price">
                            <h2>Sipariş Toplamı</h2>
                            <div>
                                <p>Seçimler<span> 25.00₺</span></p>
                                <p>Toplam <span>110.00₺</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default OrderForm;