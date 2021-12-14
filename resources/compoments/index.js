import React, { useState } from "react";
import Header from "../compoments/header.jsx";
import MyRoutes from "../route/route.jsx";
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from "./footer.jsx";
function App() {
    const [cartItems, setcartItems] = useState([]);
    const clickButtonShop = (product) => {
        const productExist = cartItems.find((item) => item.id === product.id);
        if (productExist) {
            setcartItems(
                cartItems.map((item) => item.id === product.id ? { ...productExist, quantity: productExist.quantity + 1 } : item)
            )
        } else {
            setcartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };
    const clickButtonShopRemove = (product) => {
        const productExist = cartItems.find((item) => item.id === product.id);
        if (productExist.quantity === 1) {
            setcartItems(cartItems.filter((item) => item.id !== product.id))
        } else {
            setcartItems(
                cartItems.map((item) => item.id === product.id ? { ...productExist, quantity: productExist.quantity - 1 } : item)
            )
        }
    };

    const deleteProduit = (product) => {

        setcartItems(cartItems.filter((value) => product.id !== value.id));
    };

    return (
        <div>
            <Router>
                <Header cartItems={cartItems} />
                <MyRoutes profil="pierre" deleteProduit={deleteProduit} clickButtonShopRemove={clickButtonShopRemove} cartItems={cartItems} clickButtonShop={clickButtonShop} />
                <Footer />
            </Router>
        </div>
    );
}
export default App;