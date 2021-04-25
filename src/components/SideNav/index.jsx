import React from 'react'
import { Link } from 'react-router-dom'
import { BiPackage } from 'react-icons/bi'
import { AiOutlineHome } from 'react-icons/ai'

const SideNav = () => {
	return (
		<div className='sidenav'>
			<Link className='sidenav-links-wrapper' to='/'>
				<AiOutlineHome className='sidenav-icons' /> Home
			</Link>
			<Link className='sidenav-links-wrapper' to='/product'>
				<BiPackage className='sidenav-icons' /> Product
			</Link>
		</div>
	)
}

export default SideNav
