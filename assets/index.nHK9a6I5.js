(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();function r(){const a=new Date("2024-06-01T00:00:00").getTime(),t=new Date().getTime(),o=a-t,i=Math.floor(o/(1e3*60*60*24)),e=Math.floor(o%(1e3*60*60*24)/(1e3*60*60)),n=Math.floor(o%(1e3*60*60)/(1e3*60)),s=Math.floor(o%(1e3*60)/1e3);document.getElementById("days").textContent=i.toString().padStart(2,"0"),document.getElementById("hours").textContent=e.toString().padStart(2,"0"),document.getElementById("minutes").textContent=n.toString().padStart(2,"0"),document.getElementById("seconds").textContent=s.toString().padStart(2,"0"),o<0&&(document.querySelector(".countdown").innerHTML="<h2>Coming soon!</h2>")}function c(a){a.preventDefault(),document.getElementById("email").value;const t=document.querySelector(".notify-btn"),o=t.textContent;t.textContent="Thank you!",t.style.background="linear-gradient(135deg, #10b981, #059669)",setTimeout(()=>{t.textContent=o,t.style.background="",document.getElementById("email").value=""},2e3)}function l(){document.querySelectorAll(".floating").forEach((t,o)=>{t.style.animationDelay=`${o*.5}s`})}document.addEventListener("DOMContentLoaded",function(){document.querySelector("#app").innerHTML=`
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
            <form class="email-form" id="emailForm">
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
  `,r(),setInterval(r,1e3),l(),document.getElementById("emailForm").addEventListener("submit",c)});
