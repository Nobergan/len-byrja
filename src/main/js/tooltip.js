import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";

tippy("#th__after-one", {
  content:
    "Тебе достаточно выбрать один из инвестиционных портфелей с оптимальным для тебя набором активов. Торговать наугад не нужно.",
  placement: "bottom",
  arrow: false,
  //   animation: "scale-subtle",
  //   duration: 1000,
  //   delay: 300,
  theme: "theme",
});

tippy("#th__after-two", {
  content:
    "Здесь видно сумму, которую заработал реальный человек на последней сделке",
  placement: "bottom",
  arrow: false,
  //   animation: "scale-subtle",
  //   duration: 1000,
  //   delay: 300,
  theme: "theme",
});

tippy("#th__after-three", {
  content: "Тут можно проследить рост или снижение цены на тот или иной актив",
  placement: "bottom",
  arrow: false,
  //   animation: "scale-subtle",
  // duration: 300,
  // delay: 300,
  theme: "theme",
});

tippy("#th__after-four", {
  content:
    "Эта цифра показывает прибыль от твоего депозита, если ты купишь актив сегодня",
  placement: "bottom",
  arrow: false,
  //   animation: "scale-subtle",
  //   duration: 1000,
  //   delay: 300,
  theme: "theme",
});
