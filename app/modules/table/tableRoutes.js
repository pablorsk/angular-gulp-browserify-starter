'use strict';

function tableRoutes($stateProvider) {

    var table = {
        name: 'table', // state name
        url: '/table', // url path that activates this state
        template: '<div table-view></div>', // generate the Directive "tableView" - when calling the directive in HTML, the name must not be camelCased
        data: {
            moduleClasses: 'page', // assign a module class to the <body> tag
            pageClasses: 'table', // assign a page-specific class to the <body> tag
            pageTitle: 'Table', // set the title in the <head> section of the index.html file
            pageDescription: 'Meta Description goes here' // meta description in <head>
        }
    };

    $stateProvider.state(table);

}

tableRoutes.$inject = ['$stateProvider'];
module.exports = tableRoutes;