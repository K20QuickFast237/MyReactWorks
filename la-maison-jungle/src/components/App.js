import Banner from './Banner';
import '../styles/App.css';
import Cart from './Cart/Cart';
import logo from '../assets/logo.png'
import ShoppingList from './ShoppingList/ShoppingList';
// import QuestionForm from './QuestionForm';
import Footer from './Footer/Footer';
import '../styles/Layout.css'
import { useEffect, useState } from 'react';

function App() {
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <div>
      <Banner >
        <img src={logo} alt='la maison jungle' className='lmj-logo' />
        <h1 className='lmj-title'>La maison Jungle</h1>
      </Banner>
      <div className='lmj-layout-inner'>
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      {/* <QuestionForm /> */}
      <Footer />
    </div>
  )
}

export default App;
