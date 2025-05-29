import Categories from "../Categories/Categories.jsx";

const Entry = ({categories,openForm}) => {
    return (
        <section className="main-entry-page">
            <div className="entry-section">
                <div className="content">
                    <img id="logo" src="../images/iteration-1-images/logo.svg" alt=""/>
                    <i className="yellow-text-italic satisfy">fırsatı kaçırma</i>
                    <h1 className="slogan roboto">KOD ACIKTIRIR PIZZA, DOYURUR</h1>
                    <button onClick={openForm} type="button" className="btn barlow">ACIKTIM</button>
                </div>
            </div>
            <Categories categories={categories}/>
        </section>
    )
}

export default Entry;