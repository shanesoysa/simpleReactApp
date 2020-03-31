// IT18186284 -E.S.S Soysa
import React, { useState } from 'react'


const AddItem = props => {
	const initialFormState = { id: null, name: ''}
	const [ item, setItem ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setItem({ ...item, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!item.name || !item.name) return

				props.addItem(item)
				setItem(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" name="name"  required value={item.name} onChange={handleInputChange} />
			<button>Add new item</button>
		</form>
	)
}

export default AddItem
