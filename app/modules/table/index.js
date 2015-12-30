'use strict';
// Table View
module.exports = angular.module('modules.table', [])
    .directive('tableView', require('./tableDirective'))
    .controller('TableCtrl', require('./TableController'))
    .config(require('./tableRoutes'));