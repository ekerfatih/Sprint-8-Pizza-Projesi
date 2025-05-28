import './App.css'
import Entry from "./Components/Entry/Entry.jsx";
import Ads from "./Components/Ads/Ads.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import {categories} from "./data/data.js";
import {useEffect, useState} from "react";
import OrderForm from "./Components/Form/OrderForm.jsx";
import error from "eslint-plugin-react/lib/util/error.js";


const initialFormData = {
    pizzaSize: "",
    dough: "",
    ingredients: [],
    orderNote: "",
    quantity: 1,
}

const initialErrors = {
    sizeEmpty: true,
    doughEmpty: true,
}

function App() {

    const [page, setPage] = useState("home")
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState(initialErrors);
    const [sendActive, setSendActive] = useState(false);


    useEffect(() => {
        errors.sizeEmpty = !formData.pizzaSize;
        errors.doughEmpty = !formData.dough;
        setSendActive(checkSendable());
    }, [formData.pizzaSize, formData.dough]);

    const checkSendable = () => {
        return Object.values(errors).every(x => x === false)
    }

    function Ttt() {
        page === "form" ? setPage("home") : setPage("form")
    }

    function onChange(e) {
        const {type, name, value, checked} = e.target;

        setFormData(prev => {
            if (name === "ingredients") {
                const updated = checked ? [...prev.ingredients, value] : prev.ingredients.filter(item => item !== value);
                return {...prev, ingredients: updated};
            }

            if (name === "quantity") {
                const num = Number(value);

                if (num < 1) {
                    const confirmCancel = window.confirm("Siparişinizi iptal etmek ister misiniz?");
                    if (confirmCancel) {
                        setFormData(initialFormData);
                        setPage("home");
                    } else {

                        setFormData(prev => ({...prev, [name]: num}));
                        return;
                    }
                }
            }

            const val = type === "checkbox" ? checked : value;
            return {...prev, [name]: val};
        });
    }

    function handleSubmit(e) {
        if (!checkSendable()) return;
        console.log("x");
    }

    function homePage() {
        setPage("home")
    }

    useEffect(() => {
        console.log(formData)
    }, [formData]);

    const PageSwap = () => {
        switch (page) {
            case "home":
                return <>
                    <Entry categories={categories}/>
                    <Ads categories={categories}/>
                    <Footer/>
                </>
            case "form":
                return <OrderForm onChange={onChange} formData={formData} homePage={homePage} sendActive={sendActive}/>
            default:
                return 0;
        }

    }


    return (
        <>
            {PageSwap()}
            <button onClick={() => Ttt()}>Form</button>
        </>
    )
}

export default App
