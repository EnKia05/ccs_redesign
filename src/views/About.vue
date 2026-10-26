<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

const getImageUrl = (path: string) => {
  return new URL(`../assets/images/partners/${path}`, import.meta.url).href
}

interface Partner {
  name: string
  logoFileName: string
  isSingle?: boolean
}

const partners: Partner[] = [
  { name: 'Oracle Academy', logoFileName: 'oracle.png' },
  { name: 'Cisco Networking Academy', logoFileName: 'cisco.png' },
  { name: 'Acer Academy', logoFileName: 'acer.jpg' },
  { name: 'Huawei ICT Academy', logoFileName: 'huawei.jpg' },
  { name: 'PSITE', logoFileName: 'psite.png' },
  { name: 'Govesmart', logoFileName: 'govesmart.jpg' },
  { name: 'Mayad', logoFileName: 'mayad.png' },
  { name: 'Lasortech', logoFileName: 'lasortech.jpg' },
  { name: 'Startup Project Ventures', logoFileName: 'startup_project.jpg', isSingle: true }
]

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
  <div class="about-page">
    <!-- Centered Hero Section with Background Overlay -->
    <section class="about-hero-centered">
      <div class="hero-bg-overlay"></div>
      <div class="hero-content-centered animate-on-scroll">
        <div class="warriors-logo-wrapper">
          <img src="/Warriors_Logo.png" alt="CCS Warriors Emblem" class="hero-warriors-logo" />
        </div>
        
        <h1>College of Computer Studies</h1>
        
        <p>
          Home of the <strong>CCS Warriors</strong>—empowering tech innovators, driving research, and shaping the future of computing education at Central Philippine University.
        </p>
      </div>
    </section>

    <!-- Content Area with Styled Background Layer -->
    <div class="page-body">
      <!-- Background Grid Pattern -->
      <div class="body-grid-pattern"></div>

      <div class="content-container">
        <!-- Section 1: College History (Complete Timeline) -->
        <section class="history-timeline-section">
          <div class="timeline-header text-center">
            <span class="sub-heading">HERITAGE & MILESTONES</span>
            <h2>College History</h2>
            <div class="header-line"></div>
            <p class="timeline-subtitle">The journey of innovation, accreditation, and leadership that built the College of Computer Studies.</p>
          </div>

          <div class="timeline-container">
            <div class="timeline-line"></div>

            <!-- 1995 -->
            <div class="timeline-item animate-on-scroll">
              <div class="timeline-node"><span class="node-year">1995</span></div>
              <div class="timeline-content">
                <span class="timeline-tag">FOUNDATION</span>
                <h3>Birth of Computer Science</h3>
                <p>The college began in 1995 with the birth of the Bachelor of Science in Computer Science (BSCS) program under the College of Commerce. The first batch comprised two sections with about 100 students, headed by Prof. Mary O’ T. Penetrante.</p>
              </div>
            </div>

            <!-- 2001 -->
            <div class="timeline-item timeline-reverse animate-on-scroll">
              <div class="timeline-node"><span class="node-year">2001</span></div>
              <div class="timeline-content">
                <span class="timeline-tag">EXPANSION</span>
                <h3>SE & CS Department Transfer</h3>
                <p>During the first semester of AY 2001–2002, the CS Department was transferred to the College of Engineering alongside the newly offered BS Software Engineering (BSSE) course, forming the SE & CS Department headed by Engr. Cirilo C. Calibjo, PEE. Simultaneously, the Bachelor in Information Science and Management (BISM)—the brainchild of Prof. Aquiles Sansing—was introduced in the College of Commerce.</p>
              </div>
            </div>

            <!-- 2002 - 2003 -->
            <div class="timeline-item animate-on-scroll">
              <div class="timeline-node"><span class="node-year">2002</span></div>
              <div class="timeline-content">
                <span class="timeline-tag">ESTABLISHMENT</span>
                <h3>Unification & Creation of CCS</h3>
                <p>At the end of AY 2002–2003, a proposal combined the BSCS (Engineering), BSISM (Commerce), and the new Bachelor of Science in Information Technology (BSIT) under a single college. The university approved the proposal, giving birth to the College of Computer Studies.</p>
              </div>
            </div>

            <!-- AY 2003 - 2004 -->
            <div class="timeline-item timeline-reverse animate-on-scroll">
              <div class="timeline-node"><span class="node-year">2003</span></div>
              <div class="timeline-content">
                <span class="timeline-tag">FIRST DEAN</span>
                <h3>Mary Thomas Building Home</h3>
                <p>In the first semester of AY 2003–2004, Engr. Cirilo C. Calibjo became the first Dean of CCS. The new college was officially housed in the Mary Thomas Building.</p>
              </div>
            </div>

            <!-- April 2004 -->
            <div class="timeline-item animate-on-scroll">
              <div class="timeline-node"><span class="node-year">2004</span></div>
              <div class="timeline-content">
                <span class="timeline-tag">GRADUATE STUDIES</span>
                <h3>Launch of MCS & MSCS Degrees</h3>
                <p>In April 2004, two new graduate degree programs—Master in Computer Science (MCS) and Master of Science in Computer Science (MSCS)—were approved and offered.</p>
              </div>
            </div>

            <!-- AY 2006 - 2007 -->
            <div class="timeline-item timeline-reverse animate-on-scroll">
              <div class="timeline-node"><span class="node-year">2006</span></div>
              <div class="timeline-content">
                <span class="timeline-tag">LEADERSHIP</span>
                <h3>Interim Leadership & Doctoral Pursuits</h3>
                <p>During AY 2006–2007, Engr. Calibjo pursued his Ph.D. in Electrical Engineering at UP Diliman. Prof. Rodney A. Gicana, previously Head of Software Engineering, was appointed Officer-in-Charge. Upon completing his doctorate, Dr. Calibjo returned as Dean to champion further college growth.</p>
              </div>
            </div>

            <!-- 2011 -->
            <div class="timeline-item animate-on-scroll">
              <div class="timeline-node"><span class="node-year">2011</span></div>
              <div class="timeline-content">
                <span class="timeline-tag">ACCREDITATION</span>
                <h3>Preliminary PAASCU Visit</h3>
                <p>In 2011, CCS formally applied for PAASCU Accreditation and underwent its preliminary visit, prompting major facility upgrades and higher academic standard benchmarks.</p>
              </div>
            </div>

            <!-- 2014 -->
            <div class="timeline-item timeline-reverse animate-on-scroll">
              <div class="timeline-node"><span class="node-year">2014</span></div>
              <div class="timeline-content">
                <span class="timeline-tag">INNOVATION</span>
                <h3>Consultancy & BSDMIA Launch</h3>
                <p>A PAASCU consultancy visit ensured all formal accreditation criteria were met. During this period, the Bachelor of Science in Digital Media and Interactive Arts (BSDMIA) was officially established.</p>
              </div>
            </div>

            <!-- 2015 -->
            <div class="timeline-item animate-on-scroll">
              <div class="timeline-node"><span class="node-year">2015</span></div>
              <div class="timeline-content">
                <span class="timeline-tag">MILESTONE</span>
                <h3>PAASCU Level 1 Status Granted</h3>
                <p>Following a formal visit in March 2015, PAASCU officially granted Level 1 Status to the BSCS, BSIT, and BSIS programs by June 2015.</p>
              </div>
            </div>

            <!-- June 2016 -->
            <div class="timeline-item timeline-reverse animate-on-scroll">
              <div class="timeline-node"><span class="node-year">2016</span></div>
              <div class="timeline-content">
                <span class="timeline-tag">ADMINISTRATION</span>
                <h3>New Officer-in-Charge</h3>
                <p>In June 2016, Prof. Rea P. Balontong was appointed Officer-in-Charge for the College of Computer Studies.</p>
              </div>
            </div>

            <!-- June 2018 -->
            <div class="timeline-item animate-on-scroll">
              <div class="timeline-node"><span class="node-year">2018</span></div>
              <div class="timeline-content">
                <span class="timeline-tag">ACADEMIC MERGER</span>
                <h3>BLIS Migration to CCS</h3>
                <p>In June 2018, the Bachelor of Science in Library and Information Science (BLIS) program officially migrated under the umbrella of the College of Computer Studies.</p>
              </div>
            </div>

            <!-- AY 2018 - 2022 -->
            <div class="timeline-item timeline-reverse animate-on-scroll">
              <div class="timeline-node"><span class="node-year">2018+</span></div>
              <div class="timeline-content">
                <span class="timeline-tag">DEANSHIP</span>
                <h3>Prof. Ma. Christina A. Quijano</h3>
                <p>Starting AY 2018–2019, Prof. Ma. Christina A. Quijano was appointed Officer-in-Charge and served as Acting Dean through AY 2021–2022.</p>
              </div>
            </div>

            <!-- September 2019 -->
            <div class="timeline-item animate-on-scroll">
              <div class="timeline-node"><span class="node-year">2019</span></div>
              <div class="timeline-content">
                <span class="timeline-tag">EXCELLENCE</span>
                <h3>5-Year Level 1 Re-Accreditation</h3>
                <p>In September 2019, PAASCU conducted a re-survey visit for BSCS, BSIT, and BSIS. The college was successfully granted a 5-year Level 1 re-accredited status.</p>
              </div>
            </div>

            <!-- October 2019 - 2020 -->
            <div class="timeline-item timeline-reverse animate-on-scroll">
              <div class="timeline-node"><span class="node-year">2020</span></div>
              <div class="timeline-content">
                <span class="timeline-tag">CONTINUOUS GROWTH</span>
                <h3>PACUCOA BLIS Accreditation</h3>
                <p>The BLIS program underwent orientation from PACUCOA accreditors in October 2019 and proceeded with its preliminary survey in early 2020, solidifying CCS’s commitment to institutional excellence.</p>
              </div>
            </div>

            <!-- PRESENT: Digital Transformation & AI Integration -->
            <div class="timeline-item animate-on-scroll">
              <div class="timeline-node present-node"><span class="node-year">NOW</span></div>
              <div class="timeline-content present-content">
                <span class="timeline-tag glow-tag">THE PRESENT</span>
                <h3>AI Integration & Modern Smart Labs</h3>
                <p>Embracing the digital shift, the college has modernized its computing infrastructure, expanding specialized curriculum tracks in Artificial Intelligence, Data Analytics, and Interactive Media while fostering industry-aligned research projects.</p>
              </div>
            </div>

            <!-- PRESENT & BEYOND: Terminal Glowing Anchor -->
            <div class="timeline-end-anchor animate-on-scroll">
              <div class="anchor-pulse"></div>
              <div class="anchor-badge">
                <span class="anchor-text">PRESENT & BEYOND</span>
                <p class="anchor-subtext">Making our mark in CPU history as we empower the next generation of global tech leaders.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Section 2: Mission & Vision (Asymmetric Split) -->
        <section class="mv-split-section animate-on-scroll">
          <div class="mv-block mission-block">
            <h3>Mission</h3>
            <p>
              A College of the future with a mission to educate students with the Christian principles and practices of computer studies, preparing them to advance studies, careers in software development, computing systems technology, information management, and for a lifetime learning.
            </p>
          </div>

          <div class="mv-divider">
            <div class="divider-line"></div>
            <div class="divider-badge">CCS</div>
            <div class="divider-line"></div>
          </div>

          <div class="mv-block vision-block">
            <h3>Vision</h3>
            <p>
              The College of Computer Studies is founded on the vision of academic excellence in Information Technology Education and responsive to the needs of the total person and the world.
            </p>
          </div>
        </section>

        <!-- Section 3: Quality Policy -->
        <section class="quality-policy-section animate-on-scroll">
          <div class="quality-card">
            <h2>Quality Policy</h2>
            <div class="policy-divider"></div>
            
            <p class="policy-lead">
              To fulfill the mission and realize the vision of Central Philippine University, we commit to consistently provide superior quality services by integrating Christian values, academic excellence, highest level of professionalism, and quality consideration in every aspect of our operations.
            </p>
            
            <p class="policy-body">
              We maintain a quality management system that complies with international quality standards. We continually improve to achieve global excellence that satisfies the expectations of the university community, partner institutions, and the general public.
            </p>
          </div>
        </section>

        <!-- Section 4: Partnerships & Memberships -->
        <section class="partnerships-section animate-on-scroll">
          <div class="partnerships-wrapper">
            <div class="partnerships-header text-center">
              <span class="sub-heading">INDUSTRY COLLABORATION</span>
              <h2>Partnerships & Memberships</h2>
              <div class="header-line"></div>
              <p class="partnerships-subtitle">
                Working alongside leading global tech academies, industry innovators, and professional organizations to empower our students.
              </p>
            </div>

            <div class="partnerships-grid">
              <div 
                v-for="partner in partners" 
                :key="partner.name" 
                class="partner-card"
                :class="{ 'partner-card-single': partner.isSingle }"
              >
                <img :src="getImageUrl(partner.logoFileName)" :alt="partner.name" class="partner-logo" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

