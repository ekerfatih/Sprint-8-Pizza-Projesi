import Products from "../Products/Products.jsx";
import Selects from "../Select/Selects.jsx";
import Billboard from "./Billboard.jsx";

function Ads({categories,openForm}) {
    return (
        <section className="ads-section">
            <Billboard openForm={openForm}/>
            <Selects categories={categories}/>
            <Products/>
        </section>
    )
}

export default Ads;