import constants from '../constants'

const initialState = []

export default (state = initialState, action) => {
    let newState 
	switch (action.type) {

        case constants.NewEmailTemplate:
            newState = state
            newState.push(action.data)
			return newState

		case constants.GET_EMAILS:
            newState = [...state, ...action.data]
            return newState

		default:
			return state
	}
}