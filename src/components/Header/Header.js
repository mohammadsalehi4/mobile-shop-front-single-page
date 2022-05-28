import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div id='Header'>
        <div id='leftHeader'>
            <h2>Mobile Shop</h2>
            <h3 id='HLHF' className='thisPage'>Home <div className='kuft'></div></h3>
            <h3>Collections</h3>
            <h3>Blog</h3>
            <h3>Categorys</h3>

        </div>
        <div id='rightHeader'>
            <a id='login' className='headerLink'>Log In</a>
            <a id='signup' className='headerLink'>Sign Up</a>
            <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            <i class="fa fa-search" aria-hidden="true"></i>

        </div>
    </div>
  )
}

export default Header