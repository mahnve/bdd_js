describe("Demo Page Logic", function() {

  describe('someone clicks', function() {

    var demoPageLogic;
    var demoPageView;

     beforeEach(function() {
       demoPageView = new DemoPageView();
       demoPageLogic = new DemoPageLogic(demoPageView);
     });

     it('should add text to view', function() {
       spyOn(demoPageView, 'addText');
       demoPageLogic.clickHandler();
       expect(demoPageView.addText).toHaveBeenCalled();
     });

     it('should add addText as callback on init', function() {
       spyOn(demoPageView, 'addLinkClickedCallback');
       demoPageLogic.init();
       expect(demoPageView.addLinkClickedCallback).toHaveBeenCalledWith(demoPageLogic.clickHandler);
     });
  });
});

describe("Demo Page View", function() {

  var view;

  beforeEach(function() {
    view = new DemoPageView();
  });

  describe('without any text', function() {

    var testDOM;

    beforeEach(function() {
      $('body').append('<div id="text_here"></div>');
    });

    describe('when adding text', function() {
      beforeEach(function() {
        view.addText();
      });

      it('should have text added', function() {
        expect($('#text_here').text()).toEqual('Foo');
      });
    });
  })
});;
