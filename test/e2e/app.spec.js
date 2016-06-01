describe("app", function(){
  it("should have hello world on the homepage", function(){
    browser.get('/');
    expect($$("p").first().getText()).toEqual("Hello world");
  });
});
