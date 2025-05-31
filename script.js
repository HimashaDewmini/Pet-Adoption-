 const pets = [
      { name: "Buddy", breed: "Golden Retriever", type: "dogs", img: "images/buddy.png" },
      { name: "Whiskers", breed: "Siamese Cat", type: "cats", img: "images/whisker.png" },
      { name: "Cotton", breed: "Rabbit", type: "rabbits", img: "images/cotton.png" },
      { name: "Chewy", breed: "Parrot", type: "birds", img: "images/chirpy.png" },
      { name: "Nibbles", breed: "Hamster", type: "other", img: "images/nibbles.png" },
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

    const petGrid = document.getElementById('petGrid');
    const categoryButtons = document.querySelectorAll('.categories button');

    function displayPets(petArray) {
      petGrid.innerHTML = '';
      petArray.forEach(pet => {
        const card = document.createElement('div');
        card.className = 'pet-card';
        card.innerHTML = `
          <img src="${pet.img}" alt="${pet.name}">
          <h3>${pet.name}</h3>
          <p>${pet.breed}</p>
        `;
        petGrid.appendChild(card);
      });
    }
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    

    hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
   
  });

    displayPets(pets);

    categoryButtons.forEach(button => {
      button.addEventListener('click', () => {
        const selectedType = button.getAttribute('data-category');
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        if (selectedType === 'all') {
          displayPets(pets);
        } else {
          const filteredPets = pets.filter(pet => pet.type === selectedType);
          displayPets(filteredPets);
        }
      });
    });
     const searchInput = document.getElementById('searchInput');

  // Search filter function
  searchInput.addEventListener('input', function () {
    const query = this.value.toLowerCase();

    const filteredPets = pets.filter(pet => {
      return (
        pet.name.toLowerCase().includes(query) ||
        pet.breed.toLowerCase().includes(query) ||
        (pet.location && pet.location.toLowerCase().includes(query))
      );
    });

    displayPets(filteredPets);
  });
  