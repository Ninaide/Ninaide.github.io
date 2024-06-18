// Below shows the code for the drag and drop function.
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

  function playSound(e) {
    const soundId = e.target.id;
    const audio = new Audio(`sounds/${soundId}.mp3`);
    audio.play();
  }
});
