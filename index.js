var users = [];
var i = 0;

var getData = (function($) {
  var URL =
    "https://api.github.com/repos/rowhitswami/hacktoberfest18-ft/contributors";

  $.get(URL, function(data, status) {
    if (data.length > 0) {
      data.forEach(function(user) {
        if (users.indexOf(user.login) == -1) {
          var name = user.login || "";

          if (user.type !== "User") {
            name = "Anonymous";
          }

          var template =
            "<div class='col-md-3 col-xs-6 col-lg-3' id='author'><div class='container-fluid'>" +
            "<a class='thumbnail' target='_blank' href='" +
            user.html_url +
            "'>" +
            "<img src='" +
            user.avatar_url +
            "' alt='' class='img-responsive'>" +
            "</a>" +
            "<div class='caption'>" +
            "<a target='_blank' href='" +
            user.html_url +
            "'>" +
            "<strong>" +
            user.login +
            "</strong>" +
            "</a>" +
            "<p>" +
            name +
            "</p>" +
            "</div></div></div>";

          $("#contributors").append(template);
          users[i] = user.login;
          i = i + 1;
        }
      });
    }
  });
})($);
