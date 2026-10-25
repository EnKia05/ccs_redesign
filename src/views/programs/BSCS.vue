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

// Dynamically extract Computer Science faculty members & department leadership from facultyData
const csFaculty = computed(() => {
  const members: Array<{ name: string; role: string; education: string; photo: string }> = []

  facultyData.forEach((dept) => {
    dept.people.forEach((person) => {
      if (person.role.includes('BSCS') || person.role.includes('Computer Science')) {
        members.push(person)
      }
    })
  })

  return members
})
</script>

<template>
  <div class="program-page theme-bscs-cyan">
    <!-- Centered Hero Section with Dynamic Dark Cyan Geometric Background -->
    <section class="program-hero-centered">
      <!-- Extended Circular Geometric Shapes Overlay -->
      <div class="hero-geo-bg">
        <div class="geo-circle geo-circle-1"></div>
        <div class="geo-circle geo-circle-1-inner"></div>
        <div class="geo-ring geo-ring-1"></div>
        <div class="geo-ring geo-ring-1-outer"></div>
        
        <div class="geo-circle geo-circle-2"></div>
        <div class="geo-circle geo-circle-2-core"></div>
        <div class="geo-ring geo-ring-2"></div>
        <div class="geo-ring geo-ring-2-outer"></div>
        
        <div class="geo-arc geo-arc-1"></div>
        <div class="geo-arc geo-arc-2"></div>
        <div class="geo-circle geo-circle-3"></div>
        <div class="geo-circle geo-circle-4"></div>
      </div>

      <div class="hero-content-centered animate-on-scroll">
        <div class="program-logo-wrapper">
          <img src="/CS.png" alt="BSCS Logo" class="hero-program-logo" />
        </div>
        <h1>Computer Science</h1>
        <p>The Computer Science (CS) Program is designed for students who wants to study computing in depth.</p>
      </div>
    </section>

    <!-- Main Content Container -->
    <div class="page-body">
      <div class="body-grid-pattern"></div>

      <div class="container">
        <!-- 1. Program Outcomes (Human Editorial Academic Format) -->
        <section class="section animate-on-scroll">
          <div class="section-header">
            <h2>Program Outcomes</h2>
            <div class="header-line"></div>
          </div>

          <div class="outcomes-editorial-container">
            <!-- Part 1: General Institutional Outcomes -->
            <div class="outcomes-block">
              <h3 class="block-title">General Institutional & Professional Capabilities</h3>
              <p class="block-intro">The graduates have the ability to:</p>
              
              <ul class="academic-outcomes-list">
                <li>
                  <span class="outcome-marker">a)</span>
                  <div class="outcome-text">
                    Articulate and discuss the latest developments in the specific field of practice. <span class="cite-tag">(Philippine Qualifications Framework [PQF] Level 6 Descriptor)</span>
                  </div>
                </li>
                <li>
                  <span class="outcome-marker">b)</span>
                  <div class="outcome-text">
                    Effectively communicate orally and in writing using both English and Filipino languages.
                  </div>
                </li>
                <li>
                  <span class="outcome-marker">c)</span>
                  <div class="outcome-text">
                    Work effectively and independently in multi-disciplinary and multi-cultural teams. <span class="cite-tag">(PQF Level 6 Descriptor)</span>
                  </div>
                </li>
                <li>
                  <span class="outcome-marker">d)</span>
                  <div class="outcome-text">
                    Act in recognition of professional, social, and ethical responsibility in all computing practices.
                  </div>
                </li>
                <li>
                  <span class="outcome-marker">e)</span>
                  <div class="outcome-text">
                    Preserve and promote "Filipino historical and cultural heritage" based on RA 7722.
                  </div>
                </li>
              </ul>
            </div>

            <!-- Part 2: Computing Discipline Outcomes -->
            <div class="outcomes-block">
              <h3 class="block-title">Computing Discipline Outcomes</h3>
              <p class="block-intro">The graduates of BSCS, BSIS, and BSIT must have the ability to:</p>
              
              <ul class="academic-outcomes-list">
                <li>
                  <span class="outcome-marker">a)</span>
                  <div class="outcome-text">
                    Analyze complex problems, and identify and define the computing requirements needed to design an appropriate solution.
                  </div>
                </li>
                <li>
                  <span class="outcome-marker">b)</span>
                  <div class="outcome-text">
                    Apply computing and other knowledge domains to address complex real-world problems effectively.
                  </div>
                </li>
                <li>
                  <span class="outcome-marker">c)</span>
                  <div class="outcome-text">
                    Design and develop computing solutions using a comprehensive system-level perspective.
                  </div>
                </li>
                <li>
                  <span class="outcome-marker">d)</span>
                  <div class="outcome-text">
                    Utilize modern computing tools, frameworks, and technologies effectively in software engineering.
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
            <!-- Official Policy Tag Banner -->
            <div class="policy-tag-banner">
              <span class="policy-title">Based on CHED Memo Order No. 25 s. 2015</span>
              <span class="policy-sub">Effective: Academic Year 2018–2019</span>
            </div>

            <!-- Authentic Curriculum Rationale Body -->
            <div class="rationale-text-body">
              <p>
                The computing field has grown enormously and is described as dynamic. It encompasses computer engineering, software engineering, computer science, information systems, and information technology. Based on the Guidelines for the Implementation of CMO 46 s 2012 which implements the shift to learning competency-based standards/outcomes-based education, the Commission released CMO 25 s 2015 last August 2015 that integrates outcomes-based education. It specifies the "core competencies" expected of graduates of Bachelor of Science in Computer Science (BSCS), Bachelor of Science in Information Systems (BSIS), and Bachelor of Science in Information Technology (BSIT).
              </p>
              <p>
                The Commission recognizes the need to be responsive to the current needs of the country and in order to face the challenges of advancement. It is essential and important that the country's computing capability be continually developed and strengthened. In this PSG it clearly defines the area of focus for each field, common outcomes for each discipline, and new GE for K-12 program. In the PSG it defines the BSCS program that includes the study of computing concepts and theories, algorithmic foundations, and new developments in computing. The program prepares students to design and create algorithmically complex software and develop new and effective algorithms for solving computing problems.
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
            <!-- Framework Lead Bullet Points -->
            <ul class="description-lead-list">
              <li>
                The BSCS curriculum includes foundation and professional courses that cover theory, algorithms, software design and development, and new developments in computing.
              </li>
              <li>
                The curriculum should include courses to cover Knowledge Areas recommended in ACM Computer Science Curricula 2013 (enumerated in PSG).
              </li>
            </ul>

            <!-- 11 Knowledge Areas Container -->
            <div class="knowledge-areas-wrapper">
              <h3 class="knowledge-title">Defines eleven (11) Knowledge Areas:</h3>
              
              <div class="knowledge-grid">
                <div class="knowledge-item">
                  <span class="item-number">01</span>
                  <span class="item-name">Algorithms and Complexity</span>
                </div>
                <div class="knowledge-item">
                  <span class="item-number">02</span>
                  <span class="item-name">Architecture and Organization</span>
                </div>
                <div class="knowledge-item">
                  <span class="item-number">03</span>
                  <span class="item-name">Discreet Structures</span>
                </div>
                <div class="knowledge-item">
                  <span class="item-number">04</span>
                  <span class="item-name">Human Computer Interaction</span>
                </div>
                <div class="knowledge-item">
                  <span class="item-number">05</span>
                  <span class="item-name">Information Assurance and Security</span>
                </div>
                <div class="knowledge-item">
                  <span class="item-number">06</span>
                  <span class="item-name">Networks and Communications</span>
                </div>
                <div class="knowledge-item">
                  <span class="item-number">07</span>
                  <span class="item-name">Operating Systems</span>
                </div>
                <div class="knowledge-item">
                  <span class="item-number">08</span>
                  <span class="item-name">Programming Languages (Design and Implementation)</span>
                </div>
                <div class="knowledge-item">
                  <span class="item-number">09</span>
                  <span class="item-name">Software Development Fundamentals</span>
                </div>
                <div class="knowledge-item">
                  <span class="item-number">10</span>
                  <span class="item-name">Software Engineering</span>
                </div>
                <div class="knowledge-item">
                  <span class="item-number">11</span>
                  <span class="item-name">Social Issues and Professional Practice</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- 4. Student Organization (Full-Width Bleed Section Outside Grid Container) -->
      <section class="org-fullbleed-section animate-on-scroll">
        <!-- Abstract Cyan Geometric Shapes Across Entire Page Width -->
        <div class="org-fullbleed-geo">
          <div class="geo-circle org-shape-left"></div>
          <div class="geo-ring org-ring-left"></div>
          <div class="geo-ring org-ring-center"></div>
          <div class="geo-ring org-ring-center-inner"></div>
          <div class="geo-arc org-arc-right"></div>
          <div class="geo-circle org-shape-right"></div>
          <div class="geo-circle org-shape-right-small"></div>
        </div>

        <div class="container relative-z">
          <div class="org-clean-grid">
            <div class="org-logo-col">
              <img src="/CS2.png" alt="Association of Computer Science Students Emblem" class="org-open-logo" />
            </div>

            <div class="org-text-col">
              <h3>Computer Science Society</h3>
              <p class="org-statement">
                The Computer Science Society embraces its Mission to promote the Computer Science Course, to guide and prepare the students, to grow and strengthen the bonds of each member as one family, and to utilize the resources of the program to provide service to society and emphasize to students the need of lifelong learning, ethical conduct and an understanding of the diverse social context in which Computer Science is practiced. We furthermore seek to provide excellence in activities and outreaches to develop the community of all Computer Science Students to help and support its members to reach their goals in the ever advance, 21st century.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div class="container">
        <!-- 5. Graduate Outcomes (Official CS01-CS10 Academic Document Format) -->
        <section class="section animate-on-scroll">
          <div class="section-header">
            <h2>Graduate Outcomes</h2>
            <div class="header-line"></div>
          </div>

          <div class="outcomes-academic-container">
            <div class="outcomes-table-header">
              <span class="code-col-head">Graduate Outcomes Code</span>
              <span class="desc-col-head">Graduate Outcomes</span>
            </div>

            <ul class="outcomes-official-list">
              <li>
                <span class="outcome-code">CS01</span>
                <div class="outcome-desc">
                  Apply foundational computing concepts, mathematical principles, and domain-specific knowledge to structure, conceptualize, and solve complex computing models.
                </div>
              </li>
              <li>
                <span class="outcome-code">CS02</span>
                <div class="outcome-desc">
                  Analyze, formulate, and research technical literature to solve complex computing problems using mathematical and domain fundamentals.
                </div>
              </li>
              <li>
                <span class="outcome-code">CS03</span>
                <div class="outcome-desc">
                  Utilize mathematical logic, algorithmic foundations, and computer science theories to model and build software systems while evaluating design trade-offs.
                </div>
              </li>
              <li>
                <span class="outcome-code">CS04</span>
                <div class="outcome-desc">
                  Demonstrate thorough knowledge and practical understanding of information security principles across system architecture and deployment.
                </div>
              </li>
              <li>
                <span class="outcome-code">CS05</span>
                <div class="outcome-desc">
                  Design and evaluate solutions, modules, or processes for complex computing problems considering safety, societal, cultural, and environmental impacts.
                </div>
              </li>
              <li>
                <span class="outcome-code">CS06</span>
                <div class="outcome-desc">
                  Select, adapt, and apply modern software tools, technologies, and techniques to complex computing activities with an awareness of their limitations.
                </div>
              </li>
              <li>
                <span class="outcome-code">CS07</span>
                <div class="outcome-desc">
                  Function effectively as an individual contributor, team member, or leader within multidisciplinary and diverse technical environments.
                </div>
              </li>
              <li>
                <span class="outcome-code">CS08</span>
                <div class="outcome-desc">
                  Communicate technical concepts effectively in written reports, presentations, and system documentation to both technical specialists and broad audiences.
                </div>
              </li>
              <li>
                <span class="outcome-code">CS09</span>
                <div class="outcome-desc">
                  Recognize legal, social, ethical, and professional responsibilities inherent in computer technology deployment and adhere to ethical standards.
                </div>
              </li>
              <li>
                <span class="outcome-code">CS10</span>
                <div class="outcome-desc">
                  Recognize the necessity for continuous professional growth and engage in independent lifelong learning within the dynamic field of computing.
                </div>
              </li>
            </ul>
          </div>
        </section>

        <!-- 6. Computer Science Faculty Section (Using Shared FacultyCard Component) -->
        <section class="section animate-on-scroll">
          <div class="section-header align-left">
            <h2>Computer Science Faculty</h2>
            <div class="header-line align-left-line"></div>
          </div>

          <div class="faculty-card-grid">
            <FacultyCard
              v-for="person in csFaculty"
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
   BSCS Dark Cyan Theme & Global Scoping
   ========================================================================== */
