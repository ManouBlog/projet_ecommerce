import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart,AiOutlineMenu } from 'react-icons/Ai';
import { BsPersonFill, BsSearch } from 'react-icons/Bs';

function Header({ cartItems}) {
    return (
        <div>
            <p className="lien">Veuillez nous contactez au:+225 05 45 74 97 41</p>
            <div className="liens">
                <h1 className="display-8">MYPHONE.</h1>

                <div className="mesLiens">

                    <div>
                        <Link to="/">Accueil</Link>
                        <Link to="/marques">Marques</Link>
                        <Link to="/nous">Nous</Link>
                        <Link to="/contacts">Conatcts</Link>
                    </div>

                    <div className="content_input">
                        <input className="mx-2" type="search" name="recherche" id="search" placeholder="Recherche" />
                        <i className="search">< BsSearch /></i>
                    </div>

                    <div className="icones ">
                    <Link to="/inscription" className="fs-4">< BsPersonFill /></Link>
                    <Link to="/panier" className="fs-4" >< AiOutlineShoppingCart /></Link>
                    <span className="badge bg-dark">
                        {cartItems.length === 0 ? "" : cartItems.length}
                    </span>
                    </div>
                
                </div>
                 <div className="menuHamburger">
                   <a href="#/" className="fs-3 text-decoration-none text-dark" >< AiOutlineMenu /></a>
                  </div>
                
            </div>

        </div>);
}
export default Header;