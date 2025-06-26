function Billboard({openForm}) {
    return (
        <div id="ads-wrapper">
            <div id="special-ad" className="pos">
                <img src="/images/iteration-2-images/cta/kart-1.png" alt="" className="card"/>
                <h1 className="qua">Özel<br/> Lezzetus</h1>
                <span className="barlow">Position:Absolute Acı Burger</span>
                <button onClick={openForm} className="order barlow full">Sipariş Ver</button>
            </div>
            <div className="offers">
                <div className="pos">
                    <img src="/images/iteration-2-images/cta/kart-2.png" alt="" className="card"/>
                    <h2 className="roboto" style={{color: "white"}}>Hackathlon<br/> Burger Menu</h2>
                    <button onClick={openForm} className="order barlow half">Sipariş Ver</button>
                </div>
                <div className="pos">
                    <img src="/images/iteration-2-images/cta/kart-3.png" alt="" className="card"/>
                    <h2 className="roboto"><span style={{color: "red"}}>Çooooook</span> hızlı<br/> npm gibi kurye
                    </h2>
                    <button onClick={openForm} className="order barlow half">Sipariş Ver</button>
                </div>
            </div>
        </div>
    )
}

export default Billboard;