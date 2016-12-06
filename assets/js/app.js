var instaModule=angular.module('instahelpers', ['ngMaterial','ngAria','ngAnimate', 'ngMessages', 'material.svgAssetsCache']);
instaModule.controller('mainController',['$scope','$http','$timeout', '$q',function($scope,$http,$timeout,$q){
	
	
	// Skill selection chip code
	
    var self = this;

    this.readonly = false;
    this.selectedItem = null;
    this.searchText = null;
    this.querySearch = querySearch;
    this.vegetables = loadVegetables();
    this.selectedVegetables = [];
    this.numberChips = [];
    this.numberChips2 = [];
    this.numberBuffer = '';
    this.autocompleteDemoRequireMatch = true;
    this.transformChip = transformChip;

    /**
     * Return the proper object when the append is called.
     */
    function transformChip(chip) {
      // If it is an object, it's already a known chip
      if (angular.isObject(chip)) {
        return chip;
      }

      // Otherwise, create a new one
      return { name: chip, type: 'new' }
    }

    /**
     * Search for vegetables.
     */
    function querySearch (query) {
      var results = query ? this.vegetables.filter(createFilterFor(query)) : [];
      return results;
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(vegetable) {
        return (vegetable._lowername.indexOf(lowercaseQuery) === 0) ||
            (vegetable._lowertype.indexOf(lowercaseQuery) === 0);
      };

    }

    function loadVegetables() {
      var veggies = [
        {
          'name': 'Broccoli',
          'type': 'Brassica'
        },
        {
          'name': 'Cabbage',
          'type': 'Brassica'
        },
        {
          'name': 'Carrot',
          'type': 'Umbelliferous'
        },
        {
          'name': 'Lettuce',
          'type': 'Composite'
        },
        {
          'name': 'Spinach',
          'type': 'Goosefoot'
        }
      ];

      return veggies.map(function (veg) {
        veg._lowername = veg.name.toLowerCase();
        veg._lowertype = veg.type.toLowerCase();
        return veg;
      });
    }
  
  
  
}])