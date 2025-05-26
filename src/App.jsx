import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
      <section className="main-entry-page">
        <div className="entry-section">
          <div className="content">
            <img id="logo" src="../images/iteration-1-images/logo.svg" alt="" />
            <i className="yellow-text-italic satisfy">fırsatı kaçırma</i>
            <h1 className="slogan roboto">KOD ACIKTIRIR PIZZA, DOYURUR</h1>
            <button type="button" href="www.google.com" className="btn barlow">ACIKTIM</button>
          </div>
        </div>
        <div className="categories">
          <div className="category">
            <img src="../images/iteration-2-images/icons/1.svg" alt="" />
            <a className="roboto" href="">YENİ! Kore</a>
          </div>
          <div className="category">
            <img src="../images/iteration-2-images/icons/2.svg" alt="" /> <a className="roboto" href="">Pizza</a>
          </div>
          <div className="category">
            <img src="../images/iteration-2-images/icons/3.svg" alt="" /> <a className="roboto" href="">Burger</a>
          </div>
          <div className="category">
            <img src="../images/iteration-2-images/icons/4.svg" alt="" /> <a className="roboto" href="">Kızartmalar</a>
          </div>
          <div className="category">
            <img src="../images/iteration-2-images/icons/5.svg" alt="" /> <a className="roboto" href="">Fast food</a>
          </div>
          <div className="category">
            <img src="../images/iteration-2-images/icons/6.svg" alt="" /> <a className="roboto" href="">Gazlı İçecek</a>
          </div>

        </div>
      </section>
      <section className="ads-section">
        <div className="ads-wrapper">
          <div id="special-ad" className="pos">
            <img src="./public/assets/iteration-2/cta/kart-1.png" alt="" className="card" />
            <h1 className="qua">Özel<br /> Lezzetus</h1>
            <span className="barlow">Position:Absolute Acı Burger</span>
            <button className="order barlow full">Sipariş Ver</button>
          </div>
          <div className="offers">
            <div className="pos">
              <img src="./public/assets/iteration-2/cta/kart-2.png" alt="" className="card" />
              <h2 className="roboto" style={{ color: "white" }}>Hackathlon<br /> Burger Menu</h2>
              <button className="order barlow half">Sipariş Ver</button>
            </div>
            <div className="pos">
              <img src="./public/assets/iteration-2/cta/kart-3.png" alt="" className="card" />
              <h2 className="roboto"><span style={{ color: "red" }}>Çooooook</span> hızlı<br /> npm gibi kurye</h2>
              <button className="order barlow half">Sipariş Ver</button>
            </div>
          </div>
        </div>
        <div className="select">
          <h2 className="satisfy">En çok paketlenen menüler</h2>
          <h1 className="roboto">Acıktıran Kodlara Doyuran Lezzetler</h1>
          <div className="radio-button-select">
            <div className="select-casing">
              <img src="public\assets\iteration-2\icons\1.svg" alt="" /> <a className="soft-button barlow" href="">Ramen</a>
            </div>
            <div className="select-casing">
              <img src="public\assets\iteration-2\icons\2.svg" alt="" /> <a className="soft-button barlow" href="">Pizza</a>
            </div>
            <div className="select-casing">
              <img src="public\assets\iteration-2\icons\3.svg" alt="" /> <a className="soft-button barlow" href="">Burger</a>
            </div>
            <div className="select-casing">
              <img src="public\assets\iteration-2\icons\4.svg" alt="" /> <a className="soft-button barlow" href="">French
                fries</a>
            </div>
            <div className="select-casing">
              <img src="public\assets\iteration-2\icons\5.svg" alt="" /> <a className="soft-button barlow" href="">Fast food</a>
            </div>
            <div className="select-casing">
              <img src="public\assets\iteration-2\icons\6.svg" alt="" /> <a className="soft-button barlow" href="">Soft drinks</a>
            </div>
          </div>
        </div>
        <div className="products">
          <div className="product-card">
            <div className="product-img">
              <img src="public\assets\iteration-2\pictures\food-1.png" alt="" />
            </div>
            <h3>Terminal Pizza</h3>
            <p className="product-detail"><span>4.9</span><span>(200)</span> <span>60₺</span></p>
          </div>

          <div className="product-card">
            <div className="product-img">
              <img src="public\assets\iteration-2\pictures\food-2.png" alt="" />
            </div>
            <h3>Position Absolute Acı Pizza</h3>
            <p className="product-detail"><span>4.9</span><span>(200)</span> <span>60₺</span></p>
          </div>

          <div className="product-card">
            <div className="product-img">
              <img src="public\assets\iteration-2\pictures\food-3.png" alt="" />
            </div>
            <h3>useEffect Tavuklu Burger</h3>
            <p className="product-detail"><span className="roboto detail">4.9</span><span className="roboto detail">(200)</span> <span
              className="barlow price">60₺</span></p>
          </div>
        </div>
      </section >

      <footer>
        <div className="footer-content">
          <div id="footer-align">
            <div className="address">
              <img id="footer-img" src="./public/assets/iteration-2/footer/logo-footer.svg" alt="" />
              <div id="address-content">
                <div className="address-info">
                  <img src="./public/assets/iteration-2/footer/icons/icon-1.png" alt="" />
                  <span>341 Londonderry Road, </span>
                  <p style={{ textIndent: " 2.5rem" }}>İstanbul Türkiye</p>
                </div>

                <div className="address-info">
                  <img src="./public/assets/iteration-2/footer/icons/icon-2.png" alt="" />
                  <span>aciktim@teknolojikyemekler.com</span>
                </div>

                <div className="address-info">
                  <img src="./public/assets/iteration-2/footer/icons/icon-3.png" alt="" />
                  <span>+90 216 123 45 67</span>
                </div>
              </div>
            </div>
            <div className="hot-menu">
              <h3>Hot Menu</h3>
              <h4>Terminal Pizza</h4>
              <h4>5 Kişilik Hackathlon Pizza</h4>
              <h4>useEffect Tavuklu Pizza</h4>
              <h4>Beyaz Console Frosty</h4>
              <h4>Testler Geçti Mutlu Burger</h4>
              <h4>Position Absolute Acı Burger</h4>
            </div>
            <div className="insta-menu">
              <h3>Instagram</h3>
              <div className="insta-photos">
                <img src="public\assets\iteration-2\footer\insta\li-0.png" alt="" />
                <img src="public\assets\iteration-2\footer\insta\li-1.png" alt="" />
                <img src="public\assets\iteration-2\footer\insta\li-2.png" alt="" />
                <img src="public\assets\iteration-2\footer\insta\li-3.png" alt="" />
                <img src="public\assets\iteration-2\footer\insta\li-4.png" alt="" />
                <img src="public\assets\iteration-2\footer\insta\li-5.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="gap">

        </div>
        <div className="footer-end-data">
          <span>©2023 Teknolojik Yemekler.</span>
          <i className="fa-brands fa-twitter"></i>
        </div>
      </footer >





    </>
  )
}

export default App
