<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import { facultyData } from '@/data/facultyData'
import FacultyCard from '@/components/FacultyCard.vue'

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

// Extract BLIS faculty or fallback to Program Coordinator Ana Mae B. Cantel
const blisFaculty = computed(() => {
  const members: Array<{ name: string; role: string; education: string; photo: string }> = []

  facultyData.forEach((dept) => {
    dept.people.forEach((person) => {
      if (
        person.role.includes('BLIS') ||
        person.role.includes('Library') ||
        person.name.includes('Cantel')
      ) {
        members.push(person)
      }
    })
  })

  // If not found in facultyData, provide the fallback record
  if (members.length === 0) {
    members.push({
      name: 'Ana Mae B. Cantel',
      role: 'Program Coordinator (BLIS)',
      education: 'Master of Library and Information Science',
      photo: '/faculty/cantel.jpg'
    })
  }

  return members
})
</script>

<template>
  <div class="program-page theme-blis-skyblue">
    <!-- Hero Section with Extended Geometric Mosaic Overlay -->
    <section class="program-hero-centered">
      <div class="hero-geo-bg">
        <!-- SVG Mosaic Pattern Left -->
        <svg class="geo-pattern geo-left" viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="skyGrad1" x1="0" y1="0" x2="480" y2="480" gradientUnits="userSpaceOnUse">
              <stop stop-color="#3A9AD9" stop-opacity="0.25" />
              <stop offset="1" stop-color="#E2F1F8" stop-opacity="0.08" />
            </linearGradient>
            <linearGradient id="skyGrad2" x1="0" y1="480" x2="480" y2="0" gradientUnits="userSpaceOnUse">
              <stop stop-color="#64B5F6" stop-opacity="0.32" />
              <stop offset="1" stop-color="#B3E5FC" stop-opacity="0.12" />
            </linearGradient>
            <pattern id="hatchSky1" width="16" height="16" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="16" stroke="#2980B9" stroke-width="2.5" stroke-opacity="0.2" />
            </pattern>
            <pattern id="hatchSky2" width="16" height="16" patternTransform="rotate(-45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="16" stroke="#0288D1" stroke-width="2" stroke-opacity="0.18" />
            </pattern>
          </defs>

          <!-- Grid Row 1 -->
          <path d="M0 0 H160 V160 C71.6 160 0 88.4 0 0 Z" fill="url(#skyGrad1)" />
          <rect x="160" y="0" width="160" height="160" fill="url(#hatchSky1)" />
          <circle cx="400" cy="80" r="80" fill="url(#skyGrad2)" />

          <!-- Grid Row 2 -->
          <path d="M0 160 C88.4 160 160 231.6 160 320 H0 V160 Z" fill="url(#skyGrad2)" />
          <path d="M160 160 A160 160 0 0 1 320 320 H160 V160 Z" fill="#2980B9" fill-opacity="0.1" />
          <rect x="320" y="160" width="160" height="160" fill="url(#hatchSky2)" />

          <!-- Grid Row 3 -->
          <circle cx="80" cy="400" r="80" fill="#0288D1" fill-opacity="0.12" />
          <path d="M160 320 H320 V480 C231.6 480 160 408.4 160 320 Z" fill="url(#skyGrad1)" />
          <path d="M320 320 A160 160 0 0 1 480 480 H320 V320 Z" fill="url(#skyGrad2)" />
        </svg>

        <!-- SVG Mosaic Pattern Right -->
        <svg class="geo-pattern geo-right" viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Grid Row 1 -->
          <circle cx="80" cy="80" r="80" fill="url(#skyGrad2)" />
          <path d="M160 0 A160 160 0 0 1 320 160 V0 H160 Z" fill="url(#skyGrad1)" />
          <rect x="320" y="0" width="160" height="160" fill="url(#hatchSky1)" />

          <!-- Grid Row 2 -->
          <rect x="0" y="160" width="160" height="160" fill="url(#hatchSky2)" />
          <path d="M160 160 H320 V320 C231.6 320 160 248.4 160 160 Z" fill="url(#skyGrad2)" />
          <path d="M320 160 C408.4 160 480 231.6 480 320 H320 V160 Z" fill="#2980B9" fill-opacity="0.12" />

          <!-- Grid Row 3 -->
          <path d="M0 320 A160 160 0 0 1 160 480 H0 V320 Z" fill="url(#skyGrad1)" />
          <circle cx="240" cy="400" r="80" fill="#0288D1" fill-opacity="0.14" />
          <rect x="320" y="320" width="160" height="160" fill="url(#hatchSky1)" />
        </svg>
      </div>

      <div class="hero-content-centered animate-on-scroll">
        <div class="program-logo-wrapper">
          <img src="/BLIS.png" alt="BLIS Logo" class="hero-program-logo" />
        </div>
        <h1>Library & Information Science</h1>
        <p>
          The Degree of Bachelor of Library and Information Science (BLIS) is a four-year program that prepares students in the development, deployment, and management of information resources in print, non-print, electronic, and digital formats.
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
                    act in recognition of professional, social and ethical responsibility <span class="cite-tag">(Graduate Outcomes: CS09, IS09, IT12).</span>
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
                Based on the Guidelines for the Implementation of CMO 46 s. 2012, this PSG implements the “shift to learning competency-based standards/outcomes-based education”. It specifies the “core competencies” expected of Bachelor of Library and Information Science (BLIS) graduates regardless of the type of HEI they graduate from. However, in recognition of the spirit of outcomes-based education-which puts premium in the achievement of learning outcomes through different strategies-and in recognition of the typology of HEIs, this PSG also provides ample space for HEIs to innovate in the curriculum, in line with the assessment of how best to achieve learning outcomes in their particular contexts and their respective missions.
              </p>
              <p>
                Policies and standards in the Library and Information Science (LIS) program are necessary for the highest level of quality desired for the education and training of library and information science professionals. They are meant to institutionalize the profession’s central function of providing quality information service to library/information center clientele or users. Its purpose is to make LIS education responsive to the challenges of society’s changing information needs brought about by rapid technological changes and in keeping with the need to make LIS professionals globally competitive.
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
                The LIS curriculum is designed to equip the professional with the composite knowledge, skills, attitudes, and tools to enable him/her to be responsive to the changing information needs of society.
              </li>
            </ul>
          </div>
        </section>
      </div>

      <!-- 4. Student Organization with Geometric Mosaic Overlay -->
      <section class="org-fullbleed-section animate-on-scroll">
        <div class="org-fullbleed-geo-bg">
          <svg class="org-geo geo-org-1" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0 H120 V120 C53.7 120 0 66.3 0 0 Z" fill="rgba(58, 154, 217, 0.2)" />
            <circle cx="180" cy="60" r="60" fill="rgba(100, 181, 246, 0.25)" />
            <path d="M120 120 A120 120 0 0 1 240 240 H120 V120 Z" fill="rgba(2, 136, 209, 0.15)" />
          </svg>

          <svg class="org-geo geo-org-2" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M120 0 A120 120 0 0 1 240 120 V0 H120 Z" fill="rgba(58, 154, 217, 0.22)" />
            <path d="M0 120 C66.3 120 120 173.7 120 240 H0 V120 Z" fill="rgba(179, 229, 252, 0.4)" />
          </svg>
        </div>

        <div class="container relative-z">
          <div class="org-clean-grid">
            <div class="org-logo-col">
              <img src="/BLIS2.png" alt="Library and Information Science Student Society Emblem" class="org-open-logo" />
            </div>

            <div class="org-text-col">
              <h3>Library & Information Science Student Organization</h3>
              <p class="org-statement">
                The Library & Information Science Student Organization fosters professional growth, academic excellence, and community engagement among BLIS students, advocating for information accessibility, digital literacy, and the advancement of modern librarianship.
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
                <span class="outcome-code">LIS01</span>
                <div class="outcome-desc">
                  Select, evaluate, organize and disseminate print, multimedia, electronic and digital information resources.
                </div>
              </li>
              <li>
                <span class="outcome-code">LIS02</span>
                <div class="outcome-desc">
                  Effectively communicate orally and in writing, at the same time, use a variety of communication methods in a manner that best enables the message to be understood.
                </div>
              </li>
              <li>
                <span class="outcome-code">LIS03</span>
                <div class="outcome-desc">
                  Demonstrate logical and systematic approaches to the accomplishment of tasks.
                </div>
              </li>
              <li>
                <span class="outcome-code">LIS04</span>
                <div class="outcome-desc">
                  Formulate objectives, policies and processes as well as design and manage resources in anticipation of future educational or organizational changes.
                </div>
              </li>
              <li>
                <span class="outcome-code">LIS05</span>
                <div class="outcome-desc">
                  Recognize, analyze and constructively solve problems, provide appropriate direction and assistance, and overcome barriers when necessary.
                </div>
              </li>
              <li>
                <span class="outcome-code">LIS06</span>
                <div class="outcome-desc">
                  Identify users’ needs and wants through reference interviews, customer surveys, complaint logs and other means in order to evaluate the effectiveness of current services and improve these and other practices.
                </div>
              </li>
              <li>
                <span class="outcome-code">LIS07</span>
                <div class="outcome-desc">
                  Work well in groups and seek ways to build team efforts to solve problems and achieve common goals.
                </div>
              </li>
              <li>
                <span class="outcome-code">LIS08</span>
                <div class="outcome-desc">
                  Understand library’s automation system and the use of computer hardware, software and peripherals, including online collaboration tools (the internet, the worldwide web, and social networking sites).
                </div>
              </li>
              <li>
                <span class="outcome-code">LIS09</span>
                <div class="outcome-desc">
                  Develop information technology solutions (e.g., library automation system, Website, e-mail system, etc.).
                </div>
              </li>
              <li>
                <span class="outcome-code">LIS10</span>
                <div class="outcome-desc">
                  Conduct significant research projects that will benefit the library and the organization
                </div>
              </li>
              <li>
                <span class="outcome-code">LIS11</span>
                <div class="outcome-desc">
                  Evaluate and debate information policy (e.g., copyright law, plagiarism, cybercrimes, etc.) and ethical issues applicable in local, national or global context.
                </div>
              </li>
              <li>
                <span class="outcome-code">LIS12</span>
                <div class="outcome-desc">
                  Participate in continuing education activities organized by library associations and other entities
                </div>
              </li>
            </ul>
          </div>
        </section>

        <!-- 6. Library & Information Science Faculty Section -->
        <section class="section animate-on-scroll">
          <div class="section-header align-left">
            <h2>Library & Information Science Faculty</h2>
            <div class="header-line align-left-line"></div>
          </div>

          <div class="faculty-card-grid">
            <FacultyCard
              v-for="person in blisFaculty"
              :key="person.name"
              :name="person.name"
              :role="person.role"
              :education="person.education"
              :photo="person.photo"
            />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

