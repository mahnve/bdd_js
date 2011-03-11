!SLIDE 
# How it used to be #

    @@@ Javascript
    $(this).click(function() {
      $(this).fadeOut('slow', function() {
      });
    });

!SLIDE commandline
# Now #

    $ wc -l *.js

      519 message_view.js
      50 search_view.js
      266 subscriptions_page.js
      85 user_view.js
      50 client_page.js
      12 autosubmit.js
      237 base_view.js
    1219 total

!SLIDE code
# See the problem?

    @@@ Javascript
    var setupFileUpload = function () {
      $('#message_form .file_attachment').change(function() {
        $(this).upload('/upload/attachment', function(res) {
          if (res.status === "success") {
            $('.upload-field').val("");
            var selector = $(".ui-tabs-selected a").attr("href") 
              tab_number = tab_id[tab_id.length-1];
              browser.jQuery.createFileElement(res, tab_number)
                .appendTo(selector);
          }
        }, 'json');
      });
    }; 

!SLIDE bullets
# Javascript and Testing

* Not the same testing culture as Java and Ruby
* Code seldom separated
* Tests run in browser
