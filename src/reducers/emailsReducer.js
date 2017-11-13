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

        case constants.UPDATE_EMAIL:
        //const tasksIndex = projectChange.tasks.map( task => task.task_id ).indexOf( t.task_id )
            newState = state
            const index = state.map(e => e.email_id).indexOf(action.data.email_id)
            newState[index] = action.data
            return newState
		default:
			return state
	}
}