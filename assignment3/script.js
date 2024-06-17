document.addEventListener("DOMContentLoaded", (event) => {
  const images = document.querySelectorAll(".draggable");
  const boxes = document.querySelectorAll(".box");

  images.forEach((image) => {
    image.addEventListener("dragstart", dragStart);
  });

  boxes.forEach((box) => {
    box.addEventListener("dragover", dragOver);
    box.addEventListener("drop", drop);
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
