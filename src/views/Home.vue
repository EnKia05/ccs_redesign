<script setup lang="ts">
import { RouterLink } from 'vue-router'
import NewsCard from '../components/NewsCard.vue'
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
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
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

const featuredNews = [
  {
    id: 5,
    title: '𝗖𝗖𝗦’ 𝗦𝘁𝗿𝗲𝗲𝘁 𝗗𝗮𝗻𝗰𝗲 𝗧𝗿𝗼𝘂𝗽𝗲 𝗪𝗼𝘄𝘀 𝗦𝗽𝗲𝗰𝘁𝗮𝘁𝗼𝗿𝘀 𝗪𝗶𝘁𝗵 𝗔 𝗚𝗿𝗮𝗻𝗱 𝗦𝗹𝗮𝗺 𝗣𝗲𝗿𝗳𝗼𝗿𝗺𝗮𝗻𝗰𝗲 𝗦𝗲𝗰𝘂𝗿𝗶𝗻𝗴 𝗔 𝗧𝗵𝗿𝗲𝗲-𝗣𝗲𝗮𝘁 𝗖𝗵𝗮𝗺𝗽𝗶𝗼𝗻𝘀𝗵𝗶𝗽 𝗦𝘁𝗿𝗲𝗮𝗸 𝗗𝘂𝗿𝗶𝗻𝗴 𝗨𝗪𝗖𝗙 𝟮𝟬𝟮𝟲',
    date: 'October 02, 2026',
    category: 'Achievements',
    summary: 'CCS\'s street dance troupe performed their interpretation of the Dreamworks movie “Turbo,” featuring songs, props and costumes inspired by the 2013 animated film. The performance was done before every one of the three judging stations, and concluded with the College of Computer Studies being declared the champion for the third time in a row since 2024.',
    url: 'https://www.facebook.com/share/p/1KobP4gjjk/',
    image: 'https://scontent.fceb2-2.fna.fbcdn.net/v/t39.99422-6/846321167_1109973875114292_3286349829065792226_n.png?stp=dst-jpg_tt6&cstp=mx960x640&ctp=s960x640&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHmzm6oV6_Fej6bhOqD_ykzXSmfHbn4d-pdKZ8dufh36pzx9OAVBw3Sk-szPuJNePwmeLCoNthqqQTGoKIukGUA&_nc_ohc=0ctQmmZjaq8Q7kNvwHdOsPs&_nc_oc=Adr2bIA1xoDv0skcsZJwVF4YKZaqa5PMq91DU836s576X7UEJMHu9h5GzsLE8IhjiNM&_nc_zt=14&_nc_ht=scontent.fceb2-2.fna&_nc_gid=uG-or_hITbpgo-FzWBcTBg&_nc_ss=7b2a8&oh=00_AQMyVP3WzxFyBroCHVws8D67JFVW7zyhRUMOP10LbR1D5A&oe=6AE39D0C'
  },
  {
    id: 3,
    title: '𝗖𝗖𝗦\' 𝗖𝗵𝗼𝗿𝗶𝘀𝘁𝗲𝗿𝘀 𝗦𝗲𝗻𝘀𝗮𝘁𝗶𝗼𝗻𝗮𝗹𝗹𝘆 𝗦𝗲𝗿𝗲𝗻𝗮𝗱𝗲𝘀 𝗥𝗠𝗔 𝗗𝘂𝗿𝗶𝗻𝗴 𝗨𝗪𝗖𝗙 𝟮𝟬𝟮𝟲 𝗖𝗵𝗼𝗿𝗮𝗹𝗲 𝗖𝗼𝗺𝗽𝗲𝘁𝗶𝘁𝗶𝗼𝗻',
    date: 'October 02, 2026',
    category: 'Events',
    summary: 'The College of Computer Studies\' (CCS) student choir participated in the University Week Centralian Fest 2026 (UWCF 2026) Chorale Competition at the Rose Memorial Auditorium, Central Philippine University.',
    url: 'https://www.facebook.com/share/p/1KNANVAYsC/',
    image: 'https://scontent.fceb2-1.fna.fbcdn.net/v/t39.99422-6/854741147_1972805980057835_6004915344997477475_n.png?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHmH2wfq_m46Vfw0io3XslZpAW2ZzdwwJekBbZnN3DAl6e_ebpM7FguvG72m1QraTeynJeivwgu0F1ZH9iSiFay&_nc_ohc=Ise8kwXDxTgQ7kNvwFBd32f&_nc_oc=AdoTkEC6qqC1NR1IydrJ4FV2bfqwLBq3P5YqZKQ9XwOcY4qkA0FP7EKd-Xx8sQfcg-k&_nc_zt=14&_nc_ht=scontent.fceb2-1.fna&_nc_gid=C90-htRfcKSLA9TAdRk61g&_nc_ss=7b2a8&oh=00_AQN8n8ugMYP1prTvcpr4m3_ToFhpJ12UVbaGditP0YqL1w&oe=6AE39B01'
  },
  {
    id: 1,
    title: 'CPU Computer Science students secure Top 10 spot in AI Game On! IV 2026',
    date: 'Aug 20, 2026',
    category: 'Achievements',
    summary: 'Congratulations Gian Angelo I. Tumulak (BSCS-3) and Florlynn Hope M. Tugbang (BSCS-3) of the College of Computer Studies for being named among the Top 10 national finalists of AI Game On! IV 2026!',
    url: 'https://cpu.edu.ph/the-centralian-link/cpu-computer-science-students-secure-top-10-spot-in-ai-game-on-iv-2026/',
    image: 'https://cpu.edu.ph/wp-content/uploads/2026/08/CPU-Computer-Science-students-secure-Top-10-spot-in-AI-Game-On-IV-2026.jpg'
  }
]
</script>

