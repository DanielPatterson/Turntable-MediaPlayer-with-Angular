'use strict';

// Define the "myApp" module
angular.module('myApp', [
'ngRoute',
'rootApp'
]);

// Define the `core` module
angular.module('core', ['core.myTemplate']);

// Define the `core.myTemplate` module
angular.module('core.myTemplate', ['ngResource']);