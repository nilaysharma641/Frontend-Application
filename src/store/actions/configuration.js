// Thunk function

export const getConfiguration = (appId) => (dispatch) => {
	dispatch({ type: 'SET_LOADING' })
	fetch(`${process.env.REACT_APP_API_URL}/configuration/${appId}/`)
		.then((res) => res.json())
		.then((data) => {
			return dispatch({
				type: 'GET_CONFIGURATION',
				payload: {
					configData: data
				}
			})
		})
		.catch((error) => dispatch({ type: 'SET_ERROR', payload: { error } }))
}
