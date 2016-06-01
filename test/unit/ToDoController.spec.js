describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoController');
  }));

  it('initializes with two todos', function() {
    expect(ctrl.todos.length).toEqual(2);
  });

  it('todos have a name', function() {
    expect(ctrl.todos[0].name).toEqual('ToDo1');
  });

  it('todos have a complete status', function() {
    expect(ctrl.todos[0].complete).toEqual(false);
  });

  // it('adds a new todo', function() {
  //   ctrl.addToDo('NewTodo');
  //   var todo = {text: "NewTodo", completed: false};
  //   expect(ctrl.todos.pop()).toEqual(todo);
  // });

});
