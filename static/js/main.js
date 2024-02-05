var buttons = document.querySelectorAll(".navigation__link")
var sections = document.querySelectorAll("section")

sections[0].classList.add("section--actived")
buttons.forEach((button, i) => {
  button.onclick = function() {
    switch (i) {
      case 0:
        changeSection(i)
        break;
      case 1:
        changeSection(i)
        break;
      case 2:
        changeSection(i)
        break;
      case 3:
        changeSection(i)
        break;
      default:
        alert("El portfolio todavía no tiene habilitada esta sección")
        console.log("error")
    }
    changeButton(i)
  }
});

function changeButton(index) {
  buttons.forEach((button, j) => {
    if (j==index) {
      button.classList.add("navigation__link--active")
    } else {
      button.classList.remove("navigation__link--active")
    }
  });
}

function changeSection(index) {
  if (window.innerWidth >1307) {
    sections.forEach((section, j) => {
      if (j==index) {
        section.classList.remove("section--disabled")
        section.classList.add("section--actived")
      } else {
        section.classList.add("section--disabled")
        section.classList.remove("section--actived")
      }
    });
  }
}
