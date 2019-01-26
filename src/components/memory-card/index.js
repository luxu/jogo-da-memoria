function createMemoryCard() {
  const $memoryCard = document.createElement("article");

  const $iconCollab = `
  <img
  src='img/icon-collabcode.png'
  alt='Geuio mascote da collabcode'
  class='icon'/>
  `;

  $memoryCard.classList.add('memory-card');
  $wrapCards.insertBefore($memoryCard, null);

  $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
}

function createMemoryCardFront(){
  const $memoryCardFront = document.createElement("article");

  const $iconC = `
  <img
  src='img/icon-c.png'
  alt='Geuio mascote da collabcode'
  class='icon'/>
  `;

  $memoryCardFront.classList.add("memory-card");
  $memoryCardFront.classList.add("-front");
  $wrapCards.insertBefore($memoryCardFront, null);

  $memoryCardFront.insertAdjacentHTML("afterbegin", $iconC);
}
