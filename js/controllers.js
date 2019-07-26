angular
  .module("phonecatControllers", [
    "templateservicemod",
    "navigationservice",
    "starwarsservicemod",
    "ui.bootstrap"
  ])

  .controller("HomeCtrl", function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("home"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Fizz Buzz"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.numbers = _.times(100, function(n) {
      var number = n + 1;
      var obj = {
        number: number,
        fizz: number % 3 == 0,
        buzz: number % 5 == 0
      };
      return obj;
    });
  })

  .controller("PaginationCtrl", function(
    $scope,
    TemplateService,
    NavigationService,
    $http,
    StarwarService
  ) {
    $scope.template = TemplateService.changecontent("pagination"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Pagination"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    /**
     * Start Of Star Wars Characters
     */
    $scope.starWarsCharactersPage = 1;
    $scope.starWarsCharactersPageIndex = 0;
    $scope.starWarsCharacters = null;
    $scope.totalStarWarsCharacters = 0;
    $scope.searchText = "";
    $scope.getStarWarsCharacters = function(param, event) {
      StarwarService.callStarWars(param, event, 10, $scope.searchText, function(
        err,
        data
      ) {
        if (err) {
        } else {
          $scope.starWarsCharactersPage = data.page;
          $scope.starWarsCharacters = data.starWarsCharacters;
          $scope.starWarsCharactersPageIndex = data.starWarsCharactersPageIndex;
          $scope.totalStarWarsCharacters = data.totalStarWarsCharacters;
        }
      });
    };

    // Default Call to getStarWarsCharacters with default page as 1
    $scope.getStarWarsCharacters(1, "pageChange");

    /**
     * End Of Star Wars Characters
     */
  })
  .controller("StarWarsCtrl", function(
    $scope,
    TemplateService,
    NavigationService
  ) {
    $scope.template = TemplateService.changecontent("star-wars"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Star Wars"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
  })

  .controller("headerctrl", function($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on("$stateChangeSuccess", function(
      event,
      toState,
      toParams,
      fromState,
      fromParams
    ) {});
  });
