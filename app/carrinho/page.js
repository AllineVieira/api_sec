"use client"

import { useState, useEffect } from 'react';
import token from '../functions/token';
import axios from 'axios';

function Carrinho(){
    const [brinquedos, setBrinquedos] = useState([])
    
    useEffect(() => {
        (async () => {
            const accessToken = await token()
            const { data } = await axios.post('/api/brinquedos', {
                accessToken: accessToken,
            })
            setBrinquedos(data);
        })();
    }, []);

    return(
        <div className='retorno'>
            {brinquedos.map((brinquedo, index) => {
                if (brinquedo.nome === 'carrinho') {
                return (
                    <div key={index}>
                        <h1>
                            {brinquedo.nome}
                        </h1>
                        <br></br>
                        <p>
                            R$ {brinquedo.preco}
                        </p>
                        <br></br>
                        <p> Estoque {brinquedo.estoque}
                        </p>
                    </div>
                )
                }
            })}
        </div>
    )
}

export default Carrinho