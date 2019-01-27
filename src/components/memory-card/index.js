function createMemoryCard() {
  const $memoryCard = `
    <article class="memory-card">
      <img
        src='img/icon-collabcode.png'
        alt='Geuio mascote da collabcode'
        class='icon'
        onClick="handleClick()"
      />
    </article>
  `;
  return $memoryCard;
}

function createMemoryCardFront(){
  const $memoryCard = `
    <article class="memory-card -front">
      <img
        src='img/icon-c.png'
        alt='Geuio mascote da collabcode'
        class='icon'
        onClick="handleClick()"
      />
    </article>
  `;

  return $memoryCard;
}

function handleClick() {
  console.log("ae");
}
