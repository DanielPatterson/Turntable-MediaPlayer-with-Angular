'use strict';

// Register "rootApp" component, along with its associated controller and template
angular.
  module('rootApp').
  component('rootApp', {
    templateUrl: 'app/root/root.template.html',
    controller: ['$http', '$routeParams',
      function rootAppController($http, $routeParams) {
        var self = this;
		

        $http.get('app/root/tracklist.json').then(function(response) {
          self.rootdata = response.data;
        });
				
      }
    ]
});