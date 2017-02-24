const route = function route($stateProvider) {
  $stateProvider
    .state('pokemon', {
      parent: 'main',
      url: '/pokemon',
      template: '<pokemon></pokemon>'
    });
};

route.$inject = ['$stateProvider'];

export default route;
