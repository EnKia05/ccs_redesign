<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

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
    {
      threshold: 0.05,
      rootMargin: '0px 0px -20px 0px'
    }
  )

  const elements = document.querySelectorAll('.animate-on-scroll')
  elements.forEach((el) => observer?.observe(el))
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<template>
  <div class="program-page theme-bsdmia-cantaloupe">
    <!-- Hero Section -->
    <section class="program-hero-centered">
      <!-- Rich Multi-Layered Soft Cloud Background Shapes -->
      <div class="hero-cloud-bg">
        <!-- Top Left Main Cloud -->
        <svg class="cloud-shape cloud-1" viewBox="0 0 240 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M175 40C170 18 148 2 122 2C100 2 81 14 74 33C68 28 60 25 52 25C31 25 14 42 14 63C5.8 67 0 75 0 85C0 99 11 110 25 110H215C229 110 240 99 240 85C240 72 230 61 217 60C215 48 200 40 185 40H175Z" fill="url(#cloudGrad1)"/>
          <defs>
            <linearGradient id="cloudGrad1" x1="0" y1="0" x2="240" y2="110" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FFCA99" stop-opacity="0.65" />
              <stop offset="1" stop-color="#FDA172" stop-opacity="0.3" />
            </linearGradient>
          </defs>
        </svg>

        <!-- Bottom Right Massive Background Cloud -->
        <svg class="cloud-shape cloud-2" viewBox="0 0 240 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M175 40C170 18 148 2 122 2C100 2 81 14 74 33C68 28 60 25 52 25C31 25 14 42 14 63C5.8 67 0 75 0 85C0 99 11 110 25 110H215C229 110 240 99 240 85C240 72 230 61 217 60C215 48 200 40 185 40H175Z" fill="url(#cloudGrad2)"/>
          <defs>
            <linearGradient id="cloudGrad2" x1="0" y1="0" x2="240" y2="110" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FFCA99" stop-opacity="0.75" />
              <stop offset="1" stop-color="#FDA172" stop-opacity="0.4" />
            </linearGradient>
          </defs>
        </svg>

        <!-- Top Right Soft Cloud -->
        <svg class="cloud-shape cloud-3" viewBox="0 0 240 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M175 40C170 18 148 2 122 2C100 2 81 14 74 33C68 28 60 25 52 25C31 25 14 42 14 63C5.8 67 0 75 0 85C0 99 11 110 25 110H215C229 110 240 99 240 85C240 72 230 61 217 60C215 48 200 40 185 40H175Z" fill="url(#cloudGrad3)"/>
          <defs>
            <linearGradient id="cloudGrad3" x1="0" y1="0" x2="240" y2="110" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FFCA99" stop-opacity="0.5" />
              <stop offset="1" stop-color="#FDA172" stop-opacity="0.2" />
            </linearGradient>
          </defs>
        </svg>

        <!-- Extra Mid-Left Floating Puff -->
        <svg class="cloud-shape cloud-4" viewBox="0 0 240 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M175 40C170 18 148 2 122 2C100 2 81 14 74 33C68 28 60 25 52 25C31 25 14 42 14 63C5.8 67 0 75 0 85C0 99 11 110 25 110H215C229 110 240 99 240 85C240 72 230 61 217 60C215 48 200 40 185 40H175Z" fill="url(#cloudGrad4)"/>
          <defs>
            <linearGradient id="cloudGrad4" x1="0" y1="0" x2="240" y2="110" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FFF0E5" stop-opacity="0.7" />
              <stop offset="1" stop-color="#FFCA99" stop-opacity="0.35" />
            </linearGradient>
          </defs>
        </svg>

        <!-- Extra Lower Center Background Horizon Puff -->
        <svg class="cloud-shape cloud-5" viewBox="0 0 240 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M175 40C170 18 148 2 122 2C100 2 81 14 74 33C68 28 60 25 52 25C31 25 14 42 14 63C5.8 67 0 75 0 85C0 99 11 110 25 110H215C229 110 240 99 240 85C240 72 230 61 217 60C215 48 200 40 185 40H175Z" fill="url(#cloudGrad5)"/>
          <defs>
            <linearGradient id="cloudGrad5" x1="0" y1="0" x2="240" y2="110" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FFCA99" stop-opacity="0.45" />
              <stop offset="1" stop-color="#FDA172" stop-opacity="0.15" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div class="hero-content-centered animate-on-scroll">
        <div class="program-logo-wrapper">
          <img src="/DMIA.png" alt="BSDMIA Logo" class="hero-program-logo" />
        </div>
        <h1>Digital Media & Interactive Arts</h1>
        <p>
          The Degree of Bachelor of Science in Digital Media and Interactive Arts is focused on creativity, applied arts and digital media technologies.
        </p>
      </div>
    </section>

    <!-- Main Content Container -->
    <div class="page-body">
      <div class="body-grid-pattern"></div>

      <div class="container">
        <!-- 1. Program Outcomes -->
        <section class="section animate-on-scroll">
          <div class="section-header">
            <h2>Program Outcomes</h2>
            <div class="header-line"></div>
          </div>

          <div class="outcomes-editorial-container">
            <div class="outcomes-block">
              <p class="block-intro">The graduates have the ability to</p>
              
              <ul class="academic-outcomes-list">
                <li>
                  <span class="outcome-marker">a)</span>
                  <div class="outcome-text">
                    articulate and discuss the latest developments in the specific field of practice. <span class="cite-tag">(Philippine Qualifications Framework (PQF) level 6 descriptor) (Graduate Outcomes: CS 10, IS 10, IT13).</span>
                  </div>
                </li>
                <li>
                  <span class="outcome-marker">b)</span>
                  <div class="outcome-text">
                    effectively communicate orally and in writing using both English and Filipino <span class="cite-tag">(Graduate Outcomes: CS08, IS08, IT10).</span>
                  </div>
                </li>
                <li>
                  <span class="outcome-marker">c)</span>
                  <div class="outcome-text">
                    work effectively and independently in multi-disciplinary and multi-cultural teams. <span class="cite-tag">(PQF level 6 descriptor) (Graduate Outcomes: CS07, IS07, IT08).</span>
                  </div>
                </li>
                <li>
                  <span class="outcome-marker">d)</span>
                  <div class="outcome-text">
                    act in recognition of professional, social, and ethical responsibility <span class="cite-tag">(Graduate Outcomes: CS09, IS09, IT12).</span>
                  </div>
                </li>
                <li>
                  <span class="outcome-marker">e)</span>
                  <div class="outcome-text">
                    preserve and promote “Filipino historical and cultural heritage” <span class="cite-tag">(based on RA 7722).</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- 2. Curriculum Rationale -->
        <section class="section animate-on-scroll">
          <div class="section-header">
            <h2>Curriculum Rationale</h2>
            <div class="header-line"></div>
          </div>

          <div class="rationale-academic-box">
            <!-- Official Policy Banner -->
            <div class="policy-tag-banner">
              <span class="policy-title">Based on CHED Memo Order No. 25 s. 2015</span>
              <span class="policy-sub">Effective: Academic Year 2018–2019</span>
            </div>

            <!-- Rationale Paragraphs -->
            <div class="rationale-text-body">
              <p>
                The Bachelor of Science in Digital Media and Interactive Arts (BSDMIA) program is offered under CMO 19 s 2016 Article III Section 11, which grants autonomous institutions the privilege to introduce new undergraduate and graduate programs. This offering addresses the growing intersection of technology and creative arts, expanding Information Technology Education (ITE) into artistic domains beyond traditional elective offerings.
              </p>
              <p>
                The discipline merges artistic foundations, design principles, and technological capabilities. Practitioners in this field develop expertise in visual design, narrative storytelling, digital media, and interactive experience design, applying these skills across animation, mobile media, and video game development.
              </p>
              <p>
                Throughout the program, students gain hands-on experience with industry-standard applications for video editing, animation, 3D modeling, photography, graphic design, game design, and virtual reality platforms.
              </p>
              <p>
                Graduates are prepared for professional roles across advertising agencies, game development studios, post-production houses, design firms, publishing companies, and web design agencies. Career opportunities include roles as animators, graphic designers, game developers, web designers, multimedia artists, art directors, digital content creators, and independent artists.
              </p>
            </div>
          </div>
        </section>

        <!-- 3. Curriculum Description -->
        <section class="section animate-on-scroll">
          <div class="section-header">
            <h2>Curriculum Description</h2>
            <div class="header-line"></div>
          </div>

          <div class="description-editorial-container">
            <ul class="description-lead-list">
              <li>
                The Bachelor of Science in Digital Media and Interactive Arts program centers on creative expression, practical artistry, and digital media technologies. It aims to cultivate creative talent across diverse applied arts fields, such as entertainment, education, advertising, film, and corporate communications.
              </li>
              <li>
                Through a collaborative course structure, students across disciplines work together to create industry-grade creative projects. The curriculum provides talent-focused training and instruction to equip students with skills tailored for the modern digital media landscape.
              </li>
            </ul>
          </div>
        </section>
      </div>

      <!-- 4. Student Organization with Dense Soft Cloud Layers -->
      <section class="org-fullbleed-section animate-on-scroll">
        <div class="org-fullbleed-cloud-bg">
          <!-- Top Left Cloud -->
          <svg class="org-cloud cloud-org-1" viewBox="0 0 240 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M175 40C170 18 148 2 122 2C100 2 81 14 74 33C68 28 60 25 52 25C31 25 14 42 14 63C5.8 67 0 75 0 85C0 99 11 110 25 110H215C229 110 240 99 240 85C240 72 230 61 217 60C215 48 200 40 185 40H175Z" fill="rgba(253, 161, 114, 0.28)"/>
          </svg>

          <!-- Bottom Right Massive Cloud -->
          <svg class="org-cloud cloud-org-2" viewBox="0 0 240 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M175 40C170 18 148 2 122 2C100 2 81 14 74 33C68 28 60 25 52 25C31 25 14 42 14 63C5.8 67 0 75 0 85C0 99 11 110 25 110H215C229 110 240 99 240 85C240 72 230 61 217 60C215 48 200 40 185 40H175Z" fill="rgba(255, 202, 153, 0.42)"/>
          </svg>

          <!-- Top Right Accent Cloud -->
          <svg class="org-cloud cloud-org-3" viewBox="0 0 240 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M175 40C170 18 148 2 122 2C100 2 81 14 74 33C68 28 60 25 52 25C31 25 14 42 14 63C5.8 67 0 75 0 85C0 99 11 110 25 110H215C229 110 240 99 240 85C240 72 230 61 217 60C215 48 200 40 185 40H175Z" fill="rgba(253, 161, 114, 0.18)"/>
          </svg>

          <!-- Bottom Left Foreground Layer Cloud -->
          <svg class="org-cloud cloud-org-4" viewBox="0 0 240 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M175 40C170 18 148 2 122 2C100 2 81 14 74 33C68 28 60 25 52 25C31 25 14 42 14 63C5.8 67 0 75 0 85C0 99 11 110 25 110H215C229 110 240 99 240 85C240 72 230 61 217 60C215 48 200 40 185 40H175Z" fill="rgba(255, 240, 229, 0.6)"/>
          </svg>
        </div>

        <div class="container relative-z">
          <div class="org-clean-grid">
            <div class="org-logo-col">
              <img src="/DMIA.png" alt="Digital Media and Interactive Arts Student Society Emblem" class="org-open-logo" />
            </div>

            <div class="org-text-col">
              <h3>Modern Interactive Digital Artists Society</h3>
              <p class="org-statement">
                The Modern Interactive Digital Artists Society mission is to help the BSDMIA students develop a sense of artistic self-identity and to support and conduct exhibits and outreach activities to increase public awareness to extend the part of technology and its impact to the society; ∙ To be the official organization of the Bachelor of Science in Digital Media and Interactive Arts that embodies all the students enrolled in this course under the College of Computer Studies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div class="container">
        <!-- 5. Graduate Outcomes -->
        <section class="section animate-on-scroll">
          <div class="section-header">
            <h2>Graduate Outcomes</h2>
            <div class="header-line"></div>
          </div>

          <div class="outcomes-academic-container">
            <div class="outcomes-table-header">
              <span class="code-col-head">Outcome Code</span>
              <span class="desc-col-head">Graduate Outcomes</span>
            </div>

            <ul class="outcomes-official-list">
              <li>
                <span class="outcome-code">DMIA01</span>
                <div class="outcome-desc">
                  Apply mathematical concepts, digital media arts management, exhibition practices, and standard workflows across content creation, delivery, and consumption.
                </div>
              </li>
              <li>
                <span class="outcome-code">DMIA02</span>
                <div class="outcome-desc">
                  Analyze user requirements to guide design selection, asset creation, testing, and delivery of interactive digital media solutions.
                </div>
              </li>
              <li>
                <span class="outcome-code">DMIA03</span>
                <div class="outcome-desc">
                  Integrate traditional fine arts techniques with modern digital media platforms and workflows.
                </div>
              </li>
              <li>
                <span class="outcome-code">DMIA04</span>
                <div class="outcome-desc">
                  Implement creative projects effectively while evaluating content consumption across entertainment and corporate environments.
                </div>
              </li>
              <li>
                <span class="outcome-code">DMIA05</span>
                <div class="outcome-desc">
                  Utilize industry-standard tools, technical skills, and practical workflows in digital content creation.
                </div>
              </li>
              <li>
                <span class="outcome-code">DMIA06</span>
                <div class="outcome-desc">
                  Collaborate effectively both as an individual contributor and as a team member or leader within interdisciplinary settings.
                </div>
              </li>
              <li>
                <span class="outcome-code">DMIA07</span>
                <div class="outcome-desc">
                  Address professional, ethical, legal, security, and social responsibilities within media practice.
                </div>
              </li>
              <li>
                <span class="outcome-code">DMIA08</span>
                <div class="outcome-desc">
                  Communicate creative concepts and technical ideas effectively across diverse audiences.
                </div>
              </li>
              <li>
                <span class="outcome-code">DMIA09</span>
                <div class="outcome-desc">
                  Identify and adapt to contemporary industry trends, techniques, and emerging practices.
                </div>
              </li>
              <li>
                <span class="outcome-code">DMIA10</span>
                <div class="outcome-desc">
                  Recognize the importance of continuous self-directed learning and professional development.
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

