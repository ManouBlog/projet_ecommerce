import React from 'react';
import Data from '../compoments/data';
import './articles.css';
export default function Articles() {

    return (
        <div className="content-articles">
            {
                Data.produitItems.map((value) => {
                    return (

                        <div key={value.id} className="items_conteneur" >
                            <div className="content_images mb-2">
                                <img src={value.image} alt={value.name} />
                            </div>

                            <h1 className="name_phone">{value.name}</h1>
                            <p className="name_prix">{value.price} Fcfa</p>
                            <div className="content_btn">
                            <button className="btn_add">Acheter</button>
                            </div>
                            
                        </div>


                    )
                })
            }
        </div>
        
    )
}
