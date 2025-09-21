const background = document.getElementById("background");
const birthdayCard = document.getElementById("birthdayCard");
const showCardBtn = document.getElementById("showCardBtn");

// Falling symbols
const symbols = ["🌹", "❤️", "✨"];
function createSymbol() {
  const symbol = document.createElement("div");
  symbol.classList.add("symbol");
  symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  symbol.style.left = Math.random() * 100 + "vw";
  symbol.style.fontSize = Math.random() * 20 + 20 + "px";
  symbol.style.animationDuration = (Math.random() * 3 + 3) + "s";
  background.appendChild(symbol);

  setTimeout(() => symbol.remove(), 6000);
}
setInterval(createSymbol, 500);

// Show card when button clicked
showCardBtn.addEventListener("click", () => {
  birthdayCard.style.display = "block";
  showCardBtn.style.display = "none";
});
