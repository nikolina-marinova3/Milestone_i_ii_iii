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



// PRICE and OFFERS - offers scroller

const data = [
  {
    number: '1 от 3',
    name: '10% намаление на градинска мебел.',
    description: 'Градинска мебел със седемгодишна гаранция. Налична в различни цветове и подходяща за всякакви метереологични условия. ',
    image: 'primary/img/7_1_gallery.jpg',
    alt: '10% намаление на градинска мебел'
  },
  {
    number: '2 от 3',
    name: '10% намаление на осветление за алеи.',
    description: 'Осветление за алеи - стил античен. Подобрява видимостта през нощта.',
    image: 'primary/img/7_7_gallery.jpg',
    alt: '10% намаление на осветление за алеи.'
  },
  {
    number: '3 от 3',
    name: '15% намаление на ароматни растения.',
    description: '15% намаление на ароматни растения - цветя и храсти за вашия двор или градина.',
    image: 'primary/img/7_2_gallery.jpg',
    alt: '15% намаление на ароматни растения'
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
        <li class="list-group-item">Номер: ${currentOffer.number}</li>
        <li class="list-group-item">Оферта: ${currentOffer.name}</li>
        <li class="list-group-item">Описание: ${currentOffer.description}</li>
      </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentOffer.image}" alt="${currentOffer.alt}">`;
  } 
    
      
    else {
    // No more offers
    window.description.reload();
        
  }
}

// Offer Iterator
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


// QUOTE FORM VALIDATION

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const message = document.getElementById('message');


// Show input error alert
function showError(input, alert) {
  const formControl = input.parentElement;
  formControl.className = 'quote error';
  const small = formControl.querySelector('small');
  small.innerText = alert;
}

// Show success message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'quote success';
}

// Check email validation

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
}

// Event listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();
    
    if (username.value === '') {
         showError(username, 'Моля въведете вашето име.');
    } else {
        showSuccess(username);
    }
    
     if (email.value === '') {
         showError(email, 'Моля въведете вашият имейл.');
     } else if(!validateEmail(email.value)){
         showError(email, 'Моля въведете валиден имейл.');
     } else {
        showSuccess(email);
    }

     if (message.value === '') {
        showError(message, 'Опишете вашият проект.');
    } else {
        showSuccess(message);
    }
    
});