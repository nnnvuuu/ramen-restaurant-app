import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
      <>
        <nav className='nav-wrapper'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          nnn-ramen
           {/* <i class="fas fa-utensils"/> */}
          </Link>
          <Link to= '/cart' className='fa-cart-plus-mobile'>
          {/* fa-cart-plus-mobile */}
           <i class="fas fa-cart-plus " />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className='fas fa-bars'/>
          </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/products'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Menu
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/contact-us'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  About 
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/sign-up'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                 Login
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/order'
                  className='order-now-btn'
                  onClick={closeMobileMenu}
                >
                  Order Now
                </Link>
              </li>        
              <li className='nav-item' >
                  <Link
                    to='/cart'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                   <i class="fas fa-cart-plus  "/>
                  </Link>
             </li>
          </ul>
      
        </nav>
      </>
  );
};

export default Navbar;