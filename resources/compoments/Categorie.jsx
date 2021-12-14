import React from "react";
import Data from '../compoments/data';
import "../compoments/categorie.css";
import { useState } from "react";
export default function Categorie({ clickButtonShop }) {
   

    return (
        <>
            <div className="d-flex container-fluid mt-3 categorie-content">
                <div className="content-liens">
                    <h1 className="categorie-titre">Categories</h1>
                    {Data.liens.map((value) => {
                        return (
    <button onClick={()=>filter} className="text-decoration-none border-0 mb-3  categorie_liens d-block">{value}</button>
    

                        )
                    })}

                </div>
                <div className="content-articles">
                    {
                        Data.produitItems.map((value) => {
                            return (

                                <div key={value.id} className="items_conteneur" >
                                    <div className="content_images mb-2">
                                        <img className="img-fluid" src={value.image} alt={value.name} />
                                    </div>

                                    <h1 className="name_phone">{value.name}</h1>
                                    <p className="name_prix">{value.price} Fcfa</p>
                                    <div className="content_btn">
                                        <button onClick={() => clickButtonShop(value)} className="btn_add">Acheter</button>
                                    </div>

                                </div>


                            )
                        })
                    }
                </div>

            </div>
            <div className=" container-acces container-fluid d-flex justify-content-between bg-dark py-3 mt-5 mb-3 px-5">
                <div className="py-3 ">
                    <h1>Simple</h1>
                </div>
                <div className="py-3 ">
                    <h1>Rapide</h1>
                </div>
                <div className="py-3 ">
                    <h1>Securisée</h1>
                </div>
            </div>
            <div className="container d-flex justify-content-evenly align-items-center m-5">
                <h1>Recevoir Les Derniers <br /> Infos</h1>
                <form className="d-flex">
                    <input type="email" placeholder="email" />
                    <input type="submit" value="Envoyer" />
                </form>
            </div>
        </>

    )
}