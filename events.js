function plusHover() {
  const plus = document.getElementById("plus");
  const plusIcon = document.getElementById("plusIcon");

  plusIcon.addEventListener("mouseenter", () => {
    plus.classList.add("hover");
  });

  plus.addEventListener("mouseleave", () => {
    plus.classList.remove("hover");
  });
}
