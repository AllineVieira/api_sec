import logo from '@/app/static/imagens/logo.png';
import './style.css'
import Image from 'next/image'

function Header(){
    return(
        <header className="App-header">
        <Image className="logotipo" src={logo}></Image>
        <strong className="titulo">Brinquedos</strong>
      </header>
    )
}

export default Header