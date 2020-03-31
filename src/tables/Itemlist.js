// IT18186284 -E.S.S Soysa
import React from 'react'

const Itemlist = props => (
  <table className="table table-hover table-dark table-borderless rounded">

    <tbody>
      {props.Items.length > 0 ? (
        props.Items.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
              <td>
                <button
                    onClick={() => props.completeItem(item.id)}
                    className="btn btn-success"
                >
                    Complete
                </button>
              <button
                onClick={() => {
                  props.editRow(item)
                }}
                className="btn btn-warning"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteItem(item.id)}
                className="btn btn-danger"
              >
                Delete
              </button>

            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Items</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default Itemlist
