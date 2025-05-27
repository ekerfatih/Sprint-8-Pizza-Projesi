import './App.css'
import Entry from "./Components/Entry/Entry.jsx";
import Ads from "./Components/Ads/Ads.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import {categories} from "./data/data.js";
import {useState} from "react";
import OrderForm from "./Components/Form/OrderForm.jsx";

function App() {

    const [page, setPage] = useState("home")

    function Ttt() {
        page === "form" ? setPage("home") : setPage("form")
    }

    const PageSwap = () => {
        switch (page) {
            case "home":
                return <>
                    <Entry categories={categories}/>
                    <Ads categories={categories}/>
                    <Footer/>
                </>
            case "form":
                return <OrderForm/>
            default:
                return 0;
        }

    }


    return (
        <>
            {PageSwap()}
            {console.log(page)};
            <button onClick={() =>Ttt()}>Form</button>
        </>
    )
}

export default App
