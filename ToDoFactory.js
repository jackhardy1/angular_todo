toDoApp.factory('ToDoFactory', function() {
  var ToDo = function(taskName) {
    this.task = taskName;
    this.completed = false;
  };

  return ToDo;
});