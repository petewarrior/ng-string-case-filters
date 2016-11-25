(() => {
'use strict';

angular.module('ng-string-case-filters', [

])
.filter('snake-case', () => {
    return (string) => {
      return string.replace(/[^A-Za-z0-9\-\_\s]+/g, '').replace(/[\-\_\s]+/g, '-').toLowerCase();
    };
  })
  
}());
