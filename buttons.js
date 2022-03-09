mybutton = document.getElementById("backToTop");
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  
  mybutton2 = document.getElementById("goToBottom");
  function bottomFunction() {
    window.scrollTo(0,document.body.scrollHeight);
  }