<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-bg-overlay"></div>
      <div class="hero-content">
        <img src="@/assets/images/logos/CCS_Logo.png" alt="CCS Logo" class="hero-logo" />
        <h1>College of Computer Studies</h1>
        <p>Empowering the next generation of tech leaders through innovative degree programs, hands-on learning, and cutting-edge research.</p>
        <div class="hero-actions">
          <RouterLink to="/about" class="btn btn-primary">Learn About Us</RouterLink>
        </div>
      </div>
    </section>

    <!-- Quick Stats Bar -->
    <section class="stats-floating-wrapper">
      <div class="stats-bar">
        <div class="stat-item">
          <span class="stat-number">4</span>
          <span class="stat-label">Degree Programs</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-number">900+</span>
          <span class="stat-label">Active Students</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-number">20+</span>
          <span class="stat-label">Faculty Members</span>
        </div>
      </div>
    </section>

    <!-- Academic Programs Section -->
    <section class="programs-section">
      <div class="abstract-shape shape-top-left"></div>
      <div class="abstract-shape shape-top-left-accent"></div>
      <div class="abstract-shape shape-bottom-center"></div>
      <div class="abstract-shape shape-right-layer1"></div>
      <div class="abstract-shape shape-right-layer2"></div>

      <div class="container">
        <div class="section-header animate-on-scroll">
          <h2>Academic Programs</h2>
          <p>Explore our specialized undergraduate curricula designed to prepare students for tech industry demands.</p>
        </div>

        <div class="programs-grid">
          <!-- BSCS Card (Darker Cyan) -->
          <div class="program-card card-bscs">
            <div class="card-header">
              <img src="/CS2.png" alt="BSCS Logo" class="program-logo" />
            </div>
            <h3>BS Computer Science</h3>
            <p>Focuses on computing theory, algorithms, software development, and artificial intelligence.</p>
            <RouterLink to="/programs/bscs" class="program-link">
              Explore Program <span>→</span>
            </RouterLink>
          </div>

          <!-- BSIT Card (Royal Purple) -->
          <div class="program-card card-bsit">
            <div class="card-header">
              <img src="/IT.png" alt="BSIT Logo" class="program-logo" />
            </div>
            <h3>BS Information Technology</h3>
            <p>Emphasizes network administration, cybersecurity, web applications, and systems infrastructure.</p>
            <RouterLink to="/programs/bsit" class="program-link">
              Explore Program <span>→</span>
            </RouterLink>
          </div>

          <!-- BSDMIA Card (Cantaloupe) -->
          <div class="program-card card-bsdmia">
            <div class="card-header">
              <img src="/DMIA.png" alt="BSDMIA Logo" class="program-logo" />
            </div>
            <h3>BS Digital Media & Interactive Arts</h3>
            <p>Combines creative design, game development, user experience (UX), and multimedia technologies.</p>
            <RouterLink to="/programs/bsdmia" class="program-link">
              Explore Program <span>→</span>
            </RouterLink>
          </div>

          <!-- BLIS Card (Sky Blue) -->
          <div class="program-card card-blis">
            <div class="card-header">
              <img src="/BLIS.png" alt="BLIS Logo" class="program-logo" />
            </div>
            <h3>Bachelor of Library & Info Science</h3>
            <p>Prepares experts in knowledge management, digital archiving, and information systems.</p>
            <RouterLink to="/programs/blis" class="program-link">
              Explore Program <span>→</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest News & Highlights -->
    <section class="section news-highlights">
      <div class="container">
        <div class="section-header news-header animate-on-scroll">
          <h2>Latest News & Announcements</h2>
          <p>Stay informed with current events, student achievements, and college activities.</p>
        </div>

        <div class="news-grid">
          <NewsCard
            v-for="(item, index) in featuredNews"
            :key="item.id"
            :class="['animate-on-scroll', `delay-${(index % 3) + 1}`]"
            :title="item.title"
            :date="item.date"
            :category="item.category"
            :summary="item.summary"
            :url="item.url"
            :image="item.image"
          />
        </div>

        <div class="view-all-wrapper">
          <RouterLink to="/news" class="btn btn-secondary">
            View All News & Events <span class="btn-arrow">→</span>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800;900&display=swap');

