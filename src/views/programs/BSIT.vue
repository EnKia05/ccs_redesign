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

const itFaculty = computed(() => {
  const members: Array<{ name: string; role: string; education: string; photo: string }> = []

  // 1. Grab Department Head for IT first
  facultyData.forEach((dept) => {
    dept.people.forEach((person) => {
      if (person.role.includes('Department Head (IT)')) {
        members.push(person)
      }
    })
  })

  // 2. Grab all remaining BSIT faculty members
  facultyData.forEach((dept) => {
    dept.people.forEach((person) => {
      if (
        (person.role.includes('BSIT') || person.role.includes('Information Technology')) &&
        !person.role.includes('Department Head')
      ) {
        members.push(person)
      }
    })
  })

  return members
})
</script>

<template>
  <div class="program-page theme-bsit-purple">
    <!-- Hero Section -->
    <section class="program-hero-centered">
      <div class="hero-geo-bg">
        <div class="geo-diamond geo-diamond-1"></div>
        <div class="geo-diamond-outline geo-diamond-2"></div>
        <div class="geo-triangle geo-triangle-1"></div>
        <div class="geo-triangle-outline geo-triangle-2"></div>
        <div class="geo-diamond geo-diamond-3"></div>
      </div>

      <div class="hero-content-centered animate-on-scroll">
        <div class="program-logo-wrapper">
          <img src="/IT.png" alt="BSIT Logo" class="hero-program-logo" />
        </div>
        <h1>Information Technology</h1>
        <p>
          The Information Technology (IT) program is designed to bridge the gap between computer science and management information systems.
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
            <!-- Part 1: General Institutional Outcomes -->
            <div class="outcomes-block">
              <h3 class="block-title">General Institutional & Professional Capabilities</h3>
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

            <!-- Part 2: Computing Discipline Outcomes -->
            <div class="outcomes-block">
              <h3 class="block-title">Computing Discipline Outcomes</h3>
              <p class="block-intro">The graduates of BSCS, BSIS, and BSIT must have the ability to</p>
              
              <ul class="academic-outcomes-list">
                <li>
                  <span class="outcome-marker">a)</span>
                  <div class="outcome-text">
                    analyze complex problems, and identify and define the computing requirements needed to design an appropriate solution <span class="cite-tag">(Graduate Outcomes: CS02, IS02-03, IT03).</span>
                  </div>
                </li>
                <li>
                  <span class="outcome-marker">b)</span>
                  <div class="outcome-text">
                    apply computing and other knowledge domains to address real-world problems <span class="cite-tag">(Graduate Outcomes: CS01, IS01, IT01).</span>
                  </div>
                </li>
                <li>
                  <span class="outcome-marker">c)</span>
                  <div class="outcome-text">
                    design and develop computing solutions using a system-level perspective <span class="cite-tag">(Graduate Outcomes: CS03-05, IS04-05, IT05).</span>
                  </div>
                </li>
                <li>
                  <span class="outcome-marker">d)</span>
                  <div class="outcome-text">
                    utilize modern computing tools <span class="cite-tag">(Graduate Outcomes: CS06, IS06, IT07).</span>
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
            <div class="policy-tag-banner">
              <span class="policy-title">Based on CHED Memo Order No. 25 s. 2015</span>
              <span class="policy-sub">Effective: Academic Year 2018–2019</span>
            </div>

            <div class="rationale-text-body">
              <p>
                The computing field has grown enormously and is described as dynamic. It encompasses computer engineering, software engineering, computer science, information systems, and information technology. Based on the Guidelines for the Implementation of CMO 46 s 2012 which implements the shift to learning competency-based standards/outcomes-based education” the Commission released CMO 25 s 2015 last August 2015 that integrates the outcomes-based education. It specifies the “core competencies” expected of graduates of Bachelor of Science in Computer Science (BSCS), Bachelor of Science in Information Systems (BSIS) and Bachelor of Science in Information Technology (BSIT).
              </p>
              <p>
                The Commission recognizes the need to be responsive to the current needs of the country and in order to face the challenges of advancement. It is essential and important that the country’s computing capability be continually developed and strengthened. In this PSG it clearly defines the area of focus for each field, common outcomes for each discipline and new GE for K-12 program.
              </p>
              <p>
                In the PSG it defines the BSIT program that includes the study of the utilization of both hardware and software technologies involving planning, installing, customizing, operating, managing and administering, and maintaining information technology infrastructure that provides computing solutions to address the needs of an organization.
              </p>
              <p>
                The program prepares graduates to address various user needs involving the selection, development, application, integration and management of computing technologies within an organization.
              </p>
              <p>
                The BSIT program prepares students to work on information security, network architecture, database administration, systems administration, and computer support.
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
                The BSIT curriculum includes basic and advanced courses on planning, development, integration, and management of information technology infrastructure that provide computing solutions to address the needs of organizations.
              </li>
              <li>
                The curriculum should include courses that cover Knowledge Areas as recommended in ACM Information Technology Curricula 2008.
              </li>
            </ul>

            <div class="knowledge-areas-wrapper">
              <h3 class="knowledge-title">Defines eleven (11) Knowledge Areas:</h3>
              
              <div class="knowledge-grid">
                <div class="knowledge-item">
                  <span class="item-number">01</span>
                  <span class="item-name">Information Technology Fundamentals</span>
                </div>
                <div class="knowledge-item">
                  <span class="item-number">02</span>
                  <span class="item-name">Human Computer Interaction</span>
                </div>
                <div class="knowledge-item">
                  <span class="item-number">03</span>
                  <span class="item-name">Information Assurance and Security</span>
                </div>
                <div class="knowledge-item">
                  <span class="item-number">04</span>
                  <span class="item-name">Information Management</span>
                </div>
                <div class="knowledge-item">
                  <span class="item-number">05</span>
                  <span class="item-name">Integrative Programming and Technologies</span>
                </div>
                <div class="knowledge-item">
                  <span class="item-number">06</span>
                  <span class="item-name">Networking</span>
                </div>
                <div class="knowledge-item">
                  <span class="item-number">07</span>
                  <span class="item-name">Platform Technologies</span>
                </div>
                <div class="knowledge-item">
                  <span class="item-number">08</span>
                  <span class="item-name">Systems Administration and Maintenance</span>
                </div>
                <div class="knowledge-item">
                  <span class="item-number">09</span>
                  <span class="item-name">Systems Integration and Architecture</span>
                </div>
                <div class="knowledge-item">
                  <span class="item-number">10</span>
                  <span class="item-name">Social and Professional Issues</span>
                </div>
                <div class="knowledge-item">
                  <span class="item-number">11</span>
                  <span class="item-name">Web Systems and Technologies</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- 4. Student Organization -->
      <section class="org-fullbleed-section animate-on-scroll">
        <div class="org-fullbleed-geo">
          <div class="geo-diamond org-shape-left"></div>
          <div class="geo-diamond-outline org-diamond-center"></div>
          <div class="geo-triangle org-triangle-right"></div>
          <div class="geo-diamond org-shape-right"></div>
        </div>

        <div class="container relative-z">
          <div class="org-clean-grid">
            <div class="org-logo-col">
              <img src="/IT.png" alt="Information Technology Society Emblem" class="org-open-logo" />
            </div>

            <div class="org-text-col">
              <h3>Information Technology Students Organization</h3>
              <p class="org-statement">
                The embodiment of Information Technology Students Organization is enriched through camaraderie as they strengthen their bonds with each year level. Through different outreach activities and as well as the college and university, the members of this organization gets to meet and gather ideas to come up and be able to fulfill the mission of this organization, thus, giving them ample knowledge that could help them build a better personality through working together.
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
              <span class="code-col-head">Graduate Outcomes Code</span>
              <span class="desc-col-head">Graduate Outcomes</span>
            </div>

            <ul class="outcomes-official-list">
              <li>
                <span class="outcome-code">IT01</span>
                <div class="outcome-desc">
                  Apply knowledge of computing, science, and mathematics appropriate to the discipline.
                </div>
              </li>
              <li>
                <span class="outcome-code">IT02</span>
                <div class="outcome-desc">
                  Understand best practices and standards and their applications.
                </div>
              </li>
              <li>
                <span class="outcome-code">IT03</span>
                <div class="outcome-desc">
                  Analyze complex problems, and identify and define the computing requirements appropriate to its solution.
                </div>
              </li>
              <li>
                <span class="outcome-code">IT04</span>
                <div class="outcome-desc">
                  Identify and analyze user needs and take them into account in the selection, creation, evaluation and administration of computer-based systems.
                </div>
              </li>
              <li>
                <span class="outcome-code">IT05</span>
                <div class="outcome-desc">
                  Design, implement, and evaluate computer-based systems, processes, components, or programs to meet desired needs and requirements under various constraints.
                </div>
              </li>
              <li>
                <span class="outcome-code">IT06</span>
                <div class="outcome-desc">
                  Integrate IT-based solutions into the user environment effectively.
                </div>
              </li>
              <li>
                <span class="outcome-code">IT07</span>
                <div class="outcome-desc">
                  Apply knowledge through the use of current techniques, skills, tools and practices necessary for the IT profession.
                </div>
              </li>
              <li>
                <span class="outcome-code">IT08</span>
                <div class="outcome-desc">
                  Function effectively as a member or leader of a development team recognizing the different roles within a team to accomplish a common goal.
                </div>
              </li>
              <li>
                <span class="outcome-code">IT09</span>
                <div class="outcome-desc">
                  Assist in the creation of an effective IT project plan.
                </div>
              </li>
              <li>
                <span class="outcome-code">IT10</span>
                <div class="outcome-desc">
                  Communicate effectively with the computing community and with society at large about complex computing activities through logical writing, presentations, and clear instructions.
                </div>
              </li>
              <li>
                <span class="outcome-code">IT11</span>
                <div class="outcome-desc">
                  Analyze the local and global impact of computing information technology on individuals, organizations, and society.
                </div>
              </li>
              <li>
                <span class="outcome-code">IT12</span>
                <div class="outcome-desc">
                  Understand professional, ethical, legal, security and social issues and responsibilities in the utilization of information technology.
                </div>
              </li>
              <li>
                <span class="outcome-code">IT13</span>
                <div class="outcome-desc">
                  Recognize the need for and engage in planning self-learning and improving performance as a foundation for continuing professional development.
                </div>
              </li>
            </ul>
          </div>
        </section>

        <!-- 6. Information Technology Faculty Section -->
        <section class="section animate-on-scroll">
          <div class="section-header align-left">
            <h2>Information Technology Faculty</h2>
            <div class="header-line align-left-line"></div>
          </div>

          <div class="faculty-card-grid">
            <FacultyCard
              v-for="person in itFaculty"
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
   BSIT Royal Purple Theme & Scoping
   ========================================================================== */
