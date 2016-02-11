// Load demo images from flickr:
$(document).ready(function(){

  $.ajax({
      url: ('https://api.flickr.com/services/rest/'),
      data: {
          format: 'json',
          method: 'flickr.photos.search',
          api_key: 'ca0822352504844d5f25d0bbf8b2d75f',
          text: 'race bike',
          license: '7',
          sort: 'relevance',
          safe_search: '1',
          content_type: '1',
          per_page: '3'
      },
      dataType: 'jsonp',
      jsonp: 'jsoncallback'
  }).done(function (result) {
      var linksContainer = $('#links'),
          baseUrl;
      var counter = 1;
      console.log( result);
      $.each(result.photos.photo, function (index, photo) {
          var containerName = '#slide-'.concat( counter.toString());
          var containerNameTwo = '#bike-holder-'.concat( counter.toString());
          baseUrl = 'http://farm' + photo.farm + '.static.flickr.com/' +
              photo.server + '/' + photo.id + '_' + photo.secret;
          counter += 1;
          $( containerName.concat('> a') ).prop('href', baseUrl + '_z.jpg');
          $( containerName.concat('> a') ).prop('title', photo.title);
          $( containerName.concat('> a > img') ).prop('src', baseUrl + '_z.jpg');
          $( containerName.concat('> .container > div') ).prop('innerHTML','<h2>'.concat( photo.title, '</h2>'));
          $( containerNameTwo.concat('> a') ).prop('href', baseUrl + '_z.jpg');
          $( containerNameTwo.concat('> a') ).prop('title', photo.title);
          $( containerNameTwo.concat('> a > img') ).prop('src', baseUrl + '_z.jpg');
      });
  });
});
