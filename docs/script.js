$(document).ready(function() {
  console.log(window.location.pathname);

  loadContent("topMount");

  $(".installation-btn").click(function() {
    loadContent(this);
    $(".installation-btn").removeClass('active');
    $(this).addClass('active');
  });

  switch (window.location.pathname) {
    case ("/installation/"):
      $(".installation-btn").click(function() {
        console.log("wowza");
      });
      break;
    default:

  }

  function loadContent(buttonId) {
    if ((typeof buttonId) === 'string') {
      $("#content").load("../components/" + buttonId + ".html");
    }
    else {
      $("#content").load("../components/" + $(buttonId).attr("id") + ".html");
    }
  }

});
