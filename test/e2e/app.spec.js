describe("Todos tracker", function(){

  it("has two todos", function(){
    browser.get('/');
    var todoList = element.all(by.repeater('todo in controller.todos'));
    expect(todoList.get(0).getText()).toMatch("Name: ToDo1, Completed: false");
    expect(todoList.get(1).getText()).toMatch("Name: ToDo2, Completed: true");
  });

  describe("adding a todo", function(){
    browser.get('/');
    it("adds a todo to list", function(){
      $('input').sendKeys('ToDo3');
      $('#add-todo').click();
      var todoList = element.all(by.repeater('todo in controller.todos'));
      expect(todoList.get(2).getText()).toMatch("Name: ToDo3, Completed: false");
    });
  });

  it('can remove a ToDo', function() {
    browser.get('/');
    var todos = $$('#todos');
    $('#remove-todo').click();
    expect(todos.count()).toEqual(1);
  });

  it('can mark a ToDo as complete', function(){
    browser.get('/');
    var todo = $$('#todos').last();
    todo.element(by.css('.complete')).click();
    expect(todo.getText()).toMatch("Name: ToDo2, Completed: true");
  });

});
