const toggleBtnRef = document.querySelector(".toggle-btn");
const articleTextRef = document.querySelector(".fifth__desk-box");

toggleBtnRef.addEventListener("click", onBtnToggle);

function onBtnToggle() {
  articleTextRef.classList.toggle("open-text");

  if (articleTextRef.classList.contains("open-text")) {
    toggleBtnRef.textContent = "Свернуть информацию";
  } else {
    toggleBtnRef.textContent = "Узнать больше";
  }
}
