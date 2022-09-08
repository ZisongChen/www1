if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}
function initializeCode() {
  const add = document.getElementById("add-data");
  add.addEventListener("click", function () {
    var t = document.getElementById("m").value;
    const ul = document.getElementById("notes");
    var lin = document.createElement("li");
    lin.innerText = t;
    ul.appendChild(lin);
  });
}
