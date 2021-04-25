import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts, getTrls } from '../../store/actions/product'
import Loader from '../Loader'
import ProductCard from './ProductCard'
import UserCard from './UserCard'
import ProductDescription from './ProductDescription'
import MapComponent from './MapComponent'

const Product = () => {
	const dispatch = useDispatch()
	const productDetails = useSelector((state) => state.product)
	const configDetails = useSelector((state) => state.configuration)
	const { configuration } = configDetails
	const { isLoading, productData, error } = productDetails
	useEffect(() => {
		dispatch(getProducts(process.env.REACT_APP_PRODUCT_ID || 6781))
		dispatch(getTrls)
	}, [dispatch])

	const showCurrentState = () => {
		if (isLoading) {
			return <Loader />
		} else if (Object.keys(productData).length > 0) {
			return (
				<div className='product-wrapper'>
					<div className='product-card'>
						<ProductCard
							img={productData.picture}
							name={productData.name}
							type={productData.type}
						/>
						<ProductDescription description={productData.description} />
					</div>
					<div className='user-card'>
						{configuration.hasUserSection && (
							<UserCard user={productData.user} company={productData.company} />
						)}
						<MapComponent address={productData.company.address} />
					</div>
				</div>
			)
		} else {
			return <h1>Something went wrong... {error}</h1>
		}
	}

	return <div>{showCurrentState()}</div>
}

export default Product
