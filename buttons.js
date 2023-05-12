mybutton = document.getElementById("backToTop");
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  
  mybutton2 = document.getElementById("goToBottom");
  function bottomFunction() {
    window.scrollTo(0,document.body.scrollHeight);
  }

/* Jquery arreglo de botones*/
if(buttonDemos.length > 0){
    buttonDemos.each(function( index, buttonDemo ) {
      var linkbuttonDemos = $(this).attr('href');
      if(linkbuttonDemos == '#demos'){
        console.log(linkbuttonDemos);
        $( this ).on( "click", function() {
          $('html, body').animate({
            scrollTop: $("#demos").offset().top
          }, 750);
        } );
      }
    });
  }
