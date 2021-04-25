import React, { useState } from 'react'
import { BiEditAlt } from 'react-icons/bi'
import { GiSave } from 'react-icons/gi'
import { AiFillFileAdd } from 'react-icons/ai'
import { generateRandomId } from 'utils/functions'

const Categories = ({ categories, updateProduct }) => {
	const [currentCategories, setCurrentCategories] = useState([...categories])
	const [editMode, setEditMode] = useState(false)

	const handleInputValueChange = (index) => (event) => {
		const changedValue = event.target.value
		const tempCategories = currentCategories.map((item, i) => {
			if (i === index) {
				item.name = changedValue
			}
			return item
		})
		setCurrentCategories(tempCategories)
	}

	const handleEditToggle = () => {
		if (editMode) {
			const updatedCategories = currentCategories.filter((item) => item.name)
			updateProduct(updatedCategories)
			setCurrentCategories(updatedCategories)
		}
		setEditMode(!editMode)
	}

	const handleAddCategory = () => {
		let id = generateRandomId()
		setCurrentCategories([...currentCategories, { id, name: '' }])
		setEditMode(true)
	}

	const showCategories = () => {
		if (editMode) {
			return (
				<div className='edit-mode-wrapper'>
					{currentCategories.map((category, index) => {
						return (
							<div key={category.id} className='d-flex'>
								<input
									className='action-input'
									onChange={handleInputValueChange(index)}
									value={category.name}
								></input>
							</div>
						)
					})}
				</div>
			)
		} else {
			return (
				<ul>
					{currentCategories.map((item) => (
						<li key={item.id}>{item.name}</li>
					))}
				</ul>
			)
		}
	}
	return (
		<div className='categories-wrapper'>
			<h3>Categories</h3>
			{showCategories()}
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
			<button className='action-buttons' onClick={handleAddCategory}>
				Add <AiFillFileAdd className='action-icons' />
			</button>
		</div>
	)
}

export default Categories
