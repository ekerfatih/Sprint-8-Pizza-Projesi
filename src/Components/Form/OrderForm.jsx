import './OrderForm.css';


function OrderForm({onChange, formData, homePage, sendActive}) {
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
                            <h2>Boyut Seç</h2>
                            <div>
                                <input checked={pizzaSize === "Küçük Boy"} onChange={onChange} value="Küçük Boy"
                                       type="radio"
                                       name="pizzaSize" id="small"/>
                                <label htmlFor="small">Küçük</label>
                            </div>
                            <div>
                                <input checked={pizzaSize === "Orta Boy"} onChange={onChange} value="Orta Boy"
                                       type="radio"
                                       name="pizzaSize" id="mid"/>
                                <label htmlFor="mid">Orta</label>
                            </div>
                            <div>
                                <input checked={pizzaSize === "Büyük Boy"} onChange={onChange} value="Büyük Boy"
                                       type="radio"
                                       name="pizzaSize" id="big"/>
                                <label htmlFor="big">Büyük</label>
                            </div>

                        </div>
                        <div className="hamurSecim">
                            <div>
                                <h2>Hamur Seç</h2>
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
                    <h2>Ek Malzemeler</h2>
                    <span>En fazla 10 malzeme seçebilirsiniz. 5₺</span>


                    <div className="checkboxes">

                        {/*    <div className="checkbox">*/}
                        {/*        <input*/}
                        {/*            onChange={onChange}*/}
                        {/*            type="checkbox"*/}
                        {/*            name="ingredients"*/}
                        {/*            value="Pepperoni"*/}
                        {/*            checked={ingredients.includes("Pepperoni")}*/}
                        {/*        />*/}
                        {/*        <label htmlFor="Pepperoni">Pepperoni</label>*/}
                        {/*    </div>*/}
                        {/*    <div className="checkbox">*/}
                        {/*        <input*/}
                        {/*            onChange={onChange}*/}
                        {/*            type="checkbox"*/}
                        {/*            name="ingredients"*/}
                        {/*            value="Sosis"*/}
                        {/*            checked={ingredients.includes("Sosis")}*/}
                        {/*        />*/}
                        {/*        <label htmlFor="Sosis">Sosis</label>*/}
                        {/*    </div>*/}
                        {/*    <div className="checkbox">*/}
                        {/*        <input*/}
                        {/*            onChange={onChange}*/}
                        {/*            type="checkbox"*/}
                        {/*            name="ingredients"*/}
                        {/*            value="Kanada Jambonu"*/}
                        {/*            checked={ingredients.includes("Kanada Jambonu")}*/}
                        {/*        />*/}
                        {/*        <label htmlFor="KanadaJambonu">Kanada Jambonu</label>*/}
                        {/*    </div>*/}
                        {/*    <div className="checkbox">*/}
                        {/*        <input*/}
                        {/*            onChange={onChange}*/}
                        {/*            type="checkbox"*/}
                        {/*            name="ingredients"*/}
                        {/*            value="Tavuk Izgara"*/}
                        {/*            checked={ingredients.includes("Tavuk Izgara")}*/}
                        {/*        />*/}
                        {/*        <label htmlFor="TavukIzgara">Tavuk Izgara</label>*/}
                        {/*    </div>*/}
                        {/*    <div className="checkbox">*/}
                        {/*        <input*/}
                        {/*            onChange={onChange}*/}
                        {/*            type="checkbox"*/}
                        {/*            name="ingredients"*/}
                        {/*            value="Soğan"*/}
                        {/*            checked={ingredients.includes("Soğan")}*/}
                        {/*        />*/}
                        {/*        <label htmlFor="Soğan">Soğan</label>*/}
                        {/*    </div>*/}
                        {/*    <div className="checkbox">*/}
                        {/*        <input*/}
                        {/*            onChange={onChange}*/}
                        {/*            type="checkbox"*/}
                        {/*            name="ingredients"*/}
                        {/*            value="Domates"*/}
                        {/*            checked={ingredients.includes("Domates")}*/}
                        {/*        />*/}
                        {/*        <label htmlFor="Domates">Domates</label>*/}
                        {/*    </div>*/}
                        {/*    <div className="checkbox">*/}
                        {/*        <input*/}
                        {/*            onChange={onChange}*/}
                        {/*            type="checkbox"*/}
                        {/*            name="ingredients"*/}
                        {/*            value="Mısır"*/}
                        {/*            checked={ingredients.includes("Mısır")}*/}
                        {/*        />*/}
                        {/*        <label htmlFor="Mısır">Mısır</label>*/}
                        {/*    </div>*/}
                        {/*    <div className="checkbox">*/}
                        {/*        <input*/}
                        {/*            onChange={onChange}*/}
                        {/*            type="checkbox"*/}
                        {/*            name="ingredients"*/}
                        {/*            value="Sucuk"*/}
                        {/*            checked={ingredients.includes("Sucuk")}*/}
                        {/*        />*/}
                        {/*        <label htmlFor="Sucuk">Sucuk</label>*/}
                        {/*    </div>*/}
                        {/*    <div className="checkbox">*/}
                        {/*        <input*/}
                        {/*            onChange={onChange}*/}
                        {/*            type="checkbox"*/}
                        {/*            name="ingredients"*/}
                        {/*            value="Jalepeno"*/}
                        {/*            checked={ingredients.includes("Jalepeno")}*/}
                        {/*        />*/}
                        {/*        <label htmlFor="Jalepeno">Jalepeno</label>*/}
                        {/*    </div>*/}
                        {/*    <div className="checkbox">*/}
                        {/*        <input*/}
                        {/*            onChange={onChange}*/}
                        {/*            type="checkbox"*/}
                        {/*            name="ingredients"*/}
                        {/*            value="Sarımsak"*/}
                        {/*            checked={ingredients.includes("Sarımsak")}*/}
                        {/*        />*/}
                        {/*        <label htmlFor="Sarımsak">Sarımsak</label>*/}
                        {/*    </div>*/}
                        {/*    <div className="checkbox">*/}
                        {/*        <input*/}
                        {/*            onChange={onChange}*/}
                        {/*            type="checkbox"*/}
                        {/*            name="ingredients"*/}
                        {/*            value="Biber"*/}
                        {/*            checked={ingredients.includes("Biber")}*/}
                        {/*        />*/}
                        {/*        <label htmlFor="Biber">Biber</label>*/}
                        {/*    </div>*/}
                        {/*    <div className="checkbox">*/}
                        {/*        <input*/}
                        {/*            onChange={onChange}*/}
                        {/*            type="checkbox"*/}
                        {/*            name="ingredients"*/}
                        {/*            value="Sucuk2"*/}
                        {/*            checked={ingredients.includes("Sucuk2")}*/}
                        {/*        />*/}
                        {/*        <label htmlFor="Sucuk2">Başka Sucuk</label>*/}
                        {/*    </div>*/}
                        {/*    <div className="checkbox">*/}
                        {/*        <input*/}
                        {/*            onChange={onChange}*/}
                        {/*            type="checkbox"*/}
                        {/*            name="ingredients"*/}
                        {/*            value="Ananas"*/}
                        {/*            checked={ingredients.includes("Ananas")}*/}
                        {/*        />*/}
                        {/*        <label htmlFor="Ananas">Ananas</label>*/}
                        {/*    </div>*/}
                        {/*    <div className="checkbox">*/}
                        {/*        <input*/}
                        {/*            type="checkbox"*/}
                        {/*            name="ingredients"*/}
                        {/*            value="Kabak"*/}
                        {/*            checked={formData.ingredients.includes("Kabak")}*/}
                        {/*            onChange={onChange}*/}
                        {/*        />*/}
                        {/*        <label htmlFor="Kabak">Kabak</label>*/}
                        {/*    </div>*/}
                        <br/>
                        <br/>
                        <br/>
                        <br/> <br/>
                        <br/>
                        <br/>
                        <br/>


                        <div className="checkbox">
                            <input type="checkbox"
                                   name="ingredients"
                                   id="Kabak"
                                   value="Kabak"
                                   checked={formData.ingredients.includes("Kabak")}
                                   onChange={onChange}
                            />
                            <label htmlFor="Kabak" className="checkLabel"></label>
                        </div>
                    </div>


                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>


                    <br/>
                    <br/>
                    <br/>
                    <br/>


                    <div className="order-note">
                        <h2>Sipariş Notu</h2>
                        <textarea onChange={onChange} name="orderNote" id="orderNote" rows="3"
                                  placeholder={"Siparişine eklemek istediğin bir not var mı?"}>

                        </textarea>
                    </div>
                    <hr/>
                    <div className="summary">
                        <input onChange={onChange} value={quantity} name="quantity" className="number" type="number"/>
                        <div className="summary-price">
                            <h2>Sipariş Toplamı</h2>
                            <div>
                                <p>Seçimler<span> 25.00₺</span></p>
                                <p>Toplam <span>110.00₺</span></p>
                            </div>
                            <button disabled={!sendActive}>Sipariş ver</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default OrderForm;