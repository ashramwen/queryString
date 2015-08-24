'use strict';
angular.module('ag.service', []).factory('queryString', [function() {
    return function(name) {
        var AllVars = window.location.search.substring(1);
        var Vars = AllVars.split('&');
        for (var i = 0; i < Vars.length; i++) {
            var Var = Vars[i].split('=');
            if (Var[0] == name) return Var[1];
        }
        return '';
    }
}]);
