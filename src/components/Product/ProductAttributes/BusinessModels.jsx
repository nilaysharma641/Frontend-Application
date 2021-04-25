import React, { useState } from 'react'
import { BiEditAlt } from 'react-icons/bi'
import { GiSave } from 'react-icons/gi'
import { AiFillFileAdd } from 'react-icons/ai'
import { generateRandomId } from 'utils/functions'

const Categories = ({ businessModels, updateProduct }) => {
	const [currentBusinessModels, setCurrentBusinessModels] = useState([
		...businessModels
	])
	const [editMode, setEditMode] = useState(false)

	const handleInputValueChange = (index) => (event) => {
		const changedValue = event.target.value
		const tempBusinessModels = currentBusinessModels.map((item, i) => {
			if (i === index) {
				item.name = changedValue
			}
			return item
		})
		setCurrentBusinessModels(tempBusinessModels)
	}

	const handleEditToggle = () => {
		if (editMode) {
			const updatedBusinessModels = currentBusinessModels.filter(
				(item) => item.name
			)
			updateProduct(updatedBusinessModels)
			setCurrentBusinessModels(updatedBusinessModels)
		}
		setEditMode(!editMode)
	}

	const handleAddBusinessModels = () => {
		let id = generateRandomId()
		setCurrentBusinessModels([...currentBusinessModels, { id, name: '' }])
		setEditMode(true)
	}

	const showBusinessModels = () => {
		if (editMode) {
			return (
				<div className='edit-mode-wrapper'>
					{currentBusinessModels.map((businessModels, index) => {
						return (
							<div key={businessModels.id} className='d-flex'>
								<input
									className='action-input'
									onChange={handleInputValueChange(index)}
									value={businessModels.name}
								></input>
							</div>
						)
					})}
				</div>
			)
		} else {
			return (
				<ul>
					{currentBusinessModels.map((item) => (
						<li key={item.id}>{item.name}</li>
					))}
				</ul>
			)
		}
	}
	return (
		<div className='business-models-wrapper'>
			<h3>Business Models</h3>
			{showBusinessModels()}
			<div className='d-flex'>
				<button className='action-buttons' onClick={handleEditToggle}>
					{editMode ? (
						<span>
							Save <GiSave className='action-icons' />
						</span>
					) : (
						<span>
							Edit <BiEditAlt className='action-icons' />
						</span>
					)}
				</button>
				<button className='action-buttons' onClick={handleAddBusinessModels}>
					Add <AiFillFileAdd className='action-icons' />
				</button>
			</div>
		</div>
	)
}

export default Categories
