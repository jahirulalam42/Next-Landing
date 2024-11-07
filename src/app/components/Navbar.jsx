import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div>
      <div className="navbar text-white px-16 pt-6">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li><a>Item 1</a></li>
        <li><a>Item 1</a></li>
        <li><a>Item 1</a></li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
   <a className='btn btn-ghost'> <Image
      src={`/Vector.png`}
      width={40}
      height={40}
      alt="Picture of the author"
    /></a>
    <a className="btn btn-ghost text-xl">
      
      Findtrend</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-md">
    <li><a>About</a></li>
        <li><a>How it work</a></li>
        <li><a>Pricing</a></li>
        <li><a>Solution</a></li>
        <li><a>Features</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-3">
    <a className="btn btn-ghost">Login</a>
    <button type="button" className="btn px-8 py-3 font-semibold rounded-full bg-white text-black">Register</button>
  </div>
</div>
    </div>
  )
}

export default Navbar
