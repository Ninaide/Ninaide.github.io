// Below shows the code for the drag and drop function. The code allows for any animal image on the left side
// of the screen to be dragged onto any coloured box on the right side.
// However, if the image doesn't get dragged onto a coloured box (dragged anywhwere else on the screen),
// the image disappears and the page needs to be reset. I have no clue why this happens, but the code does
// allow for the icons to be placed on the coloured boxes so I would call that a success.

// I did have some trouble getting the js to function properly and as such I did search up my issues to see if I could find a solution to
// the issues I was having. I used a combination of YouTube, W3schools and ChatGPT. While I did use these resouces to make the code functional,
// it was not written up externally. Below is what ended up working to ensure the drag and drop function was a success.
document.addEventListener("DOMContentLoaded", (event) => {
  const images = document.querySelectorAll(".draggable");
  const boxes = document.querySelectorAll(".box");
  const soundButtons = document.querySelectorAll(".sound-button");

  images.forEach((image) => {
    image.addEventListener("dragstart", dragStart);
  });

  boxes.forEach((box) => {
    box.addEventListener("dragover", dragOver);
    box.addEventListener("drop", drop);
  });

  soundButtons.forEach((button) => {
    button.addEventListener("click", playSound);
  });

  function dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
    setTimeout(() => {
      e.target.style.display = "none";
    }, 0);
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function drop(e) {
    e.preventDefault();
    const id = e.dataTransfer.getData("text");
    const draggable = document.getElementById(id);
    draggable.style.display = "block";
    e.target.appendChild(draggable);
  }
});
