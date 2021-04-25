import React, { useState } from 'react'
import DOMPurify from 'dompurify'
import ProductAttributes from './ProductAttributes'

const ProductDescription = ({ description }) => {
	const [activeTab, setActiveTab] = useState('description')

	const changeTab = (evt) => {
		evt.preventDefault()
		setActiveTab(evt.target.value)
	}

	const showTabContent = () => {
		if (activeTab === 'description') {
			return (
				<div
					dangerouslySetInnerHTML={{
						__html: DOMPurify.sanitize(description)
					}}
				/>
			)
		}
		return <ProductAttributes />
	}

	return (
		<div className='card'>
			<div className='tabs'>
				<button
					value='description'
					onClick={changeTab}
					className={
						activeTab === 'description' ? 'tab-links active' : 'tab-links'
					}
				>
					Description
				</button>
				<button
					value='attributes'
					onClick={changeTab}
					className={
						activeTab === 'attributes' ? 'tab-links active' : 'tab-links'
					}
				>
					Attributes
				</button>
			</div>
			<div className='tab-content'>{showTabContent()}</div>
		</div>
	)
}

export default ProductDescription
