toDoApp.service('ToDoService', ['$http', 'ToDoFactory', function($http, ToDoFactory) {
  var self = this;

  self.getAll = function() {
    var toDos = [];
    _fetchToDosFromApi(toDos)
    return toDos;
  }

  function _fetchToDosFromApi(toDos) {
    $http.get('http://quiet-beach-24792.herokuapp.com/todos.json')
      .then(function(response) {
        _handleResponseFromApi(response.data, toDos)
      });
  };

  function _handleResponseFromApi (data, toDos) {
    data.forEach(function(toDoData) {
      toDos.push(new ToDoFactory(toDoData.text, toDoData.completed));
    });
  };
}]);