.theme-bscs-cyan {
  width: 100%;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  color: #1e293b;
  overflow-x: hidden;
}

/* ==========================================================================
   Hero Section with Dynamic Concentric & Overlapping Cyan Geometric Shapes
   ========================================================================== */
.program-hero-centered {
  position: relative;
  background: linear-gradient(135deg, #04383c 0%, #085f67 50%, #0e7490 100%);
  min-height: clamp(480px, 60vh, 620px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(4rem, 8vh, 7rem) 1.25rem clamp(3.5rem, 7vh, 6.5rem) 1.25rem;
  text-align: center;
  overflow: hidden;
  border-bottom: 2px solid #FFB027; /* CPU Gold Accent */
}

.hero-geo-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

.geo-circle {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, rgba(6, 182, 212, 0.45) 0%, rgba(14, 116, 144, 0.25) 60%, transparent 100%);
  backdrop-filter: blur(4px);
}

.geo-circle-1 {
  width: min(380px, 65vw);
  height: min(380px, 65vw);
  top: -100px;
  left: 6%;
  box-shadow: inset 0 0 50px rgba(6, 182, 212, 0.35);
}

.geo-circle-1-inner {
  width: min(200px, 35vw);
  height: min(200px, 35vw);
  top: -10px;
  left: 12%;
  background: radial-gradient(circle at 40% 40%, rgba(34, 211, 238, 0.5) 0%, rgba(8, 145, 178, 0.2) 70%, transparent 100%);
}

.geo-circle-2 {
  width: min(520px, 85vw);
  height: min(520px, 85vw);
  top: 5%;
  right: -120px;
  background: radial-gradient(circle at 30% 30%, rgba(8, 145, 178, 0.38) 0%, rgba(21, 94, 117, 0.18) 70%, transparent 100%);
}

.geo-circle-2-core {
  width: min(260px, 45vw);
  height: min(260px, 45vw);
  top: 20%;
  right: 10px;
  background: radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 80%);
}