/* ==========================================================================
   BLIS Light Soft Sky Blue Theme (#2980B9 / #3A9AD9 Palette)
   ========================================================================== */
.theme-blis-skyblue {
  width: 100%;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  color: #1a2a3a;
  overflow-x: hidden;
}

/* ==========================================================================
   Hero Section with Soft Sky Blue Geometric Mosaic Overlay
   ========================================================================== */
.program-hero-centered {
  position: relative;
  background: linear-gradient(135deg, #EAF5FC 0%, #D4ECF9 50%, #B3E5FC 100%);
  min-height: clamp(480px, 60vh, 620px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(4rem, 8vh, 7rem) 1.25rem clamp(3.5rem, 7vh, 6.5rem) 1.25rem;
  text-align: center;
  overflow: hidden;
  border-bottom: 2px solid #3A9AD9;
}

.hero-geo-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

.geo-pattern {
  position: absolute;
  width: clamp(380px, 48vw, 680px);
  height: auto;
  opacity: 0.88;
}

.geo-left {
  top: -60px;
  left: -80px;
}

.geo-right {
  bottom: -70px;
  right: -80px;
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
  filter: drop-shadow(0 10px 20px rgba(41, 128, 185, 0.22));
  transition: transform 0.3s ease;
}

.hero-program-logo:hover {
  transform: scale(1.05);
}

.hero-content-centered h1 {
  font-size: clamp(1.85rem, 4.5vw, 2.85rem);
  font-weight: 800;
  color: #1A5276;
  margin-bottom: 0.85rem;
  letter-spacing: -0.02em;
  line-height: 1.15;
}

.hero-content-centered p {
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: #2c4d63;
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
  background-color: #f7fcff;
  padding: clamp(2.5rem, 5vw, 4.5rem) 0 clamp(3.5rem, 6vw, 6rem) 0;
}

.body-grid-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(rgba(58, 154, 217, 0.18) 1px, transparent 1px);
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

.section-header.align-left {
  align-items: flex-start;
  text-align: left;
}

.section-header h2 {
  font-size: clamp(1.6rem, 3.2vw, 2.2rem);
  font-weight: 800;
  color: #154360;
  margin: 0;
}

.header-line {
  width: 60px;
  height: 3px;
  background: #3A9AD9;
  margin-top: 0.65rem;
  border-radius: 2px;
}

.align-left-line {
  margin-left: 0;
}

/* ==========================================================================
   1. Program Outcomes
   ========================================================================== */
.outcomes-editorial-container {
  background: #ffffff;
  border: 1px solid #d4ecf9;
  border-radius: 16px;
  padding: clamp(1.5rem, 4vw, 2.75rem);
  box-shadow: 0 4px 20px -4px rgba(58, 154, 217, 0.08);
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
  color: #34495e;
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
  border-bottom: 1px solid #eaf5fc;
}

.academic-outcomes-list li:last-child {
  border-bottom: none;
}

.outcome-marker {
  font-weight: 800;
  font-size: 0.95rem;
  color: #2980B9;
  flex-shrink: 0;
  min-width: 22px;
}

.outcome-text {
  font-size: clamp(0.92rem, 1.6vw, 0.98rem);
  color: #2c3e50;
  line-height: 1.65;
}

.cite-tag {
  color: #5c7285;
  font-size: 0.88rem;
  font-weight: 500;
  display: inline;
}

/* ==========================================================================
   2. Curriculum Rationale
   ========================================================================== */
.rationale-academic-box {
  background: #ffffff;
  border: 1px solid #d4ecf9;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px -4px rgba(58, 154, 217, 0.08);
}

.policy-tag-banner {
  background: #eaf5fc;
  border-bottom: 1px solid #b3e5fc;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.policy-title {
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  font-weight: 800;
  color: #154360;
  letter-spacing: -0.01em;
}

.policy-sub {
  font-size: clamp(0.82rem, 1.4vw, 0.9rem);
  font-weight: 700;
  color: #2980B9;
  margin-top: 0.15rem;
}

.rationale-text-body {
  padding: clamp(1.5rem, 3vw, 2.5rem);
}

.rationale-text-body p {
  color: #2c3e50;
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
  border: 1px solid #d4ecf9;
  border-radius: 16px;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  box-shadow: 0 4px 20px -4px rgba(58, 154, 217, 0.08);
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
  color: #2c3e50;
  font-size: clamp(0.95rem, 1.6vw, 1.02rem);
  line-height: 1.65;
  font-weight: 500;
}

/* ==========================================================================
   4. Student Organization with Full-Bleed Geo Pattern
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
  background: linear-gradient(180deg, rgba(234, 245, 252, 0.5) 0%, rgba(212, 236, 249, 0.7) 100%);
}

.org-fullbleed-geo-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.org-geo {
  position: absolute;
  width: clamp(240px, 35vw, 420px);
  height: auto;
}

.geo-org-1 {
  top: -30px;
  left: -40px;
}

.geo-org-2 {
  bottom: -40px;
  right: -50px;
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
  filter: drop-shadow(0 10px 20px rgba(41, 128, 185, 0.2));
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
  color: #2980B9;
  margin-bottom: 0.85rem;
  line-height: 1.25;
}

.org-statement {
  font-size: clamp(0.98rem, 1.8vw, 1.08rem);
  line-height: 1.8;
  color: #2c3e50;
  margin: 0;
  font-weight: 500;
}

/* ==========================================================================
   5. Graduate Outcomes
   ========================================================================== */
.outcomes-academic-container {
  background: #ffffff;
  border: 1px solid #d4ecf9;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px -4px rgba(58, 154, 217, 0.08);
}

.outcomes-table-header {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 1.5rem;
  padding: 1rem 1.75rem;
  background: #eaf5fc;
  border-bottom: 2px solid #b3e5fc;
  font-weight: 800;
  font-size: 0.88rem;
  color: #154360;
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
  border-bottom: 1px solid #eaf5fc;
  align-items: flex-start;
  transition: background-color 0.2s ease;
}

.outcomes-official-list li:last-child {
  border-bottom: none;
}

.outcomes-official-list li:hover {
  background-color: #f7fcff;
}

.outcome-code {
  font-weight: 800;
  font-size: 0.95rem;
  color: #2980B9;
  background: rgba(58, 154, 217, 0.18);
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  text-align: center;
  display: inline-block;
}

.outcome-desc {
  font-size: clamp(0.92rem, 1.6vw, 0.98rem);
  color: #2c3e50;
  line-height: 1.65;
  font-weight: 500;
}

/* ==========================================================================
   6. Library & Information Science Faculty Cards Layout
   ========================================================================== */
.faculty-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 240px));
  gap: clamp(1rem, 2vw, 1.25rem);
  margin-top: 1rem;
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

  .faculty-card-grid {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
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