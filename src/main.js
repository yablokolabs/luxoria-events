import './style.css'

// Countdown Timer
function updateCountdown() {
  const launchDate = new Date('2024-06-01T00:00:00').getTime();
  const now = new Date().getTime();
  const distance = launchDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days.toString().padStart(2, '0');
  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

  if (distance < 0) {
    document.querySelector('.countdown').innerHTML = '<h2>Coming soon!</h2>';
  }
}

// Email subscription
function handleEmailSubmission(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const button = document.querySelector('.notify-btn');
  const originalText = button.textContent;
  
  button.textContent = 'Thank you!';
  button.style.background = 'linear-gradient(135deg, #10b981, #059669)';
  
  setTimeout(() => {
    button.textContent = originalText;
    button.style.background = '';
    document.getElementById('email').value = '';
  }, 2000);
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
          <h1>Luxoria Events</h1>
          <p class="tagline">Bangalore's Premier Event Destination</p>
        </div>
      </header>

      <!-- Main Content -->
      <main class="main-content">
        <div class="hero-section">
          <h2 class="coming-soon-title">Something Extraordinary is Coming</h2>
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
            <h4>Luxury Banquet Halls</h4>
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