(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();function r(){const a=document.getElementById("days"),n=document.getElementById("hours"),t=document.getElementById("minutes"),i=document.getElementById("seconds");if(!a||!n||!t||!i)return;const e=new Date("2024-12-31T00:00:00").getTime(),o=new Date().getTime(),s=e-o,l=Math.max(0,Math.floor(s/(1e3*60*60*24))),u=Math.max(0,Math.floor(s%(1e3*60*60*24)/(1e3*60*60))),m=Math.max(0,Math.floor(s%(1e3*60*60)/(1e3*60))),p=Math.max(0,Math.floor(s%(1e3*60)/1e3));if(a.textContent=l.toString().padStart(2,"0"),n.textContent=u.toString().padStart(2,"0"),t.textContent=m.toString().padStart(2,"0"),i.textContent=p.toString().padStart(2,"0"),s<0){const c=document.querySelector(".countdown");c&&(c.innerHTML="<h2>Coming soon!</h2>");return}}async function d(a){a.preventDefault();const n=a.target,t=n.querySelector('button[type="submit"]'),i=t.textContent;try{(await fetch(n.action,{method:"POST",body:new FormData(n),headers:{Accept:"application/json"}})).ok?(t.textContent="Thank you!",t.style.background="linear-gradient(135deg, #10b981, #059669)",n.reset()):(t.textContent="Error, try again",t.style.background="linear-gradient(135deg, #ef4444, #dc2626)")}catch{t.textContent="Error, try again",t.style.background="linear-gradient(135deg, #ef4444, #dc2626)"}setTimeout(()=>{t.textContent=i,t.style.background=""},3e3)}function f(){document.querySelectorAll(".floating").forEach((n,t)=>{n.style.animationDelay=`${t*.5}s`})}document.addEventListener("DOMContentLoaded",function(){const a=document.getElementById("emailForm");a&&a.addEventListener("submit",d),r(),setInterval(r,1e3),document.querySelector("#app").innerHTML=`
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
  `,r(),setInterval(r,1e3),f(),document.getElementById("emailForm").addEventListener("submit",d)});
