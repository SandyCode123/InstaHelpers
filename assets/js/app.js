var instaModule=angular.module('instahelpers', ['ngMaterial','ngAria','ngAnimate', 'ngMessages', 'material.svgAssetsCache']);
instaModule.controller('mainController',['$scope','$http','$timeout', '$q','$mdDialog',function($scope,$http,$timeout,$q,$mdDialog){
	
	$scope.clientPartSelected=false;
	$scope.developerPartSelected=false;
	$scope.clientConnectionPart=false;
	$scope.developerInstaFilterPart=false;
	$scope.InstaListShow=false;
	
	// Angular Material Chips Section
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
          'name': 'Spring',
          'type': 'Framework'
        },
        {
          'name': 'J2EE',
          'type': 'Java'
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
  
  
    // Button Event handlers
	$scope.clientButtonClick=function(){
		$scope.clientPartSelected=true;
		$scope.developerPartSelected=false;
	}
	
	$scope.clientNext=function(){
		$scope.clientConnectionPart=true;
		setTimeout(function(){
			$('.cssload-container').fadeIn(500);
		}, 2000);
	}
	
	$scope.developerButtonClick=function(){
		$scope.developerPartSelected=true;
		$scope.clientPartSelected=false;
		setTimeout(function(){
			$('.cssload-container').fadeIn(500);
		}, 2000);
	}
  
	$scope.developerNext=function(option){
		if(option==1){
			$scope.developerInstaFilterPart=true;
		}else if(option==2){
			$scope.InstaListShow=true;
		}
	}
	
	// Signup Tab
	$scope.showAdvanced = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'dialog1.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  };
  
  // Controller for Signup Page.
  function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }
  
  //  for Insta Search Page Radio Button
  
	    $scope.data = {
		  group1 : 'All'
		};

		$scope.avatarData = [{
			id: "avatars:svg-1",
			title: 'avatar 1',
			value: 'avatar-1'
		  },{
			id: "avatars:svg-2",
			title: 'avatar 2',
			value: 'avatar-2'
		  },{
			id: "avatars:svg-3",
			title: 'avatar 3',
			value: 'avatar-3'
		}];

		$scope.radioData = [
		  { label: '1', value: 1 },
		  { label: '2', value: 2 },
		  { label: '3', value: '3', isDisabled: true },
		  { label: '4', value: '4' }
		];


		$scope.submit = function() {
		  alert('submit');
		};

		$scope.addItem = function() {
		  var r = Math.ceil(Math.random() * 1000);
		  $scope.radioData.push({ label: r, value: r });
		};

		$scope.removeItem = function() {
		  $scope.radioData.pop();
		};

	
  
  
  // Angular List for Insta Search By Developer.
   var imagePath = 'img/list/60.jpeg';

    $scope.phones = [
      {
        type: 'Home',
        number: '(555) 251-1234',
        options: {
          icon: 'communication:phone'
        }
      },
      {
        type: 'Cell',
        number: '(555) 786-9841',
        options: {
          icon: 'communication:phone',
          avatarIcon: true
        }
      },
      {
        type: 'Office',
        number: '(555) 314-1592',
        options: {
          face : imagePath
        }
      },
      {
        type: 'Offset',
        number: '(555) 192-2010',
        options: {
          offset: true,
          actionIcon: 'communication:phone'
        }
      }
    ];
    $scope.todos = [
      {
        face : imagePath,
        skills: 'Java, Wordpress',
		InstaLanguage: 'Hindi',
        topic: 'I want to create plugin',
        InstaDuration: '3.08 Hrs',
		activeParticipants: 2
      },
      {
        face : imagePath,
        skills: 'Java, Wordpress',
		InstaLanguage: 'Hindi',
        topic: 'I want to create plugin',
        InstaDuration: '3.08 Hrs',
		activeParticipants: 2
      },
      {
       face : imagePath,
        skills: 'Java, Wordpress',
		InstaLanguage: 'Hindi',
        topic: 'I want to create plugin',
        InstaDuration: '3.08 Hrs',
		activeParticipants: 2
      },
      {
        face : imagePath,
        skills: 'Java, Wordpress',
		InstaLanguage: 'Hindi',
        topic: 'I want to create plugin',
        InstaDuration: '3.08 Hrs',
		activeParticipants: 2
      },
      {
        face : imagePath,
        skills: 'Java, Wordpress',
		InstaLanguage: 'Hindi',
        topic: 'I want to create plugin',
        InstaDuration: '3.08 Hrs',
		activeParticipants: 2
      },
    ];
  
}])