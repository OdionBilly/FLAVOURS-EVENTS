import React from 'react'
import { NavLink } from 'react-router';
import { Shoppingcart } from './Shoppingcart';
import { Profile } from './Profile';
import logoimg from '../assets/Logo.jpeg'


export const Nav = () => {
  return (
    <div className='fixed top-0 left-0 right-0 z-10 opacity-70 bg-[#181010]'>
      <nav className='flex gap-[30%] items-center font-primaryregular bg-[#181010] px-[100px] py-10  '>  
        <img src={logoimg} alt="" className='size-10' />
        <ul className='flex space-x-6 gap-10 text-white'>
            <NavLink to="/">
                <li>Shop</li>
            </NavLink> 
            <NavLink to="/Menu">
                <li>Menu</li>
            </NavLink>
            <NavLink to="/Service">  
                <li className='relative group'>
                    <a href="#"
                    className='hover:text-yellow-500'>Services</a>
                    <ul className='absolute left-[-50px] mt-1 w-[200px] bg-[#c4c3c3] border rounded-md shadow-lg opacity-0 visible group-hover:opacity-100 group-hover:visible transition duration-200 z-0'>
                        <li><a  className='block px-4 py-2 text-brown-700 hover:bg-[#181010] text-[white]'href="#">outside Catering </a></li> 
                        <li><a  className='block px-4 py-2 text-brown-700 hover:bg-[#181010] text-[white]'href="#">Events</a></li> 
                        <li><a  className='block px-4 py-2 text-brown-700 hover:bg-[#181010] text-[white]'href="#">Pasteries and Cakes</a></li> 
                        <li><a  className='block px-4 py-2 text-brown-700 hover:bg-[#181010] text-[white]'href="#"></a></li>
                   </ul>
                </li>
            </NavLink> 
          
            <NavLink to="/Events">
               <li>Events</li>
            </NavLink>
        </ul>
        <div className='flex gap-5 text-white'>
            <p><Shoppingcart/></p>
            <p><Profile/></p>
        </div>
      </nav>
    </div>
  )
}