.home-page {
  width: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 2;
}

/* ==========================================================================
   Hero Section
   ========================================================================== */
.hero-section {
  position: relative;
  background-image: url('@/assets/images/addOns/MaryThomas.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #ffffff;
  min-height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 1.5rem;
  text-align: center;
}

.hero-bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(6, 78, 59, 0.92) 0%,
    rgba(15, 23, 42, 0.88) 100%
  );
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 820px;
  margin: 0 auto;
}

.hero-logo {
  width: 140px;
  height: auto;
  margin: 0 auto 1.5rem auto;
  display: block;
  filter: drop-shadow(0 6px 16px rgba(0, 0, 0, 0.4));
  transition: transform 0.3s ease;
}

.hero-logo:hover {
  transform: scale(1.05);
}

.hero-content h1 {
  font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  font-size: 2.6rem;
  font-weight: 800;
  margin-bottom: 1.25rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.hero-content p {
  font-size: 1.2rem;
  color: #e2e8f0;
  margin: 0 auto 2.5rem auto;
  line-height: 1.6;
  max-width: 680px;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
}

.hero-actions {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* ==========================================================================
   Buttons
   ========================================================================== */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary {
  background-color: #FFB027;
  color: #0f172a;
  box-shadow: 0 4px 14px rgba(255, 176, 39, 0.35);
}

.btn-primary:hover {
  background-color: #e59c1f;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 176, 39, 0.5);
}

.btn-secondary {
  background-color: #062c1e;
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(6, 44, 30, 0.15);
}

.btn-secondary:hover {
  background-color: #0a4d33;
  transform: translateY(-2px);
  color: #FFB027;
}

/* ==========================================================================
   Quick Stats Bar
   ========================================================================== */
.stats-floating-wrapper {
  max-width: 1050px;
  margin: -5.5rem auto 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 10;
}

.stats-bar {
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem 2.5rem;
  box-shadow: 0 20px 30px -10px rgba(6, 44, 30, 0.12), 0 8px 10px -6px rgba(0, 0, 0, 0.04);
  border: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.stat-item {
  text-align: center;
  flex: 1;
  min-width: 160px;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 800;
  color: #062c1e;
  line-height: 1.1;
  margin-bottom: 0.35rem;
}

.stat-label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #FFB027;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.stat-divider {
  width: 1px;
  height: 45px;
  background-color: #e2e8f0;
}

/* ==========================================================================
   Academic Programs & Section Headers
   ========================================================================== */
.programs-section {
  margin-top: -4rem;
  padding: 6.5rem 1.5rem 6rem 1.5rem;
  background-color: #f8fafc;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.section-header,
.news-header {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 3.5rem auto;
}

.section-header h2,
.news-header h2 {
  font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  font-size: 2.25rem;
  font-weight: 900;
  color: #FFB027;
  margin-bottom: 0.75rem;
  letter-spacing: -0.025em;
  text-transform: none;
}

.section-header p,
.news-header p {
  color: #475569;
  font-size: 1.05rem;
  line-height: 1.6;
}

.programs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.75rem;
}

/* Base Program Card Styling */
.program-card {
  border-radius: 16px;
  padding: 2.25rem 1.75rem;
  display: flex;
  flex-direction: column;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}

.program-card:hover {
  transform: translateY(-8px);
}

.card-header {
  margin-bottom: 1.25rem;
}

.program-logo {
  height: 48px;
  width: auto;
  max-width: 100%;
  object-fit: contain;
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.12));
  transition: transform 0.3s ease;
}

