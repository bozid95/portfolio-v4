$(document).ready(function () {
  $(".nav-link").click(function () {
    var menu = $(this).attr("id");
    if (menu == "homemenu") {
      $(".content").load("/pages/home.html");
    } else if (menu == "projectmenu") {
      $(".content").load("/pages/project.html");
    } else if (menu == "articlemenu") {
      $(".content").load("/pages/article.html");
    } else if (menu == "contactmenu") {
      $(".content").load("/pages/contact.html");
    } else if (menu == "skillmenu") {
      $(".content").load("/pages/skill.html");
    }
  });

  // halaman yang di load default pertama kali
  $(".content").load("/pages/home.html");
});
