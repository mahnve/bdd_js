function DemoPageLogic(demoPageView) {

  this.init = function() {
    demoPageView.addLinkClickedCallback(this.clickHandler);
  };

  this.clickHandler = function() {
    demoPageView.addText(); 
  };
}

function DemoPageView() {
  this.addText = function() {
  };

  this.addLinkClickedCallback = function(callback) {
    $('a').click(callback);
  };
}

$(document).ready(function() {
    var demoPageView = new DemoPageView();
    var demoPageLogic = new DemoPageLogic(demoPageView);
    demoPageLogic.init();
});

