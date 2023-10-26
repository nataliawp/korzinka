const splide = new Splide('.slider_box .splide', { 
    type: 'slide',
    
} );
splide.on( 'overflow', function ( isOverflow ) {
  // Reset the carousel position
  splide.go( 0 );

  splide.options = {
    arrows    : isOverflow,
    pagination: isOverflow,
    drag      : isOverflow,
    clones    : isOverflow ? undefined : 0, // Toggle clones
  };
} );
splide.mount();

var splideGallery = new Splide( '.gallery_box #main-carousel', {
  pagination: false,
} );

var thumbnails = document.getElementsByClassName( 'thumbnail' );
var current;

for ( var i = 0; i < thumbnails.length; i++ ) {
  initThumbnail( thumbnails[ i ], i );
}

function initThumbnail( thumbnail, index ) {
  thumbnail.addEventListener( 'click', function () {
    splide.go( index );
  } );
}

splideGallery.on( 'mounted move', function () {
  var thumbnail = thumbnails[ splideGallery.index ];

  if ( thumbnail ) {
    if ( current ) {
      current.classList.remove( 'is-active' );
    }

    thumbnail.classList.add( 'is-active' );
    current = thumbnail;
  }
} );
splideGallery.mount();
function myAbout() {
  var x = document.getElementById("myAbout");
  if (x.className === "fa fa-heart") {
    x.className = "fa fa-heart-o";
  } else {
    x.className = "fa fa-heart";
  }
}