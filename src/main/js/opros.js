const answerClass = "eighth__ans-item";
const cardClass = "eighth__quest";
const variantsCards = [...document.querySelectorAll(".eighth__res")];

document.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains(answerClass)) {
    onAnswerClick(target);
  }
});

function onAnswerClick(target) {
  const parent = target.closest(".eighth__quest");
  parent.classList.remove("active");

  if (parent) {
    const sibling = parent.nextElementSibling;

    if (sibling.classList.contains(cardClass)) {
      sibling.classList.add("active");
    } else {
      const variant = target.dataset.variant;
      onResult(variant);
    }
  }
}

function onResult(variant) {
  variantsCards[variant].classList.add("active");
}

