import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {

  const wishlistArray  = useSelector((state)=>state.wishlist)

  const cartArray = useSelector((state)=>state.cartItem)

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative flex justify-between items-center p-4">
      <a href="/" aria-label="E-cart homepage">
        <Link to={'/'}>
          <h1 className="text-3xl flex items-center">
            <span className="text-3xl mr-2">🛒</span>E-cart
          </h1>
        </Link>
      </a>

      <button className="border border-white p-2 rounded ms-auto md:hidden"
        aria-label="Open menu"
        onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      <div
        className={`${
          isMenuOpen ? 'absolute top-16 left-0 w-full flex flex-col items-center space-y-4 bg-white p-4 shadow-md z-10' : 'hidden'
        } md:flex md:flex-row md:space-x-6 md:static md:bg-transparent md:shadow-none md:top-0 md:left-0`}>

        <Link to={'/Wishlist'}>
          <button className="flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded"
            aria-label="Wishlist">
            <FontAwesomeIcon icon={faHeart} size="lg" color="red" />
            <span className="ml-2">
              Wishlist
              <span className="px-2 border-slate-900 bg-slate-400 rounded">{wishlistArray?.length}</span>
            </span>
          </button>
        </Link>

        <Link to={'/Cart'}>
          <button className="flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded"
            aria-label="Cart">
            <FontAwesomeIcon icon={faShoppingCart} size="lg" color="green" />
            <span className="ml-2">
              Cart
              <span className="px-2 border-slate-900 bg-slate-400 rounded">{cartArray?.length}</span>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
