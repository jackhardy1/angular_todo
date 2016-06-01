describe("Todos tracker", function(){
  it("has two todos", function(){
    browser.get('/');
    var todoList = element.all(by.repeater('todo in controller.todos'));
    expect(todoList.get(0).getText()).toEqual("Name: ToDo1, Complete: false");
    expect(todoList.get(1).getText()).toEqual("Name: ToDo2, Complete: true");
  });
});
