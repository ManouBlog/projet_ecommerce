import React, { useState } from 'react';

export default function Inscription() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    function Sign() {
        console.warn(name, password, email);
    }
    return (
        <div className='row container mx-auto mt-5'>
            <div className='col p-5 '>
                <h1 className='text-center'>Inscription</h1>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="name" />
                <br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="paswword" />
                <br />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="email" />
                <br />
                <div className='text-center'>
                    <button type="submit" onClick={Sign} className="btn btn-primary">send</button>
                </div>

            </div>
            <div className='col p-5'>
                <h1 className='text-center'>Se Connecter</h1>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="paswword" />
                <br />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="email" />
                <br />
                <div className='text-center'>
                    <button type="submit" onClick={Sign} className="btn btn-primary">Se Connecter</button>
                </div>
            </div>

        </div>
    )
}
