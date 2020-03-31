// IT18186284 -E.S.S Soysa
import React, { useState, Fragment } from 'react'
import AddItem from './forms/addItem'
import EditItem from './forms/editItem'
import Itemlist from './tables/Itemlist'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

	const defaultItems = [
		{id:1, name: "Pizza"},
		{id:2, name: "French Fries "},
		{id:3, name: "Submarine"},
	]

	const initialState = { id: null, name: ''}


	const [ Items, setItems ] = useState(defaultItems)
	const [ selectedItem, setSelectedItem ] = useState(initialState)
	const [ editing, setEditing ] = useState(false)

	const addItem = item => {
		item.id = Items.length + 1
		setItems(
			[ ...Items, item ]
		)
	}

	const deleteItem = id => {
		setEditing(false)

		setItems(
			Items.filter(
				item => item.id !== id
			)
		)
	}

	const completeItem = id=> {
		setEditing(false)


			setItems(
				Items.map(
					item => (
						item.id !== id ?

							item:item.name.strike()
					)
				)
			)


	};


	const updateItem = (id, updatedItem) => {
		setEditing(false)

		setItems(
			Items.map(
				item => (
					item.id === id ? updatedItem : item
				)
			)
		)
	}

	const editRow = item => {
		setEditing(true)

		setSelectedItem(
			{
				id: item.id,
				name: item.name
			}
			)
	}

	return (
		<div className="container">
			<div className="container-fluid">
				<h1 className="display-2 text-warning "><strong><center><u>Food Hub</u></center></strong></h1>
			<div className="jumbotron rounded mb-3">

			<div className="card">
				<div className="card-body">
					<p className="card-text">Food hub has been the trusted company for delivering foods for the customers for decades.In this system you can simply add new items to the list.After adding you can simply click the complete button and complete the items listed accordingly .Also you are able to edit any item on the list.While you have the privillage to delete any completed or pending items.  </p>
				</div>
			</div>
				<br></br>
				<br></br>

				<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit Item</h2>
							<EditItem
								editing={editing}
								setEditing={setEditing}
								selectedItem={selectedItem}
								updateItem={updateItem}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add an Item</h2>
							<AddItem addItem={addItem} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View Items</h2>
					<Itemlist Items={Items.reverse()} completeItem={completeItem} editRow={editRow} deleteItem={deleteItem} />
				</div>
			</div>
			</div>
			</div>
		</div>

	)
}

export default App
