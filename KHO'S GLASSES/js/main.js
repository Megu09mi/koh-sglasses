$(function () {
  // ハンバーガーメニュー
  $(".hamburger, .mask, nav a").on("click", function () {
    $("header").toggleClass("open");
  });

  // スムーススクロール
  $('a[href^="#"]').click(function () {
    let target = $(this).attr("href") == "#" || "" ? "html" : $(this).attr("href");
    $("html, body").animate({ scrollTop: $(target).offset().top }, 600, "swing");
    return false; 
  });

  // PICK UP スライダー


  // スクロール時の画像フェード表示
  $(window).scroll(function () {
    $(".fadein").each(function () {
      if ($(window).scrollTop() > $(this).offset().top - $(window).height() + 200) {
        $(this).css({ "opacity": "1", "transform": "translateY(0)" });
      }
    });
  });

  // ヘッダー固定
  var pos = $("header").offset().top;
  var height = $("header").outerHeight();
  $(window).scroll(function () {
    if ($(this).scrollTop() > pos) {
      $("header").addClass("fix");
      $("body").css("padding-top", height);
    } else {
      $("header").removeClass("fix");
      $("body").css("padding-top", 0);
    }
  });
});
