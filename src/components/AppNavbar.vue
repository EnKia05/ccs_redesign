<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

// Mobile menu toggle state
const isMobileMenuOpen = ref(false)
const isAcademicDropdownOpen = ref(false)

const route = useRoute()

// Automatically close the mobile drawer on route navigation
watch(() => route.path, () => {
  isMobileMenuOpen.value = false
  isAcademicDropdownOpen.value = false
})

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (!isMobileMenuOpen.value) {
    isAcademicDropdownOpen.value = false
  }
}

const toggleAcademicDropdown = () => {
  isAcademicDropdownOpen.value = !isAcademicDropdownOpen.value
}
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

    <!-- Mobile Hamburger Button -->
    <button 
      class="mobile-toggle" 
      @click="toggleMobileMenu" 
      :class="{ 'is-active': isMobileMenuOpen }"
      aria-label="Toggle navigation menu"
    >
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>

    <!-- Navigation Links Container -->
    <nav class="nav-links" :class="{ 'is-open': isMobileMenuOpen }">
      <RouterLink to="/" class="nav-item">Home</RouterLink>
      <RouterLink to="/about" class="nav-item">About</RouterLink>
      
      <!-- Academic Programs Dropdown -->
      <div class="dropdown" :class="{ 'is-mobile-open': isAcademicDropdownOpen }">
        <button class="dropbtn" @click="toggleAcademicDropdown">
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
  background: rgba(6, 44, 30, 0.92);
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

/* --- Mobile Hamburger Toggle --- */
.mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.mobile-toggle .bar {
  width: 100%;
  height: 3px;
  background-color: #FFB027;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
}

.mobile-toggle.is-active .bar:nth-child(1) {
  transform: translateY(8.5px) rotate(45deg);
}

.mobile-toggle.is-active .bar:nth-child(2) {
  opacity: 0;
}

.mobile-toggle.is-active .bar:nth-child(3) {
  transform: translateY(-8.5px) rotate(-45deg);
}

/* --- Desktop Navigation Links --- */
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

.nav-cta.router-link-exact-active {
  background: linear-gradient(135deg, #FFB027 0%, #E67E22 100%) !important;
  color: #042016 !important;
  box-shadow: 0 0 15px rgba(255, 176, 39, 0.6), 0 4px 15px rgba(230, 126, 34, 0.4) !important;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* --- Dropdown Styles --- */
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

/* Hover bridge fix for desktop */
.dropdown::before {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 16px;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%);
  background: rgba(4, 32, 22, 0.96);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 176, 39, 0.3);
  min-width: 270px;
  box-shadow: 0 20px 35px -10px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  padding: 0.6rem;
  z-index: 100;
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

/* Show dropdown on hover (Desktop) */
@media (min-width: 961px) {
  .dropdown:hover .dropdown-content {
    display: block;
    animation: fadeIn 0.2s ease-in-out forwards;
  }
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

/* ==========================================================================
   Responsive Breakpoints & Mobile Drawer
   ========================================================================== */
@media (max-width: 960px) {
  .navbar {
    padding: 0.85rem 1.25rem;
  }

  .mobile-toggle {
    display: flex;
  }

  .brand-title {
    font-size: 0.95rem;
  }

  .brand-subtitle {
    font-size: 0.65rem;
  }

  /* Mobile Vertical Off-Canvas Drawer */
  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 320px;
    height: 100vh;
    background: rgba(4, 28, 19, 0.98);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    padding: 5.5rem 1.25rem 2rem 1.25rem;
    gap: 0.75rem;
    border-radius: 0;
    border: none;
    border-left: 1px solid rgba(255, 176, 39, 0.25);
    transition: right 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
    z-index: 1000;
    overflow-y: auto;
  }

  .nav-links.is-open {
    right: 0;
  }

  .nav-item, 
  .dropbtn {
    width: 100%;
    text-align: left;
    padding: 0.85rem 1.25rem;
    font-size: 0.98rem;
    border-radius: 10px;
  }

  .nav-cta {
    margin-left: 0;
    margin-top: 0.5rem;
    text-align: center;
  }

  /* Mobile Accordion Dropdown Override */
  .dropdown {
    width: 100%;
    position: relative;
  }

  .dropdown::before {
    display: none;
  }

  .dropbtn {
    justify-content: space-between;
  }

  .dropdown-content {
    position: static;
    transform: none;
    display: none;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
    min-width: 100%;
    box-shadow: none;
    margin-top: 0.5rem;
    padding: 0.5rem;
    border-radius: 10px;
    animation: none;
  }

  .dropdown-content a {
    padding: 0.65rem 0.85rem;
  }

  .dropdown-content a:hover,
  .dropdown-content a.router-link-exact-active {
    transform: translateX(2px);
  }

  .dropdown.is-mobile-open .dropdown-content {
    display: block;
  }

  .dropdown.is-mobile-open .chevron {
    transform: rotate(180deg);
  }
}

@media (max-width: 480px) {
  .brand-subtitle {
    display: none;
  }
}
</style>