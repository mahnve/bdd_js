!SLIDE subsection
# Logic Tests With JsTestDriver

!SLIDE code
    @@@Javascript
    TestCase("FooLogicTest", {

      testReportDatesHidden : function() {
        var mockControl = new MockControl();
        var fooPageViewMock = 
          mockControl.createDynamicMock(FooPageView);
        fooPageViewMock.expects().hideReportDates();
        var fooPageLogic = 
          new FooPageLogic(fooPageViewMock);
        var result = fooPageLogic.init();
        mockControl.verify();
      }
    });

!SLIDE subsection
# Logic Specs With Jasmine

!SLIDE code
    @@@Javascript
    describe('foo view controller', function() {

      describe('a view for an existing foo', function() { 

        var fooPageView;
        var fooPageLogic;

        beforeEach(function() {
            fooPageView = new FooPageView();
            fooPageLogic = 
              new FooPageLogic(fooPageView);
            spyOn(fooPageView, 'setDatePickerFormat');
            spyOn(fooPageView, 'ckEditorifyEditors');
        });

!SLIDE code
    @@@Javascript
        describe('showing something that is not a bar', function() {
          it('should not show dates', function() {

            spyOn(fooPageView, 
                  'getFooCategory').andReturn('returnValue');
            spyOn(fooPageView, 'hideDates');

            fooPageLogic.init();
            expect(fooPageView.hideDates)
              .toHaveBeenCalled();
          });
        });
      });
    });


!SLIDE subsection
#View Tests

!SLIDE code

    @@@Javascript

    testGetLanguageOfClosedTab: function() {
      $('body').append(
        '<div id="language_navigation">' +
        '<ul><li>' +
        '<a href="#" id="sv"/>' + 
        '<span id="close_sv">' +
        '</li><li><a href="#" id="en"/>' +
        '<span id="close_en"></li></ul></div>')';
      fooView = new FooPageView();
      assertEquals('en', 
        fooView.getLanguageOfClickedTab('#close_en'));
    }

!SLIDE subsection
# View Specs From Scratch

!SLIDE code Javascript

    @@@Javascript
    describe('ThingsPageView', function() {

      var view;

      beforeEach(function() {
        view = new ThingsPageView();
      });

!SLIDE code

    @@@Javascript
      describe('with a list of three things', function() {

        beforeEach(function() {
          $('#test').append(
            '<select id="available_thingss" multiple="multiple">' +
              '<option value="1">1</option>' +
              '<option value="2">2</option>' +
              '<option value="3">3</option>' +
            '</select>');
        });

!SLIDE code

    @@@Javascript
        describe('when removing a thing from available list', function() {
          beforeEach(function() {
            view.removeAvailableThings(1);
          });

          it('should not be in the list anymore', function() {
            expect($('#available_thingss option:first').text()).toEqual('2');
          });
        });
      });
    });
