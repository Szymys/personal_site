document.addEventListener("DOMContentLoaded", function() {
  const elMain = document.getElementById("typewriter");
  const elSub = document.getElementById("typewriter-sub");
  if (!elMain || !elSub) return;
  const mainText = elMain.getAttribute("data-text") || "";
  const subText = elSub.getAttribute("data-text") || "";
  elMain.textContent = "";
  elSub.textContent = "";
  let i = 0;

  function typeMain() {
    if (i < mainText.length) {
      elMain.textContent += mainText[i];
      i++;
      setTimeout(typeMain, 165);
    } else {
      setTimeout(typeSub, 350); // przerwa po pierwszej linii
    }
  }
  let j = 0;
  function typeSub() {
    if (j < subText.length) {
      elSub.textContent += subText[j];
      j++;
      setTimeout(typeSub, 165);
    }
  }
  typeMain();
});
