import constants from '../constants'
import { TurboClient } from '../utils'

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Here are a few sample actions for User managment.
	Feel free to remove and replace with your own actions
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

export default {

	fetchUsers: (params) => {
		return dispatch => {
			return dispatch(TurboClient.getRequest('user', params, constants.USERS_RECEIVED))
		}
	},

	addUser: (params) => {
		return dispatch => {
			return dispatch(TurboClient.postRequest('user', params, constants.USER_CREATED))
		}
	},

	// Unlike addUser, register() also maintains a session for login state. After calling 
	// TurboClient.createUser(), the new user is logged in as well:
	register: (params) => {
		return dispatch => {
			return dispatch(TurboClient.createUser(params, constants.USER_CREATED))
		}
	},

	loginUser: (credentials) => {
		return dispatch => {
			return dispatch(TurboClient.login(credentials, constants.CURRENT_USER_RECEIVED))
		}
	},
	logoutUser: () => {
		return dispatch => {
			return dispatch( TurboClient.logout( constants.LOGOUT_USER) )
		}
	},

	currentUser: () => {
		return dispatch => {
			return dispatch(TurboClient.currentUser(constants.CURRENT_USER_RECEIVED))
		}
	},

	emailTemplateCreator: params => {
		return dispatch => {
			return dispatch(TurboClient.postRequest('emailTemplates',params,constants.NewEmailTemplate))
		}
	},

	getEmails: params => {
		return dispatch => {
			return dispatch(TurboClient.getRequest('emailTemplates',params,constants.GET_EMAILS))
		}
	},
	emailTemplateUpdate: (orig, update) => {
		return dispatch => {
			return dispatch(TurboClient.putRequest('emailTemplates',orig,update,constants.UPDATE_EMAIL))
		}
	},
	createTemplate: params => {
		return dispatch => {
			return dispatch( TurboClient.postRequest('templates', params, constants.NEW_GRAPHIC_TEMPLATE) )
		}
	},
	getTemplates: (params) => {
		return dispatch => {
			return dispatch( TurboClient.getRequest('templates',params,constants.GET_GRAPHIC_TEMPLATE) )
		}
	},
	updateTemplate: (orig, update ) => {
		return dispatch => {
			return dispatch( TurboClient.putRequest('templates',orig,update,constants.UPDATE_GR_TEMPLATE) )
		}
	}
	
	/*,
	updateUser: (user,params) => {
		return dispatch => {
			return dispatch(TurboClient.putRequest('user',user,params))
		}
	}*/
	
}
