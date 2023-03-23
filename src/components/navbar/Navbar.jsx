import './navbar.css';
import CheckOut from '../checkout/Checkout';
import { Link } from 'react-router-dom';
import {useState} from 'react';

export default function Navbar() {
    const [open, setOpen] = useState(false);
  return (
    <div className='navbar'>
        <div className="leftNavbarContainer">
            <Link to = '/'><img src="assets/logo.png" alt="" /></Link>
        </div>
        <div className="middleNavbarContainer">
            <ul>
                <li>gadgets</li>
                <li>videos</li>
                <li>books</li>
                <li>audio</li>
            </ul>
        </div>
        <div className="rightNavbarContainer">
            <div className="cartContainer">
            <img src="assets/cart.png" alt="" className="cart" onClick = {() => setOpen(!open)}/>
            <span className="number">0</span>
            </div>
        
            <img src="assets/avatar.png" alt="" className="avatar" />
        </div>
        {open && <CheckOut/>}

    </div>
  )
}
