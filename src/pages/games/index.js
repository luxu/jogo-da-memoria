(function () {
  const $root = document.querySelector("#root");

  const $cardsWrapper = createCardsWrapper();

  const createMemoryCard = memoryCard.create();

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

  $root.insertAdjacentElement("beforeend", $cardsWrapper);
})();
