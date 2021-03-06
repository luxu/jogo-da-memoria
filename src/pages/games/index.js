(function () {
  const $root = document.querySelector("#root");

  const $cardsWrapper = createCardsWrapper();
  const createMemoryCard = memoryCard.create();

  const $pointBar = pointBar.create();
  const $layerStart = layerStart.render("Vai")
  // const $transparencyLayer = transparencyLayer.render();
  // const $gameButton = gameButton.render("Vai");

  const $memoryCardC = createMemoryCard({
    src: "img/icon-c.png",
    alt: "Ícone de um livro da linguagem C++"
  });

  const $memoryCardJS = createMemoryCard({
    src: "img/icon-js.png",
    alt: "Ícone de um livro da linguagem JavaScript"
  });

  const $memoryCardJava = createMemoryCard({
    src: "img/icon-java.png",
    alt: "Ícone de um livro da linguagem Java"
  });

  const $memoryCardPHP = createMemoryCard({
    src: "img/icon-php.png",
    alt: "Ícone de um livro da linguagem PHP"
  });

  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPHP);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPHP);

  $root.insertAdjacentHTML("afterbegin", $pointBar);
  $root.insertAdjacentElement("beforeend", $cardsWrapper);
  $root.insertAdjacentHTML("beforeend", $layerStart);
  // $root.insertAdjacentHTML("beforeend", $transparencyLayer);
  // $root.insertAdjacentHTML("beforeend", $gameButton);
})();
