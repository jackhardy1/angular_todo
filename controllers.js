toDoApp.controller('ToDoController', function() {

  var self = this;

  self.todos = [
    {task: 'Mow the lawn', completed: false},
    {task: 'Clean the toilet', completed: true}];

  self.addToDo = function(taskName) {
    self.todos.push({task: taskName, completed: false});
  }

  self.removeToDo = function(index) {
    self.todos.splice(index, 1);
  }
});
