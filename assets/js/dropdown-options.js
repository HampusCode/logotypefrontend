

function toggleOptionsDropdown(event) {
    if (event) {
      event.preventDefault();
    }
    var dropdown = document.getElementById("dropOp");
    dropdown.classList.toggle("show");
    dropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    document.getElementById("options-text").classList.toggle("changed");
  }
  


