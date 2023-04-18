import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { useSelector } from 'react-redux'
const Header = () => {
	const cartItems = useSelector((state) => state.cart.items)
	const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0)
	const totalPrice = cartItems.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	)
	return (
		<header className='header'>
			<nav>
				<Link to='/' className='brand'>
					Shopping Cart
				</Link>
				<div className='nav-links'>
					<Link to='/'>Products</Link>
					<Link to='/cart'>Cart</Link>
					<Link className='nav-link' to='/checkout'>
						Check Out ({totalQuantity}) - ${totalPrice.toFixed(2)}
					</Link>
				</div>
			</nav>
		</header>
	)
}

export default Header
