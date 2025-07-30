import './style.css'

// Countdown Timer
function updateCountdown() {
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');
  
  // Only proceed if elements exist
  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;
  
  const launchDate = new Date('2024-12-31T00:00:00').getTime();
  const now = new Date().getTime();
  const distance = launchDate - now;

  const days = Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const minutes = Math.max(0, Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = Math.max(0, Math.floor((distance % (1000 * 60)) / 1000));

  daysEl.textContent = days.toString().padStart(2, '0');
  hoursEl.textContent = hours.toString().padStart(2, '0');
  minutesEl.textContent = minutes.toString().padStart(2, '0');
  secondsEl.textContent = seconds.toString().padStart(2, '0');

  if (distance < 0) {
    const countdownEl = document.querySelector('.countdown');
    if (countdownEl) countdownEl.innerHTML = '<h2>Coming soon...</h2>';
    return; // Stop the interval when countdown is over
  }
}

// Email subscription
async function handleEmailSubmission(e) {
  e.preventDefault();
  const form = e.target;
  const button = form.querySelector('button[type="submit"]');
  const originalText = button.textContent;
  
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      button.textContent = 'Thank you!';
      button.style.background = 'linear-gradient(135deg, #10b981, #059669)';
      form.reset();
    } else {
      button.textContent = 'Error, try again';
      button.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
    }
  } catch (error) {
    button.textContent = 'Error, try again';
    button.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
  }
  
  setTimeout(() => {
    button.textContent = originalText;
    button.style.background = '';
  }, 3000);
}

// Floating animation for decorative elements
function createFloatingAnimation() {
  const decorativeElements = document.querySelectorAll('.floating');
  decorativeElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.5}s`;
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Add form submission handler
  const emailForm = document.getElementById('emailForm');
  if (emailForm) {
    emailForm.addEventListener('submit', handleEmailSubmission);
  }
  
  // Start countdown timer after DOM is loaded
  updateCountdown();
  setInterval(updateCountdown, 1000);
  // Set up the main content
  document.querySelector('#app').innerHTML = `
    <div class="container">
      <!-- Background Elements -->
      <div class="bg-decoration floating"></div>
      <div class="bg-decoration-2 floating"></div>
      
      <!-- Header -->
      <header class="header">
        <div class="logo">
          <div class="logo-container">
            <img src="logo.png" alt="Luxoria Events Logo" class="logo-img">
          </div>
          <h1>Event Agency & Banquet Hall</h1>
          <p class="tagline">Enjoy your special moments!</p>
        </div>
      </header>

      <!-- Main Content -->
      <main class="main-content">
        <div class="hero-section">
          <p class="description">
            We're crafting the most luxurious banquet hall and events management experience in Bangalore. 
            From intimate celebrations to grand weddings, we're preparing to make your special moments unforgettable.
          </p>
          
          <!-- Countdown Timer -->
          <div class="countdown">
            <div class="countdown-item">
              <span class="countdown-number" id="days">00</span>
              <span class="countdown-label">Days</span>
            </div>
            <div class="countdown-item">
              <span class="countdown-number" id="hours">00</span>
              <span class="countdown-label">Hours</span>
            </div>
            <div class="countdown-item">
              <span class="countdown-number" id="minutes">00</span>
              <span class="countdown-label">Minutes</span>
            </div>
            <div class="countdown-item">
              <span class="countdown-number" id="seconds">00</span>
              <span class="countdown-label">Seconds</span>
            </div>
          </div>

          <!-- Email Subscription -->
          <div class="subscription">
            <h3>Be the First to Know</h3>
            <p>Get notified when we launch and receive exclusive early access offers</p>
            <form class="email-form" id="emailForm" action="https://formspree.io/f/xjkoybwo" method="POST">
              <input 
                type="email" 
                name="email"  
                id="email" 
                placeholder="Enter your email address" 
                required
                class="email-input"
              >
              <button type="submit" class="notify-btn">Notify Me</button>
            </form>
          </div>
        </div>

        <!-- Features Preview -->
        <div class="features-preview">
          <div class="feature-card">
            <div class="feature-icon">🏛️</div>
            <h4>Luxury Banquet Hall</h4>
            <p>Elegant spaces designed for your most important celebrations</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💐</div>
            <h4>Complete Event Management</h4>
            <p>From planning to execution, we handle every detail</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🍽️</div>
            <h4>Gourmet Catering</h4>
            <p>Exquisite cuisine crafted by renowned chefs</p>
          </div>
        </div>
      </main>

      <!-- Footer -->
      <footer class="footer">
        <div class="location">
          <p>📍 Bangalore, Karnataka, India</p>
        </div>
        <!-- Social links will be added later -->
        <!--
        <div class="social-links">
          <a href="#" class="social-link">Facebook</a>
          <a href="#" class="social-link">Instagram</a>
          <a href="#" class="social-link">LinkedIn</a>
        </div>
        -->
      </footer>
    </div>
  `;

  // Initialize functionality
  updateCountdown();
  setInterval(updateCountdown, 1000);
  createFloatingAnimation();
  
  document.getElementById('emailForm').addEventListener('submit', handleEmailSubmission);
});