.about-page {
  width: 100%;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  color: #1e293b;
  overflow-x: hidden;
}

/* ==========================================================================
   Centered Hero Section with Image & Dark Green Overlay
   ========================================================================== */
.about-hero-centered {
  position: relative;
  background-color: #062c1e;
  background-image: url('@/assets/images/addOns/CPU_Church.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 8.5rem 1.5rem 8rem 1.5rem;
  text-align: center;
  overflow: hidden;
  border-bottom: 2px solid #FFB027;
}

.hero-bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg, 
    rgba(6, 44, 30, 0.95) 0%, 
    rgba(4, 32, 22, 0.90) 50%, 
    rgba(6, 44, 30, 0.96) 100%
  );
  z-index: 1;
}

.hero-content-centered {
  position: relative;
  z-index: 2;
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.warriors-logo-wrapper {
  margin-bottom: 1.25rem;
  display: flex;
  justify-content: center;
}

.hero-warriors-logo {
  height: 300px;
  width: auto;
  object-fit: contain;
  filter: drop-shadow(0 8px 20px rgba(0, 0, 0, 0.5));
  transition: transform 0.3s ease;
}

.hero-warriors-logo:hover {
  transform: scale(1.05);
}

.hero-content-centered h1 {
  font-size: 2.75rem;
  font-weight: 800;
  color: #FFB027;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.hero-content-centered p {
  font-size: 1.08rem;
  color: #cbd5e1;
  max-width: 620px;
  line-height: 1.65;
  font-weight: 500;
  margin-bottom: 0;
}

.hero-content-centered p strong {
  color: #FFB027;
}

/* ==========================================================================
   Page Body with Background Texture
   ========================================================================== */
.page-body {
  position: relative;
  background-color: #f8fafc;
  padding: 4.5rem 1.5rem 6rem 1.5rem;
}

.body-grid-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(rgba(6, 44, 30, 0.08) 1px, transparent 1px);
  background-size: 28px 28px;
  pointer-events: none;
  opacity: 0.6;
}

