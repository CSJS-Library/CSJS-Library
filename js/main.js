const links = document.querySelectorAll(".links");
console.log(links);

links.forEach((link) => {
  link.addEventListener("click", function () {
    links.forEach((l) => {
      l.classList.remove("selected");
    });
    link.classList.add("selected");
    console.log(link);
  });
});
