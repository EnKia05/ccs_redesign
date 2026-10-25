<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="navbar">
    <div class="nav-brand">
      <RouterLink to="/" class="brand-link">
        <img src="@/assets/images/logos/CCS_Logo.png" alt="CCS Logo" class="nav-logo" />
        <div class="brand-text">
          <span class="brand-title">COLLEGE OF COMPUTER STUDIES</span>
          <span class="brand-subtitle">Central Philippine University</span>
        </div>
      </RouterLink>
    </div>

    <nav class="nav-links">
      <RouterLink to="/" class="nav-item">Home</RouterLink>
      <RouterLink to="/about" class="nav-item">About</RouterLink>
      
      <!-- Academic Programs Dropdown -->
      <div class="dropdown">
        <button class="dropbtn">
          Academic Programs 
          <span class="chevron">▾</span>
        </button>
        <div class="dropdown-content">
          <RouterLink to="/programs/bsit">BS Information Technology</RouterLink>
          <RouterLink to="/programs/bscs">BS Computer Science</RouterLink>
          <RouterLink to="/programs/bsdmia">BS Digital Media & Interactive Arts</RouterLink>
          <RouterLink to="/programs/blis">BS Library & Information Science</RouterLink>
        </div>
      </div>

      <RouterLink to="/faculty" class="nav-item">Faculty & Staff</RouterLink>
      <RouterLink to="/news" class="nav-item">News & Events</RouterLink>
      <RouterLink to="/contact" class="nav-item nav-cta">Contact Us</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 2.5rem;
  background: rgba(6, 44, 30, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255, 176, 39, 0.25);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.3);
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  transition: all 0.3s ease;
}

/* --- Brand Section --- */
.brand-link {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  text-decoration: none;
  transition: transform 0.2s ease;
}

.brand-link:hover {
  transform: translateY(-1px);
}

.nav-logo {
  height: 42px;
  width: auto;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-title {
  color: #ffffff;
  font-weight: 800;
  font-size: 1.1rem;
  letter-spacing: 0.04em;
  line-height: 1.1;
}

.brand-subtitle {
  color: #FFB027;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.03em;
}

/* --- Modern Navigation Links --- */
.nav-links {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  padding: 0.35rem 0.6rem;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-item, 
.dropbtn {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: all 0.25s ease;
  position: relative;
}

.nav-item:hover,
.dropbtn:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.1);
}

/* Active Link Glow Pill */
.nav-item.router-link-exact-active {
  color: #FFB027;
  background: rgba(255, 176, 39, 0.15);
  font-weight: 700;
}

/* --- Contact Pill Button --- */
.nav-cta {
  background: linear-gradient(135deg, #FFB027 0%, #f59e0b 100%);
  color: #042016 !important;
  padding: 0.55rem 1.35rem !important;
  border-radius: 50px !important;
  font-weight: 700;
  margin-left: 0.5rem;
  box-shadow: 0 4px 15px rgba(255, 176, 39, 0.3);
}

.nav-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 176, 39, 0.45);
  background: linear-gradient(135deg, #ffb838 0%, #fbbf24 100%);
}

/* Active Contact Us Button */
.nav-cta.router-link-exact-active {
  background: linear-gradient(135deg, #FFB027 0%, #E67E22 100%) !important;
  color: #042016 !important;
  box-shadow: 0 0 15px rgba(255, 176, 39, 0.6), 0 4px 15px rgba(230, 126, 34, 0.4) !important;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* --- Glassmorphism Dropdown --- */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropbtn {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-family: inherit;
}

.chevron {
  font-size: 0.7rem;
  color: #FFB027;
  transition: transform 0.25s ease;
}

.dropdown:hover .chevron {
  transform: rotate(180deg);
}

.dropdown-content {
  display: none;
  position: absolute;
  top: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%);
  background: rgba(4, 32, 22, 0.95);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 176, 39, 0.3);
  min-width: 270px;
  box-shadow: 0 20px 35px -10px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  padding: 0.6rem;
  z-index: 100;
}

.dropdown-content::before {
  content: '';
  position: absolute;
  top: -16px;
  left: 0;
  width: 100%;
  height: 16px;
  background: transparent;
}

.dropdown-content a {
  color: #cbd5e1;
  padding: 0.75rem 1rem;
  display: block;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.dropdown-content a:hover,
.dropdown-content a.router-link-exact-active {
  background-color: rgba(255, 176, 39, 0.18);
  color: #FFB027;
  transform: translateX(4px);
}

.dropdown:hover .dropdown-content {
  display: block;
  animation: fadeIn 0.2s ease-in-out forwards;
}

@keyframes fadeIn {
  from { 
    opacity: 0; 
    transform: translate(-50%, 8px); 
  }
  to { 
    opacity: 1; 
    transform: translate(-50%, 0); 
  }
}

@media (max-width: 900px) {
  .navbar {
    padding: 0.75rem 1.25rem;
  }
  .brand-subtitle {
    display: none;
  }
}
</style>