import fotoBola from '@/app/static/imagens/bola.jpg'
import fotoCarrinho from '@/app/static/imagens/carrinho.jpg'
import fotoLego from '@/app/static/imagens/lego.jpg'
import './style.css'
import Link from 'next/link'
import Image from 'next/image'

function Busca(){
    return (
        <div>
            <ul className='imagensBrinquedos'>
                <li className='bola'><Image src={fotoBola} alt=''></Image></li>
                <li className='carrinho'><Image src={fotoCarrinho} alt=''></Image></li>
                <li className='lego'><Image src={fotoLego} alt=''></Image></li>
            </ul>
            <div className='busca'>
                <Link href="/bola">
                    <button>Bola</button>
                </Link>
                <Link href="/carrinho">
                    <button>Carrinho</button>
                </Link>
                <Link href="/lego">
                <button>Legos</button>
                </Link>
            </div>
            <div className='buscaTodos'>
                <Link href="/todos">
                    <button>Buscar todos os Brinquedos</button>
                </Link>
            </div>
        </div> 
    )
}

export default Busca

  