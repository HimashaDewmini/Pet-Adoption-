const pets = [
  { name: "Buddy", breed: "Golden Retriever", type: "dogs", img: "images/buddy.png" },
  { name: "Whiskers", breed: "Siamese Cat", type: "cats", img: "images/whisker.png" },
  { name: "Cotton", breed: "Rabbit", type: "rabbits", img: "images/cotton.png" },
  { name: "Chewy", breed: "Parrot", type: "birds", img: "images/chirpy.png" },
  { name: "Nibbles", breed: "Hamster", type: "other", img: "images/nibbles.png" }
];

const petDogs = [
  { name: "Max", breed: "Labrador Retriever", type: "dogs", img: "images/max.png" },
  { name: "Bella", breed: "Poodle", type: "dogs", img: "images/bella.png" },
  { name: "Charlie", breed: "Beagle", type: "dogs", img: "images/charlie.png" },
  { name: "Lucy", breed: "Golden Retriever", type: "dogs", img: "images/lucy.png" },
  { name: "Cooper", breed: "German Shepherd", type: "dogs", img: "images/cooper.png" },
  { name: "Daisy", breed: "French Bulldog", type: "dogs", img: "images/daisy.png" },
  { name: "Rocky", breed: "Boxer", type: "dogs", img: "images/rocky.png" },
  { name: "Lola", breed: "Shih Tzu", type: "dogs", img: "images/lola.png" },
  { name: "Milo", breed: "Milo", type: "dogs", img: "images/milo.png" },
  { name: "Sadie", breed: "Yorkshire Terrier", type: "dogs", img: "images/sadie.png" },
  { name: "Tucker", breed: "Rottweiler", type: "dogs", img: "images/tucker.png" },
  { name: "Chloe", breed: "Golden Retriever", type: "dogs", img: "images/chloe.png" },
  { name: "Oliver", breed: "Siberian Husky", type: "dogs", img: "images/oliver.png" },
  { name: "Sophie", breed: "Cocker Spaniel", type: "dogs", img: "images/sophie.png" },
  { name: "Jack", breed: "Great Dane", type: "dogs", img: "images/jack.png" },
  { name: "Lily", breed: "Bernese Mountain Dog", type: "dogs", img: "images/lily.png" }
];

const petGridGeneral = document.getElementById('petGridGeneral');
const petGridDogs = document.getElementById('petGridDogs');
const categoryButtons = document.querySelectorAll('.categories button');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const searchInput = document.getElementById('searchInput');

// Display pets in a grid
function displayPets(petArray, targetGrid) {
  targetGrid.innerHTML = '';
  petArray.forEach(pet => {
    const card = document.createElement('div');
    card.className = 'pet-card';
    card.innerHTML = `
      <img src="${pet.img}" alt="${pet.name}">
      <h3>${pet.name}</h3>
      <p>${pet.breed}</p>
    `;
    targetGrid.appendChild(card);
  });
}

// Always show full general pet list initially
displayPets(pets, petGridGeneral);

// Hide dogs grid by default
petGridDogs.parentElement.style.display = 'none';

// Handle category filter for dogs only
categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedType = button.getAttribute('data-category');

    categoryButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    if (selectedType === 'dogs') {
      displayPets(petDogs, petGridDogs);
      petGridDogs.parentElement.style.display = 'block';
    } else {
      petGridDogs.parentElement.style.display = 'none';
    }

    // Note: petGridGeneral is untouched — always shows full pets list.
  });
});

searchInput.addEventListener('input', function () {
  const query = this.value.toLowerCase();

  // Combine general pets and dogs into one array
  const allPets = [...pets, ...petDogs];

  // Filter pets by matching name, breed, or location (if exists)
  const filteredPets = allPets.filter(pet =>
    (pet.name && pet.name.toLowerCase().includes(query)) ||
    (pet.breed && pet.breed.toLowerCase().includes(query)) ||
    (pet.location && pet.location.toLowerCase().includes(query))
  );

  // Show filtered pets in the general grid only
  displayPets(filteredPets, petGridGeneral);
  petGridGeneral.parentElement.style.display = 'block';

  // Always hide the dogs grid
  petGridDogs.parentElement.style.display = 'none';
});


// Hamburger menu toggle
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
