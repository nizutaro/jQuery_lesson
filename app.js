// $(document).ready(function () {
//   $(".message").html("<h1>Hello jQuery!!</h1>");
// });

// $(function () {
//   $(".box1").css({
//     "background-color": "#0000FF",
//     height: "100px",
// //   });
// // });

// // $(function () {
// //   $(".box1").slideDown();
// // });

// $(function () {
//   $(".box1").slideDown(function () {
//     $(".box1")
//       .css({
//         "background-color": "#0000FF",
//         width: "200px",
//         height: "100px",
//       })
//       .slideUp(1000);
//   });
// });
// $(function () {
//   $(".box1").show();
//   $(".box1").css({ "background-color": "#0000FF" });
// });

// $(function () {
//   $(".box1").hide();
// });

//6章 イベントの検知
//マウスオーバー
// $(function () {
//   $(".box1").mouseover(function () {
//     $(".box1").css({ "background-color": "#0000FF" });
//   });
//   $(".box1").mouseout(function () {
//     $(".box1").css({ "background-color": "#FF0000" });
//   });
// });

// ----------------------
// クラスの追加
// ----------------------
// $(function () {
//   $(".box1").mouseover(function () {
//     $(".box1").addClass("box1-ext");
//   });
//   $(".box1").mouseout(function () {
//     $(".box1").removeClass("box1-ext");
//   });
// });

// ------------------------
// マウスクリックイベント
// -----------------------

$(function () {
  $(".box1").on("click", function () {
    $(".box1").addClass("box1-ext");
  });
  $(".box1").mouseout(function () {
    $(".box1").removeClass("box1-ext");
  });
});
