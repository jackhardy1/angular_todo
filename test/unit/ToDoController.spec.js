describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl, httpBackend, ToDoFactory;
  var toDoData = [{text: "ToDo1", completed: true}, {text: "ToDo2", completed: false}];

  beforeEach(inject(function($httpBackend, $controller, _ToDoFactory_) {
    ctrl = $controller('ToDoController');
    ToDoFactory = _ToDoFactory_;
    httpBackend = $httpBackend;
    httpBackend.expectGET("http://quiet-beach-24792.herokuapp.com/todos.json").respond(toDoData);
    httpBackend.flush();
  }));


  it('initializes with two todos', function() {
    expect(ctrl.todos.length).toEqual(2);
  });

  it('todos have a name', function() {
    expect(ctrl.todos[0].text).toEqual('ToDo1');
  });

  it('todos have a complete status', function() {
    expect(ctrl.todos[0].completed).toEqual(true);
  });

  it('adds a new todo', function() {
    ctrl.addToDo('NewTodo');
    var todo = new ToDoFactory("NewTodo");
    expect(ctrl.todos.pop()).toEqual(todo);
  });

});
