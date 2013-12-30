'use strict';

/* Controllers */

var wishlistApp = angular.module('wishlistApp.controllers', []);

// wishlistApp.controller('WishListCtrl', function($scope){
//   $scope.wishes = [
//     {'name':  'Gretsch White Falcon',
//      'price': 2925.00},
//     {'name':  'Playstation 4',
//      'price': 399.99},
//     {'name':  'Mac Pro',
//      'price': 2999.00}
//   ]

//   $scope.orderProp = 'name';
// });

wishlistApp.controller('NewItemCtrl', function($scope){
  $scope.wishes = [];
  $scope.name = '';
  $scope.price = '';
  $scope.submit = function() {
    if (this.name && this.price) {
      this.wishes.push({ name:this.name, price:this.price });
      this.name = '';
      this.price = '';
    }
  };
  $scope.orderProp = 'name';

});
