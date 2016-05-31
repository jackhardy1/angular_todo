toDoApp.controller('ToDoController', ['ToDoService', 'ToDoFactory', function(ToDoService, ToDoFactory) {

  var self = this;

  self.toDos = ToDoService.getAll();

  self.addToDo = function(taskName) {
    self.toDos.push(new ToDoFactory(taskName));
  }

  self.removeToDo = function(index) {
    self.toDos.splice(index, 1);
  }
}]);