.theme-bsit-purple {
  width: 100%;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  color: #1e293b;
  overflow-x: hidden;
}

/* ==========================================================================
   Hero Section with Triangles & Diamonds
   ========================================================================== */
.program-hero-centered {
  position: relative;
  background: linear-gradient(135deg, #1e1b4b 0%, #311042 50%, #581c87 100%);
  min-height: clamp(480px, 60vh, 620px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(4rem, 8vh, 7rem) 1.25rem clamp(3.5rem, 7vh, 6.5rem) 1.25rem;
  text-align: center;
  overflow: hidden;
  border-bottom: 2px solid #FFB027;
}

.hero-geo-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

.geo-diamond {
  position: absolute;
  transform: rotate(45deg);
  border-radius: 24px;
  background: radial-gradient(circle at 30% 30%, rgba(168, 85, 247, 0.35) 0%, rgba(109, 40, 217, 0.15) 70%, transparent 100%);
  backdrop-filter: blur(4px);
}

.geo-diamond-1 {
  width: min(280px, 50vw);
  height: min(280px, 50vw);
  top: -80px;
  left: 8%;
  box-shadow: inset 0 0 30px rgba(168, 85, 247, 0.25);
}

.geo-diamond-3 {
  width: min(340px, 60vw);
  height: min(340px, 60vw);
  bottom: -100px;
  right: 12%;
}

.geo-diamond-outline {
  position: absolute;
  transform: rotate(45deg);
  border-radius: 28px;
  border: 2px solid rgba(168, 85, 247, 0.3);
}

.geo-diamond-2 {
  width: min(420px, 75vw);
  height: min(420px, 75vw);
  top: 5%;
  right: -100px;
  border-left-color: rgba(168, 85, 247, 0.6);
  border-bottom-color: rgba(168, 85, 247, 0.4);
}

.geo-triangle {
  position: absolute;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  background: linear-gradient(180deg, rgba(168, 85, 247, 0.3) 0%, rgba(88, 28, 135, 0.05) 100%);
}

.geo-triangle-1 {
  width: min(380px, 65vw);
  height: min(340px, 60vw);
  top: -40px;
  left: 22%;
  transform: rotate(-15deg);
}

.geo-triangle-outline {
  position: absolute;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  background: rgba(147, 51, 234, 0.18);
}

.geo-triangle-2 {
  width: min(480px, 80vw);
  height: min(420px, 70vw);
  bottom: -120px;
  left: -60px;
  transform: rotate(35deg);
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
  color: #FFB027;
  margin-bottom: 0.85rem;
  letter-spacing: -0.02em;
  line-height: 1.15;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

.hero-content-centered p {
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: #f1f5f9;
  max-width: 640px;
  line-height: 1.65;
  font-weight: 500;
  margin-bottom: 0;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

/* ==========================================================================
   Page Body & Layout Containers
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
  background-image: radial-gradient(rgba(49, 16, 66, 0.08) 1px, transparent 1px);
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
  color: #311042;
  margin: 0;
}

.header-line {
  width: 60px;
  height: 3px;
  background: #FFB027;
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
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: clamp(1.5rem, 4vw, 2.75rem);
  box-shadow: 0 4px 20px -4px rgba(49, 16, 66, 0.04);
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
  color: #311042;
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
  color: #7e22ce;
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
   2. Curriculum Rationale
   ========================================================================== */
.rationale-academic-box {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px -4px rgba(49, 16, 66, 0.04);
}

.policy-tag-banner {
  background: rgba(126, 34, 206, 0.06);
  border-bottom: 1px solid #f3e8ff;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.policy-title {
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  font-weight: 800;
  color: #311042;
  letter-spacing: -0.01em;
}

.policy-sub {
  font-size: clamp(0.82rem, 1.4vw, 0.9rem);
  font-weight: 700;
  color: #7e22ce;
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
   3. Curriculum Description
   ========================================================================== */
.description-editorial-container {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  box-shadow: 0 4px 20px -4px rgba(49, 16, 66, 0.04);
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
  color: #311042;
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
  border-color: #7e22ce;
}

.item-number {
  font-size: 0.8rem;
  font-weight: 800;
  color: #7e22ce;
  background: #faf5ff;
  border: 1px solid #f3e8ff;
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
   4. Student Organization
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
  width: clamp(280px, 35vw, 480px);
  height: clamp(280px, 35vw, 480px);
  top: -100px;
  left: -60px;
  background: radial-gradient(circle, rgba(126, 34, 206, 0.22) 0%, rgba(168, 85, 247, 0.08) 60%, transparent 100%);
}

.org-diamond-center {
  width: clamp(360px, 48vw, 620px);
  height: clamp(360px, 48vw, 620px);
  top: -150px;
  left: 18%;
  border-color: rgba(147, 51, 234, 0.22);
}

.org-triangle-right {
  width: clamp(320px, 42vw, 540px);
  height: clamp(280px, 38vw, 480px);
  bottom: -120px;
  right: -80px;
  transform: rotate(-25deg);
}

.org-shape-right {
  width: clamp(240px, 30vw, 400px);
  height: clamp(240px, 30vw, 400px);
  bottom: -60px;
  right: 10%;
  background: radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, rgba(168, 85, 247, 0.05) 70%, transparent 100%);
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
  filter: drop-shadow(0 12px 24px rgba(49, 16, 66, 0.18));
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
   5. Graduate Outcomes
   ========================================================================== */
.outcomes-academic-container {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px -4px rgba(49, 16, 66, 0.04);
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
  color: #311042;
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
  background-color: #faf5ff;
}

.outcome-code {
  font-weight: 800;
  font-size: 0.95rem;
  color: #7e22ce;
  background: rgba(126, 34, 206, 0.08);
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
   6. Information Technology Faculty Cards Layout
   ========================================================================== */
.faculty-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 240px));
  gap: clamp(1rem, 2vw, 1.25rem);
  margin-top: 1rem;
}

/* ==========================================================================
   Scroll Animations & Media Queries
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