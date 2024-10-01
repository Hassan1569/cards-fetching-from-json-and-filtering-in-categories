const cardData = [
  { title: "Card 1", description: "This is card number 1.", category: "Category A", image: "Images/1.jpg" },
  { title: "Card 2", description: "This is card number 2.", category: "Category B", image: "Images/2.jpg" },
  { title: "Card 3", description: "This is card number 3.", category: "Category A", image: "Images/3.jpg" },
  { title: "Card 4", description: "This is card number 4.", category: "Category C", image: "Images/4.jpg" },
  { title: "Card 5", description: "This is card number 5.", category: "Category B", image: "Images/5.jpg" },
  { title: "Card 6", description: "This is card number 6.", category: "Category C", image: "Images/6.jpg" },
  { title: "Card 7", description: "This is card number 7.", category: "Category A", image: "Images/7.jpg" },
  { title: "Card 8", description: "This is card number 8.", category: "Category B", image: "Images/8.jpg" },
  { title: "Card 9", description: "This is card number 9.", category: "Category C", image: "Images/9.jpg" },
  { title: "Card 11", description: "This is card number 11.", category: "Category B", image: "Images/10.jpg" },
  { title: "Card 10", description: "This is card number 10.", category: "Category A", image: "Images/11.jpg" },
  { title: "Card 12", description: "This is card number 12.", category: "Category C", image: "Images/12.jpg" },
  { title: "Card 13", description: "This is card number 13.", category: "Category A", image: "Images/13.jpg" },
  { title: "Card 14", description: "This is card number 14.", category: "Category B", image: "Images/14.jpg" },
  { title: "Card 15", description: "This is card number 15.", category: "Category C", image: "Images/15.jpg" },
  { title: "Card 16", description: "This is card number 16.", category: "Category A", image: "Images/16.jpg" },
  { title: "Card 17", description: "This is card number 17.", category: "Category B", image: "Images/1.jpg" },
  { title: "Card 18", description: "This is card number 18.", category: "Category C", image: "Images/3.jpg" },
  { title: "Card 19", description: "This is card number 19.", category: "Category A", image: "Images/5.jpg" },
  { title: "Card 20", description: "This is card number 20.", category: "Category B", image: "Images/9.jpg" },
  { title: "Card 21", description: "This is card number 21.", category: "Category C", image: "Images/10.jpg" },
  { title: "Card 22", description: "This is card number 22.", category: "Category A", image: "Images/2.jpg" },
  { title: "Card 23", description: "This is card number 23.", category: "Category B", image: "Images/4.jpg" },
  { title: "Card 24", description: "This is card number 24.", category: "Category C", image: "Images/6.jpg" },
  { title: "Card 25", description: "This is card number 25.", category: "Category A", image: "Images/8.jpg" }
];

// Get the card container
const cardContainer = document.getElementById('card-container');

// Function to display cards using innerHTML
function displayCards(cards) {
  let cardsHTML = '';

  // Loop through the cards and generate HTML as a string
  cards.forEach((card) => {
      cardsHTML += `
          <div class="card">
              <img src="${card.image}" alt="${card.title}" class="card-image" height="300" width="300">
              <h3>${card.title}</h3>
              <p>${card.description}</p>
          </div>
      `;
  });

  // Assign the generated HTML string to the container's innerHTML
  cardContainer.innerHTML = cardsHTML;
}

// Initial display of all cards
displayCards(cardData);

// Function to filter cards by category
function filterCards(category) {
  if (category === 'all') {
      displayCards(cardData);
  } else {
      const filteredCards = cardData.filter(card => card.category === category);
      displayCards(filteredCards);
  }
}