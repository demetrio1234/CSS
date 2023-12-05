const main = document.querySelector("body main");

console.log(main);

main.addEventListener("click", function (event) {
  const cName = event.target.className;

  switch (cName) {
    case "btn-span":
      let menu = document.querySelector("#nav");

      if (menu.classList.contains("hidden") == false) {
        menu.classList.add("hidden");
      } else {
        menu.classList.remove("hidden");
      }
      break;
    case "btn-span-green":
      break;
    case "btn-span-red":
      break;
    default:
      console.log(`Sorry, we are out of ${expr}.`);
  }
});
