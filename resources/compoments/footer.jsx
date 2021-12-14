import React from 'react';
import { Link } from 'react-router-dom';
import "./footer.css";
export default function Footer() {
    const menu = [
        'Accueil',
        'Marques',
        'Nous',
        'contact'
    ];
    const categories = [
        'Samsung',
        'Iphones',
        'Huawei',
        'Itel'
    ];
    return (
        <>
            <div className="container-fluid footer d-flex justify-content-between">
                <div>
                    <h1>Menu</h1>
                    <div>
                        {
                            menu.map((value) => {
                                return (
                                    <Link to="/" className="d-block" key={value}>{value}</Link>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <h1>Categories</h1>
                    {
                        categories.map((value) => {
                            return (
                                <Link to='/' className="d-block" >{value}</Link>
                            )
                        })
                    }
                </div>
                <div>
                    <h1>Comptes</h1>
                    <div >
                        <Link to='/' className='d-block'>Inscription</Link>
                        <Link to='/'>Se connecter</Link>
                    </div>
                </div>
                <div>
                    <h1>Contact</h1>
                    <p>+225 05 45 74 97 41</p>
                    <p>Myphone@gmail.com</p>
                </div>
                <div>
                    <h1>Payés Via</h1>
                    <div>
                        <span>MTN</span>
                        <span>ORANGE</span>
                        <span>WAVE</span>
                    </div>
                    <div>
                        <span>YUP</span>
                        <span>VISA</span>
                        <span>UBA</span>
                    </div>
                </div>
            </div>
        </>
    )
}
