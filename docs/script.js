$(document).ready(function() {
  console.log(window.location.pathname);

  loadContent("topMount");

  $(".installation-btn").click(function() {
    loadContent(this);
    $(".installation-btn").removeClass('active');
    $(this).addClass('active');
  });

  $('#sendEmail').on('click', function (e) {
    e.preventDefault();
    submitContactForm();
  })

  switch (window.location.pathname) {
    case ("/installation/"):
      $(".installation-btn").click(function() {
        console.log("wowza");
      });
      break;

    case ("/contact/"):
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

  function submitContactForm() {
    var firstName = $("#first-name").val();
    var lastName = $("#last-name").val();
    var subject = $("#subject").val();
    var message = $("#message").val();

    var emailBody = "Name: " + firstName + " " + lastName + " MESSAGE: " + message;

    if (firstName && lastName && subject && message) {
      window.location = 'mailto:' + "brandonmowat11@gmail.com" + '?subject=' + subject + '&body=' + emailBody;
    }
  }

});
