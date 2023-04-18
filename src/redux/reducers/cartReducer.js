import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions'

const initialState = {
	items: [],
}

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			const existingItemIndex = state.items.findIndex(
				(item) => item.id === action.payload.id
			)
			if (existingItemIndex >= 0) {
				const updatedItems = [...state.items]
				updatedItems[existingItemIndex].quantity += 1
				return { ...state, items: updatedItems }
			} else {
				return {
					...state,
					items: [...state.items, { ...action.payload, quantity: 1 }],
				}
			}

		case REMOVE_FROM_CART:
			const existingItemsIndex = state.items.findIndex(
				(item) => item.id === action.payload.id
			)
      console.log(existingItemsIndex,"existingItemsIndex")
			if (existingItemsIndex >= 0) {
				const updatedItems = [...state.items]
				if (updatedItems[existingItemsIndex].quantity > 1) {
					updatedItems[existingItemsIndex].quantity -= 1
					return { ...state, items: updatedItems }
				} else {
					const updatedItems = state.items.filter(
						(item) => item.id !== action.payload.id
					)
					return { ...state, items: updatedItems }
				}
			} else {
				return {
					...state,
					items: [...state.items, { ...action.payload, quantity: 0 }],
				}
			}

		default:
			return state
	}
}

export default cartReducer
