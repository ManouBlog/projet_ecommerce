import React from 'react';
import "./panier.css";
import { Link } from 'react-router-dom';

export default function Panier({ cartItems, clickButtonShop, clickButtonShopRemove, deleteProduit }) {

    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);
    return (
        <div>
            <h1 className="panier-titre text-center ">Mon Panier</h1>
            {
                cartItems.length === 0 && (<div className="text-center fw-bold">pas de commandes</div>)
            }
            <div>
                {
                    cartItems.map((item) => (
                        <div key={item.id} className="content_cart" >
                            <div className="content_img_cart">
                                <img className="img-fluid" src={item.image} alt={item.name} />
                            </div>

                            <h1 className="cart_name">{item.name}</h1>
                            <h3 className="cart_price">{item.price}</h3>
                            <div>
                                <button className="addPlus" onClick={() => clickButtonShop(item)}>+</button>
                                <button className="Remove" onClick={() => clickButtonShopRemove(item)}>-</button>

                            </div>
                            <div className="quantite_prix">
                                {item.quantity}*{item.price}Fcfa
                            </div>
                            <div>
                                <button className="delete_produit" onClick={() => deleteProduit(item)}>X</button>
                            </div>

                        </div>

                    ))
                }
            </div>
            <div className="total_quantite">
                <span className="produit_total">Total Quantite : </span>
                <span className="quantite"> produit(s)</span>
            </div>

            <div className="total_prix">
                <span className="produit_total">Total Produit : </span>
                <span className="price">{totalPrice}Fcfa</span>
            </div>
            <div className="d-flex btn-continue_commander justify-content-between align-items-center">
                <button className="bg-dark" >
                    <Link className="text-decoration-none" to="/">Continue le Shopping</Link>
                </button>
                <button className="bg-warning" >
                    <Link className="text-decoration-none" to="/">Commander</Link>
                </button>
            </div>

        </div>
    )
}
