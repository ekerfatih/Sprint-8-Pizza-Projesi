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

    function increment() {
        setFormData(prev => {
            const newQuantity = prev.quantity + 1;
            return {...prev, quantity: newQuantity};
        });
    }

    function decrement() {
        setFormData(prev => {
            if (prev.quantity <= 1) {
                const confirmCancel = window.confirm("Siparişinizi iptal etmek ister misiniz?");
                if (confirmCancel) {
                    setFormData(initialFormData);
                    setPage("home");
                    return prev; // veya initialFormData, yukarıda zaten çağrılıyor
                } else {
                    return prev;
                }
            }
            return {...prev, quantity: prev.quantity - 1};
        });
    }


    const [page, setPage] = useState("home")
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState(initialErrors);
    const [sendActive, setSendActive] = useState(false);


    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setErrors(prev => {
            return {...prev, sizeEmpty: !formData.pizzaSize, doughEmpty: !formData.pizzaSize};
        });
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
                if (checked) {
                    if (prev.ingredients.length < 10) {
                        return {...prev, ingredients: [...prev.ingredients, value]};
                    } else {
                        return prev;
                    }
                } else {
                    const updated = prev.ingredients.filter(item => item !== value);
                    return {...prev, ingredients: updated};
                }
            }

            if (name === "quantity") {
                const num = Number(value);

                if (num < 1) {
                    const confirmCancel = window.confirm("Siparişinizi iptal etmek ister misiniz?");
                    if (confirmCancel) {
                        setFormData(initialFormData);
                        setPage("home");
                        return prev;
                    } else {
                        return {...prev, quantity: 1};
                    }
                }

                return {...prev, quantity: num};
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
                return <OrderForm onChange={onChange} formData={formData} homePage={homePage} sendActive={sendActive}
                                  increment={increment} decrement={decrement}/>
            default:
                return 0;
        }

    }


    return (
        <>
            {PageSwap()}
            {console.log(formData)}
            <button onClick={() => Ttt()}>Form</button>
        </>
    )
}

export default App
