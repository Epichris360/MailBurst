"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _toConsumableArray = function (arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } };

var constants = _interopRequire(require("../constants"));

var initialState = [];

module.exports = function (_x, action) {
    var state = arguments[0] === undefined ? initialState : arguments[0];
    var newState = undefined;
    switch (action.type) {

        case constants.NEW_GRAPHIC_TEMPLATE:
            newState = state;
            newState.push(action.data);
            return newState;

        case constants.GET_GRAPHIC_TEMPLATE:
            newState = [].concat(_toConsumableArray(state), _toConsumableArray(action.data));
            return newState;

        /*case constants.UPDATE_EMAIL:
        //const tasksIndex = projectChange.tasks.map( task => task.task_id ).indexOf( t.task_id )
            newState = state
            const index = state.map(e => e.email_id).indexOf(action.data.email_id)
            newState[index] = action.data
            return newState*/
        default:
            return state;
    }
};