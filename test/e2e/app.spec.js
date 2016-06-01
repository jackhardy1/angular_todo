describe("Todos tracker", function(){

  it("has two todos", function(){
    browser.get('/');
    var todoList = element.all(by.repeater('todo in controller.todos'));
    expect(todoList.get(0).getText()).toEqual("Name: ToDo1, Complete: false");
    expect(todoList.get(1).getText()).toEqual("Name: ToDo2, Complete: true");
  });

  describe("adding a todo", function(){
    browser.get('/');
    it("adds a todo to list", function(){
      $('input').sendKeys('ToDo3');
      $('button').click();
      var todoList = element.all(by.repeater('todo in controller.todos'));
      expect(todoList.get(2).getText()).toEqual("Name: ToDo3, Complete: false");
    });
  });
});
