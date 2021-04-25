const initialState = {
	productData: {},
	trls: [],
	isLoading: false,
	error: null
}

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_PRODUCT_DETAILS':
			return {
				...state,
				isLoading: false,
				productData: action.payload.productData
			}
		case 'GET_TRL_VALUES':
			return {
				...state,
				isLoading: false,
				trls: action.payload.trls
			}
		case 'SET_PRODUCT_LOADING':
			return {
				...state,
				isLoading: true,
				error: null
			}
		case 'SET_PRODUCT_ERROR':
			return {
				...state,
				error: action.payload.error
			}
		default:
			return state
	}
}
export default productReducer
