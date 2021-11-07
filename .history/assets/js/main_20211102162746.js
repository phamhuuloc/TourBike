let banner_slide = document.querySelector("#slide");
let banner_slide_items = banner_slide.querySelectorAll(".slide-item");
let banner_slide_index = 0;
let banner_slide_play = true;
let banner_slide_control_items = banner_slide.querySelectorAll(
  ".slide-control-item"
);
showSlide = (index) => {
  banner_slide.querySelector(".slide-item.active").classList.remove("active");
  banner_slide_items[index].classList.add("active");
};
nextSlide = () => {
  banner_slide_index =
    banner_slide_index + 1 === banner_slide_items.length
      ? 0
      : banner_slide_index + 1;
  showSlide(banner_slide_index);
};
// pause slide when mouse come in slider
banner_slide.addEventListener("mouseover", () => (banner_slide_play = false));
// resume slide  when mouse log out slider
banner_slide.addEventListener("mouseleave", () => (banner_slide_play = true));
setTimeout(() => {
  banner_slide_items[0].classList.add("active");
}, 200);

// auto next slide
// setInterval(() => {
//   if (!banner_slide_play) return;
//   nextSlide();
// }, 5000);
