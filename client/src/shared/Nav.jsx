import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
	<nav>
        <NavLink to="/">ORNATE OPTICAL</NavLink>
        <ul className="main-bar">
        <li>MEN</li>
        <li>WOMEN</li>
        <li>SERVICES</li>
        </ul>
        <ul className="login-bar">
        <li>LOGIN</li>
        <li>CART</li>
        </ul>
	</nav>
)

export default Nav
