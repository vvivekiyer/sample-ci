describe('Book controller', function() {
  beforeEach(module('playlistModule'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  it('has a dummy spec to test 2 + 2', function() {
    expect(2+2).toEqual(4);
  });
  it('has a dummy spec to test 3 + 3', function() {
    expect(3+3).toEqual(5);
  });

  describe('$scope.name', function() {
    it('names the controller', function() {
      var $scope = {};
      var $routeParams = {};
      var controller = $controller('BookController', { $scope: $scope, $routeParams: $routeParams });
      expect($scope.name).toEqual('BookController');
    });
  });
});
