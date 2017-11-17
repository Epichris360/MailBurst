"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Export your reducers here
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/


var userReducer = _interopRequire(require("./userReducer"));

var emailsReducer = _interopRequire(require("./emailsReducer"));

var templatesReducer = _interopRequire(require("./templatesReducer"));

exports.userReducer = userReducer;
exports.emailsReducer = emailsReducer;
exports.templatesReducer = templatesReducer;
Object.defineProperty(exports, "__esModule", {
	value: true
});