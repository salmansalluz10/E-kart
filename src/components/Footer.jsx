import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <footer className="bg-purple-700 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-5">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold flex items-center mb-4">
            <span className="text-3xl mr-2">🛒</span>E-CART
          </h2>
          <p className="text-sm" style={{textAlign:'justify'}}>
          Ekart logistics or Ekart courier is an Indian courier delivery services company, headquartered in Bangalore, Karnataka. A subsidiary of electronic commerce company Flipkart Pvt. Ltd., it is run by Instakart services Pvt. Ltd. Ekart delivers around 10 million shipments a month.
          </p>
        </div>
        {/* Links Section */}
        <div>
          <h3 className="text-lg font-bold mb-3">Links</h3>
          <ul className="space-y-2">
            <Link to={'/'}><li><a href="#" className="hover:text-gray-300">Home</a></li></Link>
            <Link to={'/Wishlist'}><li><a href="#" className="hover:text-gray-300">Wishlist</a></li></Link>
            <Link to={'/Cart'}><li><a href="#" className="hover:text-gray-300">Cart</a></li></Link>
          </ul>
        </div>

        {/* Guides Section */}
        <div>
          <h3 className="text-lg font-bold mb-3">Guides</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">React</a></li>
            <li><a href="#" className="hover:text-gray-300">React Bootstrap</a></li>
            <li><a href="#" className="hover:text-gray-300">Bootswatch</a></li>
          </ul>
        </div>
        {/* Contact and Social Media Section */}
        <div>
          <h3 className="text-lg font-bold mb-3">Contact Us</h3>
          <div className="flex space-x-4 mb-4">
            <input
              type="email"
              placeholder="Email Id"
              className="w-full p-2 text-gray-900 rounded-md focus:outline-none"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md">Subscribe</button>
          </div>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer