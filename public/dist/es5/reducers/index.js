"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Export your reducers here
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/


var userReducer = _interopRequire(require("./userReducer"));

var emailsReducer = _interopRequire(require("./emailsReducer"));

exports.userReducer = userReducer;
exports.emailsReducer = emailsReducer;
Object.defineProperty(exports, "__esModule", {
	value: true
});