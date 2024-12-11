const template = document.querySelector("template");
const cards = [
  {
    name: "Luke",
    pic: "warrior.png",
    price: 2400
  },
  {
    name: "Leia",
    pic: "archer.png",
    price: 1400
  },
  {
    name: "Obi One",
    pic: "mage.png",
    price: 3400
  },
];

template.remove();

showCards();

function showCards() {
  for (const card of cards) {
    let html = template.innerHTML;
  
    for (const key in card) {
      const value = card[key];
  
      html = html.replace(key, value)
    }
  
    document.body.innerHTML += html
  }
}