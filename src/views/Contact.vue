<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import ContactForm from '../components/ContactForm.vue'

// Native IntersectionObserver for smooth scroll animations
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
  )

  document.querySelectorAll('.animate-on-scroll').forEach((el) => observer?.observe(el))
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <div class="contact-page theme-college-brand">
    <!-- Hero Banner with Dark Green Gradient & Orange Line -->
    <section class="contact-hero">
      <div class="hero-bg-shapes">
        <div class="geo-circle circle-1"></div>
        <div class="geo-circle circle-2"></div>
      </div>

      <div class="hero-content animate-on-scroll">
        <h1>Contact Us</h1>
        <div class="hero-line"></div>
        <p>Have questions about our academic programs, admissions, or campus details? Reach out to us.</p>
      </div>
    </section>

    <!-- Main Content Body -->
    <div class="page-body">
      <div class="body-grid-pattern"></div>

      <div class="container">
        <div class="contact-layout animate-on-scroll">
          <!-- Contact Information Column -->
          <div class="contact-info-card">
            <div class="section-header">
              <h2>Get in Touch</h2>
              <div class="header-line"></div>
            </div>
            <p class="subtitle">Our administrative offices are open to assist students, parents, and visitors.</p>

            <div class="info-list">
              <div class="info-item">
                <div class="icon-badge">📍</div>
                <div class="info-details">
                  <h3>Campus Location</h3>
                  <p>Mary Thomas Building</p>
                  <p>Central Philippine University, Lopez Jaena Street, Jaro, Iloilo City</p>
                </div>
              </div>

              <div class="info-item">
                <div class="icon-badge">📞</div>
                <div class="info-details">
                  <h3>Phone & Support</h3>
                  <p>Direct Line: 329-1971 local 1094</p>
                  <p>Social Media: College of Computer Studies - CPU</p>
                </div>
              </div>

              <div class="info-item">
                <div class="icon-badge">✉️</div>
                <div class="info-details">
                  <h3>Email Inquiries</h3>
                  <p>Email: ccssec@cpu.edu.ph</p>
                </div>
              </div>

              <div class="info-item">
                <div class="icon-badge">🕒</div>
                <div class="info-details">
                  <h3>Office Hours</h3>
                  <p>Monday – Friday: 8:00 AM – 5:00 PM</p>
                  <p>Saturday: 8:00 AM – 12:00 PM (Inquiries Only)</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form Column -->
          <div class="contact-form-wrapper">
            <div class="form-header">
              <h2>Send a Message</h2>
              <div class="header-line"></div>
              <p>Fill out the form below and our team will get back to you.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

.theme-college-brand {
  width: 100%;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  color: #1e293b;
  overflow-x: hidden;
}

/* ==========================================================================
   Hero Section
   ========================================================================== */
.contact-hero {
  position: relative;
  background: linear-gradient(135deg, #09261E 0%, #0F382C 50%, #175242 100%);
  min-height: clamp(280px, 35vh, 380px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(3rem, 5vh, 4.5rem) 1.25rem;
  text-align: center;
  overflow: hidden;
  border-bottom: 3px solid #E67E22;
}

.hero-bg-shapes {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.geo-circle {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(230, 126, 34, 0.18) 0%, transparent 70%);
}

.circle-1 {
  width: min(350px, 50vw);
  height: min(350px, 50vw);
  top: -100px;
  left: 5%;
}

.circle-2 {
  width: min(450px, 60vw);
  height: min(450px, 60vw);
  bottom: -120px;
  right: 5%;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 760px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-content h1 {
  font-size: clamp(2rem, 4.5vw, 3rem);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.hero-line {
  width: 60px;
  height: 3px;
  background: #E67E22;
  margin-bottom: 1.25rem;
  border-radius: 2px;
}

.hero-content p {
  font-size: clamp(0.98rem, 2vw, 1.12rem);
  color: #d1fae5;
  max-width: 640px;
  line-height: 1.65;
  font-weight: 500;
  margin: 0;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

/* ==========================================================================
   Page Body & Contact Layout
   ========================================================================== */
.page-body {
  position: relative;
  background-color: #f8fafc;
  padding: clamp(2.5rem, 5vw, 4.5rem) 0 clamp(3.5rem, 6vw, 6rem) 0;
}

.body-grid-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(rgba(15, 56, 44, 0.08) 1px, transparent 1px);
  background-size: 28px 28px;
  pointer-events: none;
  opacity: 0.7;
}

.container {
  position: relative;
  z-index: 2;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.25rem;
}

.contact-layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: clamp(2rem, 4vw, 3rem);
  align-items: start;
}

/* Info Column Card */
.contact-info-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: clamp(1.75rem, 3.5vw, 2.5rem);
  box-shadow: 0 8px 24px -6px rgba(15, 56, 44, 0.06);
}

.section-header h2,
.form-header h2 {
  font-size: 1.65rem;
  font-weight: 800;
  color: #0f382c;
  margin: 0;
}

.header-line {
  width: 40px;
  height: 3px;
  background: #E67E22;
  margin: 0.5rem 0 1rem 0;
  border-radius: 2px;
}

.subtitle {
  color: #64748b;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-weight: 500;
  font-size: 0.95rem;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-item {
  display: flex;
  gap: 1.125rem;
  align-items: flex-start;
}

.icon-badge {
  font-size: 1.25rem;
  background: rgba(15, 56, 44, 0.06);
  color: #0f382c;
  min-width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: 1px solid rgba(15, 56, 44, 0.1);
  flex-shrink: 0;
}

.info-details h3 {
  font-size: 1.05rem;
  font-weight: 700;
  color: #0f382c;
  margin: 0 0 0.3rem 0;
}

.info-details p {
  color: #475569;
  font-size: 0.92rem;
  line-height: 1.45;
  margin: 0;
  font-weight: 500;
}

/* Form Wrapper Card */
.contact-form-wrapper {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: clamp(1.75rem, 3.5vw, 2.5rem);
  box-shadow: 0 8px 24px -6px rgba(15, 56, 44, 0.06);
}

.form-header p {
  color: #64748b;
  font-size: 0.95rem;
  margin-bottom: 1.75rem;
  font-weight: 500;
}

/* ==========================================================================
   Scroll Animation
   ========================================================================== */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), 
              transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>