.program-card:hover .program-logo {
  transform: scale(1.08);
}

.program-card h3 {
  font-size: 1.25rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.program-card p {
  color: #334155;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.75rem;
  flex-grow: 1;
}

.program-link {
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.25s ease;
}

.program-link span {
  transition: transform 0.25s ease;
}

.program-card:hover .program-link span {
  transform: translateX(6px);
}

/* --------------------------------------------------------------------------
   Course Themes & Titles
   -------------------------------------------------------------------------- */

/* 1. BSCS - Darker Cyan Gradient & Title */
.card-bscs {
  background: linear-gradient(160deg, #ffffff 0%, #ecfeff 50%, #cffafe 100%);
  border: 1px solid #67e8f9;
  box-shadow: 0 10px 25px -5px rgba(8, 145, 178, 0.12);
}
.card-bscs:hover {
  border-color: #0891b2;
  background: linear-gradient(160deg, #ffffff 0%, #cffafe 40%, #a5f3fc 100%);
  box-shadow: 0 20px 35px -8px rgba(8, 145, 178, 0.28);
}
.card-bscs h3,
.card-bscs .program-link {
  color: #0891b2;
}
.card-bscs:hover .program-link {
  color: #0e7490;
}

/* 2. BSIT - Royal Purple Gradient & Title */
.card-bsit {
  background: linear-gradient(160deg, #ffffff 0%, #faf5ff 60%, #f3e8ff 100%);
  border: 1px solid #e9d5ff;
  box-shadow: 0 10px 25px -5px rgba(126, 34, 206, 0.1);
}
.card-bsit:hover {
  border-color: #7E22CE;
  background: linear-gradient(160deg, #ffffff 0%, #f3e8ff 50%, #e9d5ff 100%);
  box-shadow: 0 20px 35px -8px rgba(126, 34, 206, 0.22);
}
.card-bsit h3,
.card-bsit .program-link {
  color: #7e22ce;
}
.card-bsit:hover .program-link {
  color: #581C87;
}

/* 3. BSDMIA - Cantaloupe Gradient & Title */
.card-bsdmia {
  background: linear-gradient(160deg, #ffffff 0%, #fff7ed 60%, #ffedd5 100%);
  border: 1px solid #fed7aa;
  box-shadow: 0 10px 25px -5px rgba(255, 138, 91, 0.12);
}
.card-bsdmia:hover {
  border-color: #FF8A5B;
  background: linear-gradient(160deg, #ffffff 0%, #ffedd5 50%, #fed7aa 100%);
  box-shadow: 0 20px 35px -8px rgba(255, 138, 91, 0.25);
}
.card-bsdmia h3,
.card-bsdmia .program-link {
  color: #e56a39;
}
.card-bsdmia:hover .program-link {
  color: #C2410C;
}

/* 4. BLIS - Sky Blue Gradient & Title */
.card-blis {
  background: linear-gradient(160deg, #ffffff 0%, #f0fdf4 60%, #e0f2fe 100%);
  border: 1px solid #bae6fd;
  box-shadow: 0 10px 25px -5px rgba(14, 165, 233, 0.1);
}
.card-blis:hover {
  border-color: #0EA5E9;
  background: linear-gradient(160deg, #ffffff 0%, #e0f2fe 50%, #bae6fd 100%);
  box-shadow: 0 20px 35px -8px rgba(14, 165, 233, 0.22);
}
.card-blis h3,
.card-blis .program-link {
  color: #0284c7;
}
.card-blis:hover .program-link {
  color: #0369A1;
}

/* ==========================================================================
   Abstract Shapes
   ========================================================================== */
.abstract-shape {
  position: absolute;
  pointer-events: none;
  z-index: 1;
  border-radius: 80px;
}

.shape-top-left {
  top: -120px;
  left: -80px;
  width: 380px;
  height: 520px;
  background: linear-gradient(145deg, #0a4d33 0%, #04291b 100%);
  transform: rotate(-25deg);
  opacity: 0.28;
}

.shape-top-left-accent {
  top: -160px;
  left: 120px;
  width: 280px;
  height: 480px;
  background: linear-gradient(160deg, #FFB027 0%, rgba(255, 176, 39, 0.1) 100%);
  transform: rotate(-20deg);
  opacity: 0.35;
}

.shape-bottom-center {
  bottom: -180px;
  left: 32%;
  width: 360px;
  height: 280px;
  background: linear-gradient(180deg, #0a4d33 0%, rgba(10, 77, 51, 0.2) 100%);
  border-radius: 60px 60px 0 0;
  opacity: 0.22;
}

.shape-right-layer1 {
  bottom: -100px;
  right: -60px;
  width: 340px;
  height: 580px;
  background: linear-gradient(200deg, #0a4d33 0%, #063322 100%);
  transform: rotate(18deg);
  opacity: 0.25;
}

.shape-right-layer2 {
  bottom: -140px;
  right: 100px;
  width: 260px;
  height: 460px;
  background: linear-gradient(190deg, #FFB027 0%, #e59c1f 100%);
  transform: rotate(22deg);
  opacity: 0.28;
}

/* ==========================================================================
   News Highlights Section
   ========================================================================== */
.news-highlights {
  background-color: #f8fafc;
  background-image: radial-gradient(rgba(6, 44, 30, 0.12) 1px, transparent 1px);
  background-size: 24px 24px;
  border-top: 1px solid #e2e8f0;
  position: relative;
  padding: 6rem 0;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3.5rem;
}

.view-all-wrapper {
  text-align: center;
}

.btn-secondary {
  background-color: #062c1e;
  color: #ffffff;
  padding: 0.9rem 2.25rem;
  border-radius: 8px;
  font-weight: 700;
  box-shadow: 0 4px 14px rgba(6, 44, 30, 0.18);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.25s ease;
}

.btn-secondary:hover {
  background-color: #0a4d33;
  color: #FFB027;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(6, 44, 30, 0.25);
}

.btn-secondary .btn-arrow {
  transition: transform 0.2s ease;
}

.btn-secondary:hover .btn-arrow {
  transform: translateX(4px);
}

/* ==========================================================================
   Scroll Animations
   ========================================================================== */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), 
              transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}

.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.delay-1 { transition-delay: 0.15s; }
.delay-2 { transition-delay: 0.30s; }
.delay-3 { transition-delay: 0.45s; }

@media (max-width: 640px) {
  .hero-logo {
    width: 100px;
    margin-bottom: 1rem;
  }
  .hero-content h1 {
    font-size: 2rem;
  }
}
</style>