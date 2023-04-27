// const menuIcon = document.getElementById("menu-icon");
// const dropdownMenu = menuIcon.querySelector(".dropdown-menu");
// const dropdownArrow = menuIcon.querySelector(".dropdown-arrow");

// menuIcon.addEventListener("click", function() {
//   if (dropdownMenu) {
//     dropdownMenu.classList.toggle("show");
//   } else {
//     console.error("Dropdown menu not found");
//   }
// });


const menuIcon = document.getElementById("menu-icon");
const dropdownMenu = menuIcon.querySelector(".dropdown-menu");
const menuImage = menuIcon.querySelector("img");

menuIcon.addEventListener("click", function() {
  if (dropdownMenu) {
    dropdownMenu.classList.toggle("show");
    
    
  } else {
    console.error("Dropdown menu not found");
  }

  // Toggle menu image
  if (menuImage.getAttribute("src") === "images/bars.png") {
    menuImage.setAttribute("src", "images/arrowdropdown.png");
    
  } else {
    menuImage.setAttribute("src", "images/bars.png");
    
  }
});

// Get the popup element
var popup = document.getElementById("popup");

// Get the button that opens the popup
var btn = document.getElementById("about-link");

// Get the <span> element that closes the popup
var span = document.createElement("span");
span.innerHTML = "&times;";
span.setAttribute("class", "close");
popup.appendChild(span);

// When the user clicks the button, open the popup
btn.onclick = function() {
    popup.style.display = "block";
}

// When the user clicks on <span> (x), close the popup
span.onclick = function() {
    popup.style.display = "none";
}

// When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

