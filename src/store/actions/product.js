// Thunk function

export const getProducts = (productId) => (dispatch) => {
	dispatch({ type: 'SET_PRODUCT_LOADING' })
	fetch(`${process.env.REACT_APP_API_URL}/product/${productId}/`)
		.then((res) => res.json())
		.then((data) => {
			return dispatch({
				type: 'GET_PRODUCT_DETAILS',
				payload: {
					productData: data
				}
			})
		})
		.catch((error) =>
			dispatch({ type: 'SET_PRODUCT_ERROR', payload: { error } })
		)
}

export const updateProducts = (product) => (dispatch) => {
	dispatch({ type: 'SET_PRODUCT_LOADING' })
	fetch(`${process.env.REACT_APP_API_URL}/product/${product.id}/`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(product)
	})
		.then((res) => res.json())
		.then((data) => {
			return dispatch({
				type: 'GET_PRODUCT_DETAILS',
				payload: {
					productData: data
				}
			})
		})
		.catch((error) => {
			dispatch({ type: 'SET_PRODUCT_ERROR', payload: { error } })
		})
}

export const getTrls = (dispatch) => {
	dispatch({ type: 'SET_PRODUCT_LOADING' })
	fetch(`${process.env.REACT_APP_API_URL}/trl`)
		.then((res) => res.json())
		.then((data) => {
			return dispatch({
				type: 'GET_TRL_VALUES',
				payload: {
					trls: data
				}
			})
		})
}
