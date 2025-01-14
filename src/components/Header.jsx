import imgLogo from '../assets/logo.jpg'
import Button from './UI/Button'

export default function Header() {

    return <header id='main-header'>
        <div id='title'>
         <img src={imgLogo}></img>
         <h1>REACT FOODS</h1>
         </div>
         <Button textOnly>Cart(0)</Button>
    </header>
}