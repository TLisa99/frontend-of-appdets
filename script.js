function toggleMenu() {
  const menuButton = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    menu.classList.add('slide-in');
  } else {
    menu.classList.remove('slide-in');
    menu.classList.add('slide-out');
    setTimeout(() => {
      menu.classList.add('hidden');
      menu.classList.remove('slide-out');
    }, 300);
  }
}   
                 
          
 // JavaScript code to handle changing the span content
      const spanElement = document.getElementById('changing-span');
      const spanContent = ['Themes', 'Resources', 'Plugins']; // Array of span content
        
      let index = 0; // Initialize index for array iteration
        
      // Function to update the span content
      function updateSpanContent() {
         spanElement.textContent = spanContent[index]; // Update span content
        
         index++; // Increment index
        
         if (index >= spanContent.length) {
          index = 0; // Reset index if it exceeds the array length
        }
       }
        
       // Call the updateSpanContent function every 3 seconds
      setInterval(updateSpanContent, 3000);


      $('.count').each(function () {
       const target = +$(this).data('target');
       const duration = 1000; // Animation duration in milliseconds
       const steps = 50; // Number of steps for animation
         
        let currentStep = 0;
        const stepValue = Math.ceil(target / steps);
            
         const interval = setInterval(() => {
           currentStep += stepValue;
           if (currentStep >= target) {
            currentStep = target;
            clearInterval(interval);
          }
          $(this).text(currentStep);
        }, duration / steps);
       });





// JavaScript code for customer reviews
const reviews = [
  {
    image: '/img/customers/customer1.jpg',
    rating: 5,
    review: 'Absolutely amazing! The level of customization options available in these WordPress themes is unmatched. It has transformed the way I design and develop websites. Highly recommended! - John D'
  },
  {
    image: '/img/customers/customer2.jpg',
    rating: 2,
    review: 'As a web agency, we have tried countless WordPress themes.but none come close to the level of flexibility and versatility offered by these products. '
  },
  {
    image: '/img/customers/customer3.jpg',
    rating: 3,
    review: 'I feel like one! The intuitive interface and user-friendly features have made it incredibly easy for me to create stunning websites for my clients. Thank you for making my job enjoyable!'
  },
  {
    image: '/img/customers/customer4.jpg',
    rating: 5,
    review: 'I can not thank the team enough for their exceptional support. Whenever I encountered an issue or had a question, they were quick to respond and provided detailed guidance. Their dedication to customer satisfaction is commendable. - David P.'
  },
  // Add more reviews here

];

let currentIndex = 0;
const reviewTextElement = document.getElementById('reviewText');
const starRatingElement = document.getElementById('starRating');

function generateStarRating(rating) {
  const starContainer = document.createElement('div');
  starContainer.classList.add('star-rating');

  for (let i = 1; i <= 5; i++) {
    const starIcon = document.createElement('span');
    starIcon.classList.add('star-icon');
    if (i <= rating) {
      starIcon.classList.add('filled');
    } else {
      starIcon.classList.add('empty');
    }
    starIcon.innerHTML = ' &#11088'; // Use appropriate star icon

    starContainer.appendChild(starIcon);
  }

  return starContainer;
}

function updateReview() {
  const currentReview = reviews[currentIndex];
  const reviewContainer = document.getElementById('reviewContainer');

  // Animate review container
  reviewContainer.classList.add('animate-slide');
  setTimeout(() => {
    // Update customer image
    const customerImageElement = reviewContainer.querySelector('.customer-image');
    customerImageElement.src = currentReview.image;

    // Update star rating
    const starRatingElement = reviewContainer.querySelector('.star-rating');
    starRatingElement.innerHTML = '';
    const starRating = generateStarRating(currentReview.rating);
    starRatingElement.appendChild(starRating);

    // Update review text
    const reviewTextElement = reviewContainer.querySelector('.review-text');
    reviewTextElement.textContent = currentReview.review;

    // Reset animation classes after delay
    setTimeout(() => {
      reviewContainer.classList.remove('animate-slide');
    }, 400);
  }, 50);
}



function showNextReview() {
  currentIndex = (currentIndex + 1) % reviews.length;
  updateReview();
}

function showPreviousReview() {
  currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
  updateReview();
}

document.getElementById('nextButton').addEventListener('click', showNextReview);
document.getElementById('prevButton').addEventListener('click', showPreviousReview);

updateReview(); // Show initial review

// Auto-switch reviews every 2 seconds
setInterval(showNextReview, 3000);




document.getElementById('footerUpButton').addEventListener('click', function(e) {
  e.preventDefault();
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 2000; // Adjust the duration (in milliseconds) as desired

  let start = null;
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  }

  function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
  }
});