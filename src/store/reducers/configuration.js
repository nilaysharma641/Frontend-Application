const initialState = {
	appId: 1,
	configuration: null,
	isLoading: false,
	error: null
}

const configurationReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_CONFIGURATION':
			return {
				...state,
				isLoading: false,
				configuration: action.payload.configData,
				error: null
			}
		case 'SET_LOADING':
			return {
				...state,
				isLoading: true
			}
		case 'SET_ERROR':
			return {
				...state,
				error: action.payload.error
			}
		default:
			return state
	}
}
export default configurationReducer
