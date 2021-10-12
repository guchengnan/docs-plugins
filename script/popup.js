$(document).ready(function () {
  $("a").click(function () {
    const url = $(this).attr("href");
    window.open(url)
    return false;
  });
});
