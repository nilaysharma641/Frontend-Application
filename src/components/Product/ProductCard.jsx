import React from 'react'
import { FaLaptopCode } from 'react-icons/fa'

const ProductCard = ({ img, name, type }) => {
	return (
		<div className='card'>
			<div className='product-image-wrapper'>
				<img src={img} className='product-image' alt='product-image' />
			</div>
			<div className='product-card-info'>
				<div className='product-type-wrapper'>
					<div className='product-icon'>
						<FaLaptopCode color='white' size='2rem' />
					</div>
					<div className='product-type'>{type && type.name}</div>
				</div>
				<h1 className='product-card-info-title'>{name}</h1>
			</div>
		</div>
	)
}

export default ProductCard