/* ==========================================================================
   BSDMIA Soft Cantaloupe Theme (#FDA172 / Light Pastel Palette)
   ========================================================================== */
.theme-bsdmia-cantaloupe {
  width: 100%;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  color: #2c2523;
  overflow-x: hidden;
}

/* ==========================================================================
   Hero Section with Multi-Layered Soft Clouds
   ========================================================================== */
.program-hero-centered {
  position: relative;
  background: linear-gradient(135deg, #FFF0E5 0%, #FFE3D1 50%, #FFCA99 100%);
  min-height: clamp(480px, 60vh, 620px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(4rem, 8vh, 7rem) 1.25rem clamp(3.5rem, 7vh, 6.5rem) 1.25rem;
  text-align: center;
  overflow: hidden;
  border-bottom: 2px solid #FDA172;
}

.hero-cloud-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

.cloud-shape {
  position: absolute;
  filter: drop-shadow(0 12px 24px rgba(253, 161, 114, 0.18));
  animation: floatCloud 14s ease-in-out infinite alternate;
}

/* Cloud 1: Top Left */
.cloud-1 {
  width: clamp(320px, 45vw, 520px);
  top: -30px;
  left: -60px;
}

/* Cloud 2: Bottom Right */
.cloud-2 {
  width: clamp(420px, 58vw, 750px);
  bottom: -80px;
  right: -90px;
  animation-delay: -4s;
}

/* Cloud 3: Top Right */
.cloud-3 {
  width: clamp(300px, 40vw, 480px);
  top: 10%;
  right: -20px;
  animation-delay: -8s;
}

/* Cloud 4: Mid-Left Floating Puff */
.cloud-4 {
  width: clamp(240px, 32vw, 380px);
  top: 45%;
  left: 2%;
  animation-delay: -11s;
}

/* Cloud 5: Lower Horizon Puff */
.cloud-5 {
  width: clamp(380px, 50vw, 620px);
  bottom: -110px;
  left: 15%;
  animation-delay: -6s;
}

@keyframes floatCloud {
  0% {
    transform: translateY(0px) scale(1);
  }
  100% {
    transform: translateY(-18px) scale(1.03);
  }
}

.hero-content-centered {
  position: relative;
  z-index: 2;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.program-logo-wrapper {
  margin-bottom: clamp(0.85rem, 2vh, 1.5rem);
  display: flex;
  justify-content: center;
  width: 100%;
}

.hero-program-logo {
  height: clamp(140px, 26vw, 300px);
  width: auto;
  max-width: 85%;
  object-fit: contain;
  filter: drop-shadow(0 10px 20px rgba(224, 109, 59, 0.25));
  transition: transform 0.3s ease;
}

.hero-program-logo:hover {
  transform: scale(1.05);
}

.hero-content-centered h1 {
  font-size: clamp(1.85rem, 4.5vw, 2.85rem);
  font-weight: 800;
  color: #D65A27;
  margin-bottom: 0.85rem;
  letter-spacing: -0.02em;
  line-height: 1.15;
}

.hero-content-centered p {
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: #5c4339;
  max-width: 640px;
  line-height: 1.65;
  font-weight: 500;
  margin-bottom: 0;
}

/* ==========================================================================
   Page Body & Layout
   ========================================================================== */
.page-body {
  position: relative;
  background-color: #fffaf7;
  padding: clamp(2.5rem, 5vw, 4.5rem) 0 clamp(3.5rem, 6vw, 6rem) 0;
}

.body-grid-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(rgba(253, 161, 114, 0.15) 1px, transparent 1px);
  background-size: 28px 28px;
  pointer-events: none;
  opacity: 0.8;
}

.container {
  position: relative;
  z-index: 2;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.25rem;
}

.relative-z {
  position: relative;
  z-index: 2;
}

.section {
  margin-bottom: clamp(2.5rem, 5vw, 4.5rem);
}

.section-header {
  margin-bottom: clamp(1.5rem, 3vw, 2.25rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.section-header h2 {
  font-size: clamp(1.6rem, 3.2vw, 2.2rem);
  font-weight: 800;
  color: #8c3b18;
  margin: 0;
}

.header-line {
  width: 60px;
  height: 3px;
  background: #FDA172;
  margin-top: 0.65rem;
  border-radius: 2px;
}

/* ==========================================================================
   1. Program Outcomes
   ========================================================================== */
.outcomes-editorial-container {
  background: #ffffff;
  border: 1px solid #ffe3d1;
  border-radius: 16px;
  padding: clamp(1.5rem, 4vw, 2.75rem);
  box-shadow: 0 4px 20px -4px rgba(253, 161, 114, 0.08);
  display: flex;
  flex-direction: column;
  gap: clamp(2rem, 3.5vw, 2.75rem);
}

.outcomes-block {
  display: flex;
  flex-direction: column;
}

.block-intro {
  font-size: clamp(0.92rem, 1.6vw, 0.98rem);
  color: #6e5850;
  margin-bottom: 1rem;
  font-weight: 600;
}

.academic-outcomes-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.academic-outcomes-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  padding: 0.85rem 0;
  border-bottom: 1px solid #fff0e5;
}

.academic-outcomes-list li:last-child {
  border-bottom: none;
}

.outcome-marker {
  font-weight: 800;
  font-size: 0.95rem;
  color: #D65A27;
  flex-shrink: 0;
  min-width: 22px;
}

.outcome-text {
  font-size: clamp(0.92rem, 1.6vw, 0.98rem);
  color: #4a3a35;
  line-height: 1.65;
}

.cite-tag {
  color: #8c766e;
  font-size: 0.88rem;
  font-weight: 500;
  display: inline;
}

/* ==========================================================================
   2. Curriculum Rationale
   ========================================================================== */
.rationale-academic-box {
  background: #ffffff;
  border: 1px solid #ffe3d1;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px -4px rgba(253, 161, 114, 0.08);
}

.policy-tag-banner {
  background: #fff0e5;
  border-bottom: 1px solid #ffca99;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.policy-title {
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  font-weight: 800;
  color: #8c3b18;
  letter-spacing: -0.01em;
}

.policy-sub {
  font-size: clamp(0.82rem, 1.4vw, 0.9rem);
  font-weight: 700;
  color: #D65A27;
  margin-top: 0.15rem;
}

.rationale-text-body {
  padding: clamp(1.5rem, 3vw, 2.5rem);
}

.rationale-text-body p {
  color: #4a3a35;
  font-size: clamp(0.92rem, 1.6vw, 1rem);
  line-height: 1.75;
  margin-bottom: 1.25rem;
  text-align: justify;
}

.rationale-text-body p:last-child {
  margin-bottom: 0;
}

/* ==========================================================================
   3. Curriculum Description
   ========================================================================== */
.description-editorial-container {
  background: #ffffff;
  border: 1px solid #ffe3d1;
  border-radius: 16px;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  box-shadow: 0 4px 20px -4px rgba(253, 161, 114, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.description-lead-list {
  list-style-type: disc;
  padding-left: 1.25rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.description-lead-list li {
  color: #4a3a35;
  font-size: clamp(0.95rem, 1.6vw, 1.02rem);
  line-height: 1.65;
  font-weight: 500;
}

/* ==========================================================================
   4. Student Organization with Floating Clouds
   ========================================================================== */
.org-fullbleed-section {
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding: clamp(3rem, 6vw, 4.5rem) 0;
  overflow: hidden;
  margin-bottom: clamp(2.5rem, 5vw, 4.5rem);
  background: linear-gradient(180deg, rgba(255, 240, 229, 0.4) 0%, rgba(255, 227, 209, 0.6) 100%);
}

.org-fullbleed-cloud-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.org-cloud {
  position: absolute;
  filter: blur(1px);
  animation: floatCloud 12s ease-in-out infinite alternate;
}

/* Org Cloud 1: Top Left */
.cloud-org-1 {
  width: clamp(320px, 48vw, 580px);
  top: -50px;
  left: -90px;
}

/* Org Cloud 2: Bottom Right */
.cloud-org-2 {
  width: clamp(400px, 55vw, 700px);
  bottom: -90px;
  right: -120px;
  animation-delay: -5s;
}

/* Org Cloud 3: Top Right Accent */
.cloud-org-3 {
  width: clamp(260px, 35vw, 420px);
  top: -20px;
  right: 12%;
  animation-delay: -8s;
}

/* Org Cloud 4: Bottom Left Foreground Puff */
.cloud-org-4 {
  width: clamp(300px, 40vw, 500px);
  bottom: -80px;
  left: 10%;
  animation-delay: -3s;
}

.org-clean-grid {
  display: grid;
  grid-template-columns: clamp(220px, 32vw, 380px) 1fr;
  gap: clamp(2rem, 4vw, 3.5rem);
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
}

.org-logo-col {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.org-open-logo {
  width: 100%;
  min-width: clamp(220px, 30vw, 400px);
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 10px 20px rgba(214, 90, 39, 0.2));
  transition: transform 0.3s ease;
}

.org-open-logo:hover {
  transform: scale(1.05);
}

.org-text-col {
  display: flex;
  flex-direction: column;
}

.org-text-col h3 {
  font-size: clamp(1.35rem, 2.5vw, 1.75rem);
  font-weight: 800;
  color: #D65A27;
  margin-bottom: 0.85rem;
  line-height: 1.25;
}

.org-statement {
  font-size: clamp(0.98rem, 1.8vw, 1.08rem);
  line-height: 1.8;
  color: #4a3a35;
  margin: 0;
  font-weight: 500;
}

/* ==========================================================================
   5. Graduate Outcomes
   ========================================================================== */
.outcomes-academic-container {
  background: #ffffff;
  border: 1px solid #ffe3d1;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px -4px rgba(253, 161, 114, 0.08);
}

.outcomes-table-header {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 1.5rem;
  padding: 1rem 1.75rem;
  background: #fff0e5;
  border-bottom: 2px solid #ffca99;
  font-weight: 800;
  font-size: 0.88rem;
  color: #8c3b18;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.outcomes-official-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.outcomes-official-list li {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 1.5rem;
  padding: 1.1rem 1.75rem;
  border-bottom: 1px solid #fff0e5;
  align-items: flex-start;
  transition: background-color 0.2s ease;
}

.outcomes-official-list li:last-child {
  border-bottom: none;
}

.outcomes-official-list li:hover {
  background-color: #fffaf7;
}

.outcome-code {
  font-weight: 800;
  font-size: 0.95rem;
  color: #D65A27;
  background: rgba(253, 161, 114, 0.2);
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  text-align: center;
  display: inline-block;
}

.outcome-desc {
  font-size: clamp(0.92rem, 1.6vw, 0.98rem);
  color: #4a3a35;
  line-height: 1.65;
  font-weight: 500;
}

/* ==========================================================================
   Animations & Breakpoints
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

@media (max-width: 768px) {
  .org-clean-grid {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1.5rem;
  }

  .org-open-logo {
    max-width: 240px;
    min-width: unset;
  }
}

@media (max-width: 640px) {
  .academic-outcomes-list li {
    padding: 0.75rem 0;
  }

  .outcomes-table-header,
  .outcomes-official-list li {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .outcome-code {
    width: fit-content;
  }
}
</style>