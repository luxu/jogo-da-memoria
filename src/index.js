const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $icon = `
<img
src='img/icon-collabcode.png'
alt='Geuio mascote da collabcode'
class='icon'/>
`;

$memoryCard.classList.add('memory-card');
$root.insertBefore($memoryCard, null);
$memoryCard.insertAdjacentHTML("afterbegin", $icon);
