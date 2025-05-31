import './App.css'
import Entry from "./Components/Entry/Entry.jsx";
import Ads from "./Components/Ads/Ads.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import {categories} from "./data/data.js";
import {useEffect, useState} from "react";
import OrderForm from "./Components/Form/OrderForm.jsx";
import Success from "./Components/Success/Success.jsx";
import axios from "axios";
import {ToastContainer, toast} from 'react-toastify';


const initialFormData = {
    pizzaSize: "",
    dough: "",
    ingredients: [],
    orderNote: "",
    quantity: 1,
    price: function () {
        return this.quantity * 85.5 + this.ingredients.length * 5;
    },
    orderTime: ""
}

const initialErrors = {
    sizeEmpty: true,
    doughEmpty: true,
    ingredientsLessThanFour: true,
}

function App() {

    //Sayfanın başına dönmesi için
    const handleScroll = () => {
        const section = document.querySelector('body');
        section?.scrollIntoView({behavior: 'smooth'});
    };

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
                    return prev;
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
    const [isSubmitted, setIsSubmitted] = useState(false)

    //Errorları tespit etmek için boyut, hamur ve malzemeler değiştiğinde
    useEffect(() => {
        setErrors(prev => {
            const n = {
                ...prev,
                sizeEmpty: !formData.pizzaSize,
                doughEmpty: !formData.dough,
                ingredientsLessThanFour: formData.ingredients.length < 4
            };
            return n;
        });
    }, [formData.pizzaSize, formData.dough, formData.ingredients]);
    const checkSendable = () => {
        return Object.values(errors).every(x => x === false)
    }

    function openForm() {
        setIsSubmitted(false);
        setPage("form");
    }

    function onChange(e) {
        const {type, name, value, checked} = e.target;

        if (name === "quantity") {
            const num = Number(value);

            if (num < 1) {
                const confirmCancel = window.confirm("Siparişinizi iptal etmek ister misiniz?");
                if (confirmCancel) {
                    setPage("home");
                    setFormData(initialFormData);
                    setErrors(initialErrors);
                    return;
                } else {
                    setFormData(prev => ({...prev, quantity: 1}));
                    return;
                }
            }

            setFormData(prev => ({...prev, quantity: num}));
            return;
        }

        if (name === "ingredients") {
            setFormData(prev => {
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
            });
            return;
        }

        const val = type === "checkbox" ? checked : value;
        setFormData(prev => ({...prev, [name]: val}));
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!checkSendable()) {
            setIsSubmitted(true);
            return;
        }
        handleAxiosPostRequest();


    }

    async function handleAxiosPostRequest() {
        const toastId = toast.loading("Sipariş işleniyor..."); // 🔄 İşleniyor mesajı

        await axios.post(
            "https://reqres.in/api/pizza",
            formData,
            {
                headers: {
                    "x-api-key": "reqres-free-v1"
                }
            }
        )
            .then(res => {
                console.log(res.data);

                const date = new Date(res.data.createdAt);

                const options = {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false,
                };
                const formatted = date.toLocaleString('tr-TR', options);
                setFormData({...formData, orderTime: formatted});
                toast.update(toastId, {
                    render: "Sipariş başarıyla gönderildi!",
                    type: "success",
                    isLoading: false,
                    autoClose: 3000
                });

                setTimeout(() => {
                    setPage("Success");
                }, 1000);


            })
            .catch(err => {
                console.log(err);
                toast.update(toastId, {
                    render: "Sipariş gönderilirken bir hata oluştu. Ana sayfaya yönlendileriz. Lütfen tekrar deneyiniz.",
                    type: "error",
                    isLoading: false,
                    autoClose: 3000
                });
                setTimeout(() => {
                    setPage("home");
                }, 2000);
                setFormData(initialFormData);
            })

    }

    function homePage() {
        setPage("home")
    }

    const PageSwap = () => {
        switch (page) {
            case "home":
                handleScroll();
                return <>
                    <Entry openForm={openForm} categories={categories}/>
                    <Ads openForm={openForm} categories={categories}/>
                    <Footer/>
                </>
            case "form":
                return (
                    <>
                        <OrderForm onChange={onChange} formData={formData} errors={errors} homePage={homePage}
                                   increment={increment} decrement={decrement} onSubmit={handleSubmit}
                                   isSubmitted={isSubmitted} checkSendable={checkSendable()}/>
                    </>
                )
            case "Success":
                handleScroll();
                return (
                    <>
                        <Success ingredients={formData.ingredients} price={formData.price()}
                                 pizzaSize={formData.pizzaSize} dough={formData.dough} orderTime={formData.orderTime} quantity={formData.quantity}/>
                    </>
                )
            default:
                return 0;
        }

    }


    return (
        <>
            {PageSwap()}
            <ToastContainer/>
        </>
    )
}

export default App



