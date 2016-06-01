describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoController');
  }));

  it('initializes with a toDo', function() {
    expect(ctrl.todo).toEqual('ToDo1');
  });
});