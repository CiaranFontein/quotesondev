(function($) {
  $(function() {
    //ajax javascript

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
          console.log(data);
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
          alert('Success! Quote successfully submitted');
          $('.submit-form').addClass('submit-form--hidden');
          //TD hide form using slide toggle or something like that or slide up
          //append message thanks for submitting
        })
        .fail(function() {
          //fail message
        });
    });
  });
})(jQuery);
