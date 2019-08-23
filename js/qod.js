(function($) {
  $(function() {
    //1 get request wp/v2/posts
    $('#new-quote-button').on('click', function(event) {
      event.preventDefault();
      $.ajax({
        method: 'get',
        url:
          qod_api.rest_url +
          'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1'
      })
        .done(function(data) {
          newQuote = data[0];
          $('.entry-content').html(newQuote.content.rendered);
          $('#author').html('- ' + newQuote.title.rendered);
          if (newQuote._qod_quote_source && newQuote._qod_quote_source_url) {
            $('#source').html(
              "<div class='source' id='source'>, <a href='" +
                newQuote._qod_quote_source_url +
                "'>" +
                newQuote._qod_quote_source +
                '</a></div>'
            );
          } else if (
            newQuote._qod_quote_source &&
            !newQuote._qod_quote_source_url
          ) {
            $('#source').html(
              "<div class='source' id='source'>, " +
                newQuote._qod_quote_source +
                '</div>'
            );
          } else {
            $('#source').html('');
          }
        })
        .fail(function(err) {
          console.log('error', err);
        });
    });

    //2 post request for wp/v2/posts
    $('#quote-submission-form').on('submit', function(event) {
      const authorVal = $('#author').val();
      const quoteVal = $('#quote').val();
      const sourceVal = $('#source').val();
      const sourceURLVal = $('#source_url').val();

      event.preventDefault();

      $.ajax({
        method: 'post',
        url: qod_api.rest_url + 'wp/v2/posts/',
        data: {
          title: authorVal,
          content: quoteVal,
          _qod_quote_source: sourceVal,
          _qod_quote_source_url: sourceURLVal
        },
        beforeSend: function(xhr) {
          xhr.setRequestHeader('X-WP-Nonce', qod_api.wpapi_nonce);
        }
      })
        .done(function(response) {
          $('.submit-form').slideUp();
          $('.hidden-message')
            .slideDown()
            .delay(1800);
        })
        .fail(function() {
          //fail message
        });
    });
  });
})(jQuery);
