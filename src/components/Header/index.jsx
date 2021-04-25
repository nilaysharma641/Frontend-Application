import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {
	const [showResponsiveMenu, setShowResponsiveMenu] = useState(false)

	const handleResponsiveMenuToggle = () => {
		setShowResponsiveMenu(!showResponsiveMenu)
	}

	return (
		<header className='header'>
			<div className='responsive-wrapper'>
				<Link to='/'>
					<img
						className='brand-logo'
						src='https://img.innoloft.de/logo.svg'
						alt='Innoloft Logo'
					></img>
				</Link>

				<div className='responsive'>
					<GiHamburgerMenu
						onClick={handleResponsiveMenuToggle}
						className='icon'
						size='2rem'
					/>
				</div>
			</div>
			{showResponsiveMenu && (
				<div className='responsive-menu'>
					<Link className='responsive-links' to='/'>
						Home
					</Link>
					<Link className='responsive-links' to='/product'>
						Product
					</Link>
				</div>
			)}
		</header>
	)
}

export default Header