.content-container {
  position: relative;
  z-index: 2;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

.section-tag {
  color: #062c1e;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  display: block;
  margin-bottom: 0.35rem;
}

.section-tag.dark-tag {
  color: #FFB027;
}

/* ==========================================================================
   History Timeline Styling
   ========================================================================== */
.history-timeline-section {
  position: relative;
  padding: 1rem 0 3rem 0;
}

.timeline-header {
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sub-heading {
  color: #FFB027;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  display: block;
}

.timeline-header h2 {
  font-size: 2.25rem;
  font-weight: 800;
  color: #062c1e;
  margin-top: 0.25rem;
}

.header-line {
  width: 60px;
  height: 3px;
  background: #FFB027;
  margin: 0.75rem 0 1rem 0;
  border-radius: 2px;
}

.timeline-subtitle {
  color: #64748b;
  font-size: 1.02rem;
  max-width: 600px;
  text-align: center;
  line-height: 1.6;
}

.timeline-container {
  position: relative;
  max-width: 960px;
  margin: 0 auto;
}

.timeline-line {
  position: absolute;
  top: 0;
  bottom: 90px;
  left: 50%;
  width: 2px;
  background: linear-gradient(180deg, rgba(255, 176, 39, 0.2) 0%, #FFB027 10%, #062c1e 80%, #FFB027 100%);
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding-right: calc(50% + 36px);
  margin-bottom: 2.5rem;
}

.timeline-item.timeline-reverse {
  justify-content: flex-start;
  padding-right: 0;
  padding-left: calc(50% + 36px);
}

.timeline-node {
  position: absolute;
  left: 50%;
  top: 12px;
  transform: translateX(-50%);
  z-index: 5;
  background: #062c1e;
  border: 2px solid #FFB027;
  border-radius: 50px;
  padding: 0.3rem 0.85rem;
  box-shadow: 0 4px 14px rgba(6, 44, 30, 0.25);
  transition: transform 0.25s ease;
}

.timeline-item:hover .timeline-node {
  transform: translateX(-50%) scale(1.08);
}

.node-year {
  color: #FFB027;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.05em;
}

.timeline-content {
  background: #ffffff;
  border-radius: 16px;
  padding: 1.75rem 2rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 8px 24px -6px rgba(6, 44, 30, 0.05);
  position: relative;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.timeline-content:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 176, 39, 0.5);
  box-shadow: 0 16px 32px -8px rgba(6, 44, 30, 0.12);
}

.timeline-tag {
  font-size: 0.7rem;
  font-weight: 800;
  color: #FFB027;
  letter-spacing: 0.12em;
  display: block;
  margin-bottom: 0.35rem;
  text-transform: uppercase;
}

.timeline-content h3 {
  font-size: 1.2rem;
  font-weight: 800;
  color: #062c1e;
  margin-bottom: 0.6rem;
}

.timeline-content p {
  font-size: 0.95rem;
  color: #475569;
  line-height: 1.65;
  font-weight: 500;
}

.timeline-node.present-node {
  background: #FFB027;
  border-color: #062c1e;
  box-shadow: 0 0 16px rgba(255, 176, 39, 0.6);
}

.timeline-node.present-node .node-year {
  color: #062c1e;
  font-weight: 800;
}

.timeline-content.present-content {
  border: 1px solid rgba(255, 176, 39, 0.5);
  background: linear-gradient(135deg, #ffffff 0%, rgba(255, 176, 39, 0.06) 100%);
}

.glow-tag {
  color: #062c1e !important;
  background: rgba(255, 176, 39, 0.2);
  display: inline-block;
  padding: 0.15rem 0.55rem;
  border-radius: 4px;
}

.timeline-end-anchor {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  z-index: 10;
}

.anchor-pulse {
  width: 16px;
  height: 16px;
  background-color: #FFB027;
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(255, 176, 39, 0.7);
  animation: pulse-glow 2s infinite;
  margin-bottom: 1.25rem;
}

@keyframes pulse-glow {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 176, 39, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 14px rgba(255, 176, 39, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 176, 39, 0);
  }
}

.anchor-badge {
  background: linear-gradient(135deg, #062c1e 0%, #042016 100%);
  border: 2px solid #FFB027;
  padding: 1.5rem 2.5rem;
  border-radius: 20px;
  text-align: center;
  max-width: 520px;
  box-shadow: 0 12px 30px -8px rgba(6, 44, 30, 0.3);
}

.anchor-text {
  color: #FFB027;
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  display: block;
  margin-bottom: 0.4rem;
}

.anchor-subtext {
  color: #e2e8f0;
  font-size: 0.98rem;
  line-height: 1.6;
  margin: 0;
  font-weight: 500;
}

/* ==========================================================================
   Section 2: Mission & Vision Asymmetric Split
   ========================================================================== */
.mv-split-section {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  align-items: center;
  background: linear-gradient(135deg, #062c1e 0%, #042016 100%);
  padding: 3.5rem 3rem;
  border-radius: 20px;
  color: #ffffff;
  box-shadow: 0 15px 35px -10px rgba(6, 44, 30, 0.25);
  border: 1px solid rgba(255, 176, 39, 0.2);
}

.mv-block {
  display: flex;
  flex-direction: column;
}

.mv-block h3 {
  font-size: 2rem;
  font-weight: 800;
  color: #FFB027;
  margin-bottom: 0.85rem;
}

.mv-block p {
  color: #cbd5e1;
  font-size: 1.02rem;
  line-height: 1.7;
}

.mv-divider {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  height: 100%;
}

.divider-line {
  width: 1px;
  flex: 1;
  background: rgba(255, 176, 39, 0.3);
  min-height: 40px;
}

.divider-badge {
  font-size: 0.7rem;
  font-weight: 800;
  color: #FFB027;
  border: 1px solid rgba(255, 176, 39, 0.4);
  padding: 0.25rem 0.6rem;
  border-radius: 50px;
  background: rgba(6, 44, 30, 0.8);
}

/* ==========================================================================
   Section 3: Quality Policy Section
   ========================================================================== */
.quality-policy-section {
  position: relative;
}

.quality-card {
  background: linear-gradient(135deg, #062c1e 0%, #042016 100%);
  border-radius: 20px;
  padding: 3.5rem 3rem;
  color: #ffffff;
  text-align: center;
  border: 1px solid rgba(255, 176, 39, 0.3);
  box-shadow: 0 15px 35px -10px rgba(6, 44, 30, 0.25);
  position: relative;
  overflow: hidden;
}

.quality-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 300px;
  background: radial-gradient(circle, rgba(255, 176, 39, 0.12) 0%, transparent 70%);
  pointer-events: none;
}

.quality-card h2 {
  font-size: 2.25rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
}

.policy-divider {
  width: 50px;
  height: 3px;
  background: #FFB027;
  margin: 0.75rem auto 2rem auto;
  border-radius: 2px;
}

.policy-lead {
  font-size: 1.02rem;
  color: #cbd5e1;
  line-height: 1.75;
  font-weight: 400;
  max-width: 820px;
  margin: 0 auto 1.5rem auto;
}

.policy-body {
  font-size: 1.02rem;
  color: #cbd5e1;
  line-height: 1.75;
  font-weight: 400;
  max-width: 820px;
  margin: 0 auto;
}

/* ==========================================================================
   Section 4: Partnerships & Memberships Styling
   ========================================================================== */
.partnerships-wrapper {
  background: #ffffff;
  border-radius: 20px;
  padding: 3.5rem 2.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 30px -10px rgba(6, 44, 30, 0.05);
}

.partnerships-header {
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.partnerships-header h2 {
  font-size: 2.25rem;
  font-weight: 800;
  color: #062c1e;
  margin-top: 0.25rem;
}

.partnerships-subtitle {
  color: #64748b;
  font-size: 1rem;
  max-width: 650px;
  text-align: center;
  line-height: 1.6;
}

.partnerships-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.75rem;
  align-items: center;
}

.partner-card {
  background: #ffffff;
  border-radius: 14px;
  border: 1px solid #f1f5f9;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 110px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.partner-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 176, 39, 0.5);
  box-shadow: 0 12px 24px -6px rgba(6, 44, 30, 0.08);
}

.partner-card-single {
  grid-column: span 1;
}

.partner-logo {
  max-width: 100%;
  max-height: 60px;
  width: auto;
  height: auto;
  object-fit: contain;
}

/* ==========================================================================
   Animations & Responsiveness
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

@media (max-width: 960px) {
  .mv-split-section {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2.5rem 2rem;
  }

  .mv-divider {
    flex-direction: row;
    width: 100%;
    height: auto;
  }

  .divider-line {
    height: 1px;
    width: 100%;
    min-height: 0;
  }

  .partnerships-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 820px) {
  .timeline-line {
    left: 20px;
  }

  .timeline-item,
  .timeline-item.timeline-reverse {
    justify-content: flex-start;
    padding-left: 60px;
    padding-right: 0;
  }

  .timeline-node {
    left: 20px;
    top: 16px;
  }

  .timeline-end-anchor {
    align-items: flex-start;
    padding-left: 20px;
  }

  .anchor-pulse {
    margin-left: -7px;
  }

  .anchor-badge {
    text-align: left;
    margin-top: 0.5rem;
  }
}

@media (max-width: 640px) {
  .hero-content-centered h1 {
    font-size: 2.1rem;
  }

  .hero-warriors-logo {
    height: 95px;
  }

  .quality-card {
    padding: 2.5rem 1.5rem;
  }

  .quality-card h2 {
    font-size: 1.8rem;
  }

  .partnerships-grid {
    grid-template-columns: 1fr;
  }
  
  .partnerships-wrapper {
    padding: 2.5rem 1.25rem;
  }
}
</style>