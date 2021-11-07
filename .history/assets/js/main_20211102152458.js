let banner_slide = document.querySelector("#slide");
let banner_slide_items = banner_slide.querySelectorAll(".slide-item");
let banner_slide_index = 0;
let banner_slide_play = true;
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
