toDoApp.factory('ToDoFactory', function() {
  var ToDo = function(taskName, completed) {
    this.task = taskName;
    this.completed = completed;
  };

  ToDo.prototype.complete = function() {
    this.completed = true;
  };

  return ToDo;
});