.geo-circle-3 {
  width: min(380px, 65vw);
  height: min(380px, 65vw);
  bottom: -110px;
  left: 30%;
  background: radial-gradient(circle at 40% 40%, rgba(14, 116, 144, 0.35) 0%, transparent 75%);
}

.geo-circle-4 {
  width: min(180px, 30vw);
  height: min(180px, 30vw);
  top: 15%;
  left: 2%;
  background: radial-gradient(circle, rgba(34, 211, 238, 0.25) 0%, transparent 70%);
}

.geo-ring {
  position: absolute;
  border-radius: 50%;
  border: 2px solid rgba(6, 182, 212, 0.25);
}

.geo-ring-1 {
  width: min(480px, 80vw);
  height: min(480px, 80vw);
  top: -160px;
  left: 3%;
  border-top-color: rgba(6, 182, 212, 0.6);
  border-right-color: rgba(6, 182, 212, 0.4);
}

.geo-ring-1-outer {
  width: min(620px, 95vw);
  height: min(620px, 95vw);
  top: -220px;
  left: -2%;
  border-left-color: rgba(34, 211, 238, 0.35);
  border-bottom-color: rgba(6, 182, 212, 0.15);
}

.geo-ring-2 {
  width: min(580px, 90vw);
  height: min(580px, 90vw);
  top: 0%;
  right: -150px;
  border-left-color: rgba(6, 182, 212, 0.5);
  border-bottom-color: rgba(6, 182, 212, 0.3);
}

