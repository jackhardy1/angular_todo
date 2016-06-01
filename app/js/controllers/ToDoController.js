toDoApp.controller('ToDoController', [function() {
  var self = this;

  self.todos = [
                {name:'ToDo1', complete: false},
                {name:'ToDo2', complete: true}
               ];

  self.addToDo = function(todoText) {
    self.todos.push({name: todoText, complete: false});
  };
}]);
