'use strict';

module.exports = function tableDirective() {
    return {
        controller: 'TableCtrl', // Called from TableController.js
        controllerAs: 'ctrl',
        bindToController: true,
        restrict: 'EA',
        scope: true,
        template: require('./table.html')
    };
};