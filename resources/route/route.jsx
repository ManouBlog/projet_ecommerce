import React, { Fragment } from 'react';
import Categorie from "../compoments/Categorie.jsx";
import Panier from '../compoments/panier/panier.jsx';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Inscription from '../compoments/inscription.jsx';

export default function MyRoutes({ cartItems, clickButtonShop, clickButtonShopRemove, deleteProduit }) {


    return (

        <div>
            <Switch>
                <Route path="/" exact>
                    <Categorie clickButtonShop={clickButtonShop} />
                </Route>
                <Route path="/panier" >
                    <Panier deleteProduit={deleteProduit} cartItems={cartItems} clickButtonShop={clickButtonShop} clickButtonShopRemove={clickButtonShopRemove} />
                </Route>
                <Route path="/inscription" >
                    <Inscription />
                </Route>
            </Switch>
        </div >


    )
}
