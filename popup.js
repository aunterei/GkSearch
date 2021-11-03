let websites = [
  {
    name: "G2A",
    baseurl: "https://www.g2a.com/search?query=",
    isChecked: true,
  },
  {
    name: "InstantGaming",
    baseurl: "https://www.instant-gaming.com/fr/rechercher/?q=",
    isChecked: true,
  },
  {
    name: "Kinguin",
    baseurl:
      "https://www.kinguin.net/listing?active=0&hideUnavailable=0&phrase=",
    isChecked: true,
  },
  {
    name: "Gamivo",
    baseurl: "https://www.gamivo.com/fr/search/",
    isChecked: true,
  },
];

document.querySelector("#searchButton").addEventListener("click", searchGame);

let cards = document.querySelectorAll(".websites__selection--website");

[...cards].forEach((card) => {
  card.addEventListener("click", function () {
    this.classList.toggle("selected");
    let index = websites.findIndex((obj) => obj.name === this.dataset.name);
    websites[index].isChecked = !websites[index].isChecked;
  });
});

document.querySelector("#searchedGame").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchGame();
  }
});

function searchGame() {
  console.log(websites);
  let searchedGame = document.querySelector("#searchedGame").value.trim();

  if (searchedGame != "") {
    let filteredWebsites = websites.filter((ws) => ws.isChecked === true);

    [...filteredWebsites].forEach((ws) => {
      chrome.tabs.create({
        url: `${ws.baseurl}${searchedGame}`,
      });
    });
  }
}
