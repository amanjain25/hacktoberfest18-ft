var users = [];
var i = 0;

var getData = (function($) {
  var URL =
    "https://api.github.com/repos/rowhitswami/hacktoberfest18-ft/contributors?per_page=500";

  $.get(URL, function(data, status) {
    if (data.length > 0) {
      data.forEach(function(user) {
        if (users.indexOf(user.login) == -1) {
          var name = user.login || "";

          if (user.type !== "User") {
            name = "Anonymous";
          }

          var template =
            "<div class='contributors-cell mdl-cell mdl-card'>" +
              "<div class='contributors-card__media mdl-card__media'" +
                "style='background: url(" +
                  user.avatar_url +
                ") center / cover;'>" +
              "</div>" +
              "<div class='mdl-card__supporting-text'>" +
                user.login +
              "</div>" +
              "<div class='mdl-card__actions mdl-card--border'>" +
                "<a class='mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect'" +
                  "target='_blank' href='" +
                    user.html_url +
                "'>See</a>" +
              "</div>" +
            "</div>";

          $("#contributors").append(template);
          users[i] = user.login;
          i = i + 1;
        }
      });
    }
  });
})($);