.geo-ring-2-outer {
  width: min(720px, 110vw);
  height: min(720px, 110vw);
  top: -80px;
  right: -220px;
  border-right-color: rgba(34, 211, 238, 0.28);
  border-top-color: rgba(8, 145, 178, 0.2);
}

.geo-arc {
  position: absolute;
  border-radius: 50%;
  border: clamp(20px, 4vw, 45px) solid transparent;
}

.geo-arc-1 {
  width: min(440px, 72vw);
  height: min(440px, 72vw);
  top: -40px;
  left: 10%;
  border-top-color: rgba(6, 182, 212, 0.25);
  border-left-color: rgba(6, 182, 212, 0.18);
  transform: rotate(-25deg);
}

.geo-arc-2 {
  width: min(360px, 58vw);
  height: min(360px, 58vw);
  bottom: -60px;
  right: 18%;
  border-bottom-color: rgba(34, 211, 238, 0.22);
  border-right-color: rgba(8, 145, 178, 0.15);
  transform: rotate(40deg);
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
  filter: drop-shadow(0 12px 28px rgba(0, 0, 0, 0.6));
  transition: transform 0.3s ease;
}

.hero-program-logo:hover {
  transform: scale(1.05);
}

.hero-content-centered h1 {
  font-size: clamp(1.85rem, 4.5vw, 2.85rem);
  font-weight: 800;
  color: #FFB027; /* CPU Gold */
  margin-bottom: 0.85rem;
  letter-spacing: -0.02em;
  line-height: 1.15;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

.hero-content-centered p {
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: #e2e8f0;
  max-width: 640px;
  line-height: 1.65;
  font-weight: 500;
  margin-bottom: 0;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

/* ==========================================================================
   Page Body & Container Setup
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
  background-image: radial-gradient(rgba(4, 56, 60, 0.08) 1px, transparent 1px);
  background-size: 28px 28px;
  pointer-events: none;
  opacity: 0.6;
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
  color: #04383c;
  margin: 0;
}

.header-line {
  width: 60px;
  height: 3px;
  background: #FFB027; /* CPU Gold Line Accent */
  margin-top: 0.65rem;
  border-radius: 2px;
}

.align-left-line {
  margin-left: 0;
}

/* ==========================================================================
   1. Program Outcomes (Academic Editorial Layout)
   ========================================================================== */
.outcomes-editorial-container {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: clamp(1.5rem, 4vw, 2.75rem);
  box-shadow: 0 4px 20px -4px rgba(4, 56, 60, 0.04);
  display: flex;
  flex-direction: column;
  gap: clamp(2rem, 3.5vw, 2.75rem);
}

.outcomes-block {
  display: flex;
  flex-direction: column;
}

.block-title {
  font-size: clamp(1.1rem, 2vw, 1.25rem);
  font-weight: 800;
  color: #04383c;
  margin-bottom: 0.25rem;
}

.block-intro {
  font-size: clamp(0.92rem, 1.6vw, 0.98rem);
  color: #475569;
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
  border-bottom: 1px solid #f1f5f9;
}

.academic-outcomes-list li:last-child {
  border-bottom: none;
}

.outcome-marker {
  font-weight: 800;
  font-size: 0.95rem;
  color: #0891b2;
  flex-shrink: 0;
  min-width: 22px;
}

.outcome-text {
  font-size: clamp(0.92rem, 1.6vw, 0.98rem);
  color: #334155;
  line-height: 1.65;
}

.cite-tag {
  color: #64748b;
  font-size: 0.88rem;
  font-weight: 500;
  display: inline;
}

/* ==========================================================================
   2. Curriculum Rationale (Academic Compliance Layout)
   ========================================================================== */
.rationale-academic-box {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px -4px rgba(4, 56, 60, 0.04);
}

.policy-tag-banner {
  background: rgba(8, 145, 178, 0.06);
  border-bottom: 1px solid #cffaff;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.policy-title {
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  font-weight: 800;
  color: #04383c;
  letter-spacing: -0.01em;
}

.policy-sub {
  font-size: clamp(0.82rem, 1.4vw, 0.9rem);
  font-weight: 700;
  color: #0891b2;
  margin-top: 0.15rem;
}

.rationale-text-body {
  padding: clamp(1.5rem, 3vw, 2.5rem);
}

.rationale-text-body p {
  color: #334155;
  font-size: clamp(0.92rem, 1.6vw, 1rem);
  line-height: 1.75;
  margin-bottom: 1.25rem;
  text-align: justify;
}

.rationale-text-body p:last-child {
  margin-bottom: 0;
}

/* ==========================================================================
   3. Curriculum Description (ACM Knowledge Areas Grid Layout)
   ========================================================================== */
.description-editorial-container {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  box-shadow: 0 4px 20px -4px rgba(4, 56, 60, 0.04);
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
  color: #334155;
  font-size: clamp(0.95rem, 1.6vw, 1.02rem);
  line-height: 1.65;
  font-weight: 500;
}

.knowledge-areas-wrapper {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: clamp(1.25rem, 3vw, 1.75rem);
}

.knowledge-title {
  font-size: clamp(1.05rem, 1.8vw, 1.15rem);
  font-weight: 800;
  color: #04383c;
  margin-bottom: 1.25rem;
}

.knowledge-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
  gap: 0.85rem;
}

