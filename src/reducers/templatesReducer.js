import constants from '../constants'

const initialState = []

export default (state = initialState, action) => {
    let newState 
	switch (action.type) {

        case constants.NEW_GRAPHIC_TEMPLATE:
            newState = state
            newState.push(action.data)
			return newState

		case constants.GET_GRAPHIC_TEMPLATE:
            newState = [...state, ...action.data]
            return newState

        case constants.UPDATE_GR_TEMPLATE:
        //const tasksIndex = projectChange.tasks.map( task => task.task_id ).indexOf( t.task_id )
            newState = state
            const index = newState.map(t => t.id).indexOf(action.data.id)
            newState[index] = action.data
            return newState
		default:
			return state
	}
}