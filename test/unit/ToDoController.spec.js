describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl, ToDoFactory;

  beforeEach(inject(function($controller, _ToDoFactory_) {
    ctrl = $controller('ToDoController');
    ToDoFactory = _ToDoFactory_;
  }));

  it('initializes with two todos', function() {
    expect(ctrl.todos.length).toEqual(2);
  });

  it('todos have a name', function() {
    expect(ctrl.todos[0].text).toEqual('ToDo1');
  });

  it('todos have a complete status', function() {
    expect(ctrl.todos[0].completed).toEqual(false);
  });

  it('adds a new todo', function() {
    ctrl.addToDo('NewTodo');
    var todo = new ToDoFactory("NewTodo");
    expect(ctrl.todos.pop()).toEqual(todo);
  });

});
