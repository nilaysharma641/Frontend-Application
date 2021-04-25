import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Categories from './Categories'
import BusinessModels from './BusinessModels'
import Trl from './Trl'
import { updateProducts, updateAtSource } from 'store/actions/product'
import { GiSave } from 'react-icons/gi'

const ProductAttributes = () => {
	const dispatch = useDispatch()
	const productDetails = useSelector((state) => state.product.productData)
	const [isChanged, setIsChanged] = useState(false)

	const handleUpdateProducts = (values, key) => {
		productDetails[key] = values
		dispatch(updateProducts(productDetails))
		setIsChanged(true)
	}

	const handleUpdateAtSource = () => {
		dispatch(updateAtSource(productDetails))
		setIsChanged(false)
	}

	const renderCategories = () => {
		return (
			<Categories
				categories={productDetails.categories}
				updateProduct={(categories) =>
					handleUpdateProducts(categories, 'categories')
				}
			/>
		)
	}
	const renderBusinessModels = () => {
		return (
			<BusinessModels
				businessModels={productDetails.businessModels}
				updateProduct={(businessModels) =>
					handleUpdateProducts(businessModels, 'businessModels')
				}
			/>
		)
	}
	const renderTrl = () => {
		return (
			<Trl
				trl={productDetails.trl}
				updateProduct={(trl) => handleUpdateProducts(trl, 'trl')}
			/>
		)
	}
	return (
		<div className='attributes-tab-content'>
			<div className='attributes-categories'>{renderCategories()}</div>
			<div className='attributes-business-modals'>{renderBusinessModels()}</div>
			<div className='attributes-trl'>{renderTrl()}</div>
			{isChanged && (
				<button onClick={handleUpdateAtSource} className='action-buttons'>
					Update Changes <GiSave className='action-icons' />
				</button>
			)}
		</div>
	)
}

export default ProductAttributes
