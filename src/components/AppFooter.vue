<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="footer theme-college-brand">
    <div class="footer-container">
      <div class="footer-grid">
        <!-- Brand Column -->
        <div class="footer-brand">
          <div class="brand-header">
            <img src="@/assets/images/logos/CCS_Logo.png" alt="CCS Logo" class="footer-logo" />
            <div class="brand-text">
              <h3>COLLEGE OF COMPUTER STUDIES</h3>
              <p>Central Philippine University</p>
            </div>
          </div>
          <p class="brand-desc">
            Excellence in computing education, research, and innovation. Empowering future leaders in IT, CS, Digital Media, and Library Science.
          </p>
        </div>

        <!-- Quick Links Column -->
        <div class="footer-links">
          <h4>Quick Links</h4>
          <div class="footer-line"></div>
          <ul>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/about">About Us</RouterLink></li>
            <li><RouterLink to="/faculty">Faculty & Staff</RouterLink></li>
            <li><RouterLink to="/news">News & Events</RouterLink></li>
            <li><RouterLink to="/contact">Contact Us</RouterLink></li>
          </ul>
        </div>

        <!-- Academic Programs Column -->
        <div class="footer-links">
          <h4>Academic Programs</h4>
          <div class="footer-line"></div>
          <ul>
            <li><RouterLink to="/programs/bsit">BS Information Technology</RouterLink></li>
            <li><RouterLink to="/programs/bscs">BS Computer Science</RouterLink></li>
            <li><RouterLink to="/programs/bsdmia">BS Digital Media & Interactive Arts</RouterLink></li>
            <li><RouterLink to="/programs/blis">BS Library & Information Science</RouterLink></li>
          </ul>
        </div>

        <!-- Contact Column -->
        <div class="footer-contact">
          <h4>Get in Touch</h4>
          <div class="footer-line"></div>
          <p>📍 Mary Thomas Building, CPU Campus</p>
          <p>📞 329-1971 local 1094</p>
          <p>✉️ ccssec@cpu.edu.ph</p>
        </div>
      </div>

      <!-- Bottom Copyright Strip -->
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} College of Computer Studies — Central Philippine University. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

.footer {
  background: linear-gradient(135deg, #062016 0%, #0F382C 100%);
  color: #cbd5e1;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  border-top: 3px solid #E67E22;
  margin-top: auto;
}

.footer-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 3.5rem 1.25rem 1.5rem 1.25rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1.2fr 1fr;
  gap: 2.5rem;
  margin-bottom: 3rem;
}

/* Brand Section */
.brand-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.footer-logo {
  height: 40px;
  width: auto;
}

.brand-text h3 {
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.2;
}

.brand-text p {
  color: #E67E22;
  font-size: 0.75rem;
  font-weight: 700;
  margin: 0;
}

.brand-desc {
  font-size: 0.85rem;
  line-height: 1.6;
  color: #94a3b8;
  margin: 0;
}

/* Columns Section */
.footer-links h4,
.footer-contact h4 {
  color: #ffffff;
  font-size: 0.98rem;
  font-weight: 700;
  margin: 0 0 0.35rem 0;
}

.footer-line {
  width: 30px;
  height: 2px;
  background: #E67E22;
  margin-bottom: 1.15rem;
  border-radius: 2px;
}

.footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.footer-links a {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.footer-links a:hover {
  color: #E67E22;
  padding-left: 4px;
}

.footer-contact p {
  font-size: 0.85rem;
  color: #cbd5e1;
  margin: 0 0 0.65rem 0;
  line-height: 1.5;
}

/* Bottom Strip */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
  text-align: center;
}

.footer-bottom p {
  font-size: 0.82rem;
  color: #94a3b8;
  margin: 0;
}

/* Responsive */
@media (max-width: 900px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 550px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>