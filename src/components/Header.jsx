import imgLogo from '../assets/logo.jpg'

export default function Header() {

    return <header id='main-header'>
        <div id='title'>
         <img src={imgLogo}></img>
         <h1>REACT FOODS</h1>
         </div>
         <button>Cart(0)</button>
    </header>
}