"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

var TurboClient = require("../utils").TurboClient;


/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Here are a few sample actions for User managment.
	Feel free to remove and replace with your own actions
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

module.exports = {

	fetchUsers: function (params) {
		return function (dispatch) {
			return dispatch(TurboClient.getRequest("user", params, constants.USERS_RECEIVED));
		};
	},

	addUser: function (params) {
		return function (dispatch) {
			return dispatch(TurboClient.postRequest("user", params, constants.USER_CREATED));
		};
	},

	// Unlike addUser, register() also maintains a session for login state. After calling
	// TurboClient.createUser(), the new user is logged in as well:
	register: function (params) {
		return function (dispatch) {
			return dispatch(TurboClient.createUser(params, constants.USER_CREATED));
		};
	},

	loginUser: function (credentials) {
		return function (dispatch) {
			return dispatch(TurboClient.login(credentials, constants.CURRENT_USER_RECEIVED));
		};
	},
	logoutUser: function () {
		return function (dispatch) {
			return dispatch(TurboClient.logout(constants.LOGOUT_USER));
		};
	},

	currentUser: function () {
		return function (dispatch) {
			return dispatch(TurboClient.currentUser(constants.CURRENT_USER_RECEIVED));
		};
	},

	emailTemplateCreator: function (params) {
		return function (dispatch) {
			return dispatch(TurboClient.postRequest("emailTemplates", params, constants.NewEmailTemplate));
		};
	},

	getEmails: function (params) {
		return function (dispatch) {
			return dispatch(TurboClient.getRequest("emailTemplates", params, constants.GET_EMAILS));
		};
	},
	emailTemplateUpdate: function (orig, update) {
		return function (dispatch) {
			return dispatch(TurboClient.putRequest("emailTemplates", orig, update, constants.UPDATE_EMAIL));
		};
	},
	createTemplate: function (params) {
		return function (dispatch) {
			return dispatch(TurboClient.postRequest("templates", params, constants.NEW_GRAPHIC_TEMPLATE));
		};
	},
	getTemplates: function (params) {
		return function (dispatch) {
			return dispatch(TurboClient.getRequest("templates", params, constants.GET_GRAPHIC_TEMPLATE));
		};
	},
	updateTemplate: function (orig, update) {
		return function (dispatch) {
			return dispatch(TurboClient.putRequest("templates", orig, update, constants.UPDATE_GR_TEMPLATE));
		};
	}

	/*,
 updateUser: (user,params) => {
 	return dispatch => {
 		return dispatch(TurboClient.putRequest('user',user,params))
 	}
 }*/

};