.knowledge-item {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.85rem;
  transition: border-color 0.2s ease;
}

.knowledge-item:hover {
  border-color: #0891b2;
}

.item-number {
  font-size: 0.8rem;
  font-weight: 800;
  color: #0891b2;
  background: #ecfeff;
  border: 1px solid #cffaff;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  flex-shrink: 0;
}

.item-name {
  font-size: 0.92rem;
  font-weight: 600;
  color: #334155;
  line-height: 1.4;
}

/* ==========================================================================
   4. Student Organization (Full-Width Bleed Section)
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
}

.org-fullbleed-geo {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.org-shape-left {
  width: clamp(340px, 42vw, 580px);
  height: clamp(340px, 42vw, 580px);
  top: -120px;
  left: -80px;
  background: radial-gradient(circle, rgba(14, 116, 144, 0.25) 0%, rgba(6, 182, 212, 0.08) 65%, transparent 100%);
}

.org-ring-left {
  width: clamp(280px, 35vw, 450px);
  height: clamp(280px, 35vw, 450px);
  top: -40px;
  left: 2%;
  border-color: rgba(34, 211, 238, 0.25);
}

.org-ring-center {
  width: clamp(440px, 58vw, 750px);
  height: clamp(440px, 58vw, 750px);
  top: -180px;
  left: 18%;
  border-color: rgba(8, 145, 178, 0.22);
}

.org-ring-center-inner {
  width: clamp(280px, 38vw, 480px);
  height: clamp(280px, 38vw, 480px);
  top: -100px;
  left: 24%;
  border-color: rgba(6, 182, 212, 0.15);
}

.org-arc-right {
  width: clamp(380px, 48vw, 640px);
  height: clamp(380px, 48vw, 640px);
  bottom: -150px;
  right: -100px;
  border-top-color: rgba(6, 182, 212, 0.28);
  border-left-color: rgba(6, 182, 212, 0.16);
  transform: rotate(-30deg);
}

.org-shape-right {
  width: clamp(300px, 38vw, 500px);
  height: clamp(300px, 38vw, 500px);
  bottom: -90px;
  right: 10%;
  background: radial-gradient(circle, rgba(8, 145, 178, 0.22) 0%, rgba(6, 182, 212, 0.06) 70%, transparent 100%);
}

.org-shape-right-small {
  width: clamp(160px, 22vw, 280px);
  height: clamp(160px, 22vw, 280px);
  top: 10%;
  right: 5%;
  background: radial-gradient(circle, rgba(34, 211, 238, 0.2) 0%, transparent 75%);
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
  filter: drop-shadow(0 12px 24px rgba(4, 56, 60, 0.18));
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
  color: #FFB027;
  margin-bottom: 0.85rem;
  line-height: 1.25;
}

.org-statement {
  font-size: clamp(0.98rem, 1.8vw, 1.08rem);
  line-height: 1.8;
  color: #334155;
  margin: 0;
  font-weight: 500;
}

/* ==========================================================================
   5. Graduate Outcomes (Academic Code-List Layout)
   ========================================================================== */
