// SHOW MOBILE MENU
// immediately invoked function expression


(function() {
  const menuInfo = document.getElementById("menu-info");
  const menuInfoClose = document.getElementById("menu-info-close");
  const menu = document.getElementById("mobile-menu");
    
  // show menu
  menuInfo.addEventListener("click", function() {
    menu.classList.toggle("show-menu");
  });
  // close menu
  menuInfoClose.addEventListener("click", function() {
    menu.classList.toggle("show-menu"); 
  });
})();

// SHOW OFFERs CONTAINER
// immediately invoked function expression


(function() {
  const viewOffers = document.getElementById("view-offers");
  const closeOffer = document.getElementById("close-offer");
  const container = document.getElementById("container");
    
  // show offers container
  viewOffers.addEventListener("click", function() {
    container.classList.toggle("show-container");
  });
  // close offers container
    closeOffer.addEventListener("click", function() {
    container.classList.toggle("show-container"); 
  });
})();



// OFFERS AND EXPERT'S ADVICE - offers scroller

const data = [
  {
    number: '1 from 3',
    name: '10% discount on contemporary patio and garden furniture.',
    description: 'Furniture with a 7-year guarantee available in five weave colours. Rattan all-weather furniture is durable in the harshest sunlight and the coldest winters and can be left outside all year round.',
    image: 'primary/img/7_1_gallery.jpg',
    alt: '10% discount on patio and garden furniture'
  },
  {
    number: '2 from 3',
    name: '10% discount on tall antiquated lighting for driveways.',
    description: 'Choose from a variety of electrical lighting that is durable and provides greater illumination. Mark your passage safely and in style with our precisely placed driveway lights.',
    image: 'primary/img/7_7_gallery.jpg',
    alt: '10% discount on antiquated lighting for driveways'
  },
  {
    number: '3 from 3',
    name: '15% discount on plant fragrant flowers for your garden or yard.',
    description: 'Create a succession of seasonal aromatherapies with our garden fragrant flowers and bushes in order to maximise the experience of you and your guests.',
    image: 'primary/img/7_8_gallery.jpg',
    alt: '15% discount on plant fragrant flowers for your garden or yard'
  },
];

const offers = offerIterator(data);

// Call first offer
nextOffer();

// Next Event
document.getElementById('next').addEventListener('click', nextOffer);

// Next offer Display
function nextOffer() {
  const currentOffer = offers.next().value;

  if(currentOffer !== undefined) {
    document.getElementById('offerDisplay').innerHTML = `
    <ul class="list-group">
        <li class="list-group-item">Offer Number: ${currentOffer.number}</li>
        <li class="list-group-item">Title: ${currentOffer.name}</li>
        <li class="list-group-item">Description: ${currentOffer.description}</li>
      </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentOffer.image}" alt="${currentOffer.alt}">`;
  } 
    
      
    else {
    // No more offers
    window.description.reload();
  }
}

// offer Iterator
function offerIterator(offers) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < offers.length ? 
      { value: offers[nextIndex++], done: false } : 
      { done: true }
    }
  };
}