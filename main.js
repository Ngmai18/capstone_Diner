/**
Solution: 
Khi click vào nút moon 🌙 , thẻ body sẽ được thêm class dark.
Dựa vào class dark, ta viết css dành riêng cho dark theme.

Ngược lại, khi click vào nút sun ☀️, ta sẽ xóa class dark để css light theme hiện lại

*/



// Xử lý khi click vào icon mặt trăng
const icon_header_moon = document.getElementById("icon_header_moon");
const icon_sun = document.getElementById("icon_header_sun");
const search_input_header = document.getElementById("search_input_header");
const search_icon_header = document.getElementById("search_icon_header");
const body = document.getElementById("myBody");

icon_header_moon.addEventListener("click", function () {
  // Bạn đợi tôi chút tôi nghĩ cách ết cho tối ưu
  icon_sun.classList.toggle("hide_icon_header");
  icon_header_moon.classList.toggle("hide_icon_header");
  search_input_header.classList.add("search__input_dark");
  search_icon_header.classList.add("search__icon_dark");
  body.classList.add("body_dark");
});

icon_sun.addEventListener("click", function () {
  icon_sun.classList.toggle("hide_icon_header");
  icon_header_moon.classList.toggle("hide_icon_header");
  search_input_header.classList.remove("search__input_dark");
  search_icon_header.classList.remove("search__icon_dark");
  body.classList.remove("body_dark");
});


// Count Up

const c1 = new countUp.CountUp("countUp1", 15100);
c1.start();
const c2 = new countUp.CountUp("countUp2", 19256);
c2.start();
const c3 = new countUp.CountUp("countUp3", 12100);
c3.start();
const c4 = new countUp.CountUp("countUp4", 2560);
c4.start();