.outcomes-academic-container {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px -4px rgba(4, 56, 60, 0.04);
}

.outcomes-table-header {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 1.5rem;
  padding: 1rem 1.75rem;
  background: #f8fafc;
  border-bottom: 2px solid #e2e8f0;
  font-weight: 800;
  font-size: 0.88rem;
  color: #04383c;
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
  border-bottom: 1px solid #f1f5f9;
  align-items: flex-start;
  transition: background-color 0.2s ease;
}

.outcomes-official-list li:last-child {
  border-bottom: none;
}

.outcomes-official-list li:hover {
  background-color: #ecfeff;
}

.outcome-code {
  font-weight: 800;
  font-size: 0.95rem;
  color: #0891b2;
  background: rgba(8, 145, 178, 0.08);
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  text-align: center;
  display: inline-block;
}

.outcome-desc {
  font-size: clamp(0.92rem, 1.6vw, 0.98rem);
  color: #334155;
  line-height: 1.65;
  font-weight: 500;
}

/* ==========================================================================
   6. Computer Science Faculty Cards Layout
   ========================================================================== */
.faculty-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 240px));
  gap: clamp(1rem, 2vw, 1.25rem);
  margin-top: 1rem;
}

/* ==========================================================================
   Scroll Animations & Global Responsive Breakpoint Tweaks
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