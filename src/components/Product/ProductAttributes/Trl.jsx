import React from 'react'
import { useSelector } from 'react-redux'

const Trl = ({ trl, updateProduct }) => {
	const trlList = useSelector((state) => state.product.trls)

	const handleSelectChange = (evt) => {
		evt.preventDefault()
		const newTrl = trlList.find((item) => item.id === evt.target.value)
		if (newTrl) {
			updateProduct(newTrl)
		}
	}

	return (
		<div className='trl-wrapper'>
			<h3>TRL</h3>
			<select
				className='trl-select'
				defaultValue={trl.id}
				onChange={handleSelectChange}
				name='trl-list'
				id='trl-list'
			>
				{trlList &&
					trlList.map((item) => (
						<option key={item.id} value={item.id}>
							{item.name}
						</option>
					))}
			</select>
		</div>
	)
}

export default Trl
