<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import NewsCard from '../components/NewsCard.vue'

// Category Filter State
const selectedCategory = ref('All')
const categories = ['All', 'Announcements', 'Events', 'Achievements', 'Academic']

// News Dataset with Exact Custom Image CDN URLs & Source Article Links
const newsList = [
  {
    id: 1,
    title: 'CPU Computer Science students secure Top 10 spot in AI Game On! IV 2026',
    date: 'Aug 20, 2026',
    category: 'Achievements',
    summary: 'Congratulations Gian Angelo I. Tumulak (BSCS-3) and Florlynn Hope M. Tugbang (BSCS-3) of the College of Computer Studies for being named among the Top 10 national finalists of AI Game On! IV 2026!',
    url: 'https://cpu.edu.ph/the-centralian-link/cpu-computer-science-students-secure-top-10-spot-in-ai-game-on-iv-2026/',
    image: 'https://cpu.edu.ph/wp-content/uploads/2026/08/CPU-Computer-Science-students-secure-Top-10-spot-in-AI-Game-On-IV-2026.jpg'
  },
  {
    id: 2,
    title: 'Aksyon Departamento and Town Hall Meeting',
    date: 'October 23, 2026',
    category: 'Announcements',
    summary: 'Watch the CPU - College of Computer Studies Provincial Council\'s Aksyon Departamento and Town Hall Meeting for the 1st Semester of the A.Y. 2026-2027 live only here at The Cipher Publication. Witness the forums, planning, and council agendas unfold with the chance to be a part of the conversation.',
    url: 'https://www.facebook.com/share/p/19ojhXENVk/',
    image: 'https://scontent.fceb6-4.fna.fbcdn.net/v/t39.99422-6/859180806_1649269333558405_1859044475462672181_n.png?stp=dst-jpg_tt6&cstp=mx2048x1014&ctp=s2048x1014&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGi3cJg8IvgsciBqh1KwoMAJUKgwv0lVEUlQqDC_SVURQVzmWnwWmAtyv3sI0DPiMNrW7mE2kdlUxRK7OjObzx0&_nc_ohc=7PIrStSk0s0Q7kNvwELapTk&_nc_oc=AdrFUbrf6rGWrLnRVmC6NBCJFuhqqiLYTaGIAk140fKECTA0yKhG1KtoitM9IYs4bpM&_nc_zt=14&_nc_ht=scontent.fceb6-4.fna&_nc_gid=wFQ-EBtgdOoan03COyxP6Q&_nc_ss=7b2a8&oh=00_AQP0h32Km9ltorqWkV92Ljp0iEeXA5dpjrEVQgQdmrz-6w&oe=6AE38C8D'
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
    id: 4,
    title: '𝗞𝗲𝗹𝗹𝘆 𝗥𝗼𝗻𝘃𝗲𝗮𝘂𝘅\'𝘀 𝗧𝗿𝗶𝘂𝗺𝗽𝗵 𝗮𝘀 𝗖𝗖𝗦\' 𝗔𝘄𝗮𝗿𝗱-𝗪𝗶𝗻𝗻𝗶𝗻𝗴 𝗦𝗽𝗲𝗮𝗸𝗲𝗿 𝗱𝘂𝗿𝗶𝗻𝗴 𝘁𝗵𝗲 𝗨𝗪𝗖𝗙 𝟮𝟬𝟮𝟲 𝗘𝘅𝘁𝗲𝗺𝗽𝗼𝗿𝗮𝗻𝗲𝗼𝘂𝘀 𝗦𝗽𝗲𝗮𝗸𝗶𝗻𝗴 𝗖𝗼𝗺𝗽𝗲𝘁𝗶𝘁𝗶𝗼𝗻',
    date: 'September 24, 2026',
    category: 'Academic',
    summary: 'The Former 2024 champion, Kelly Ronveaux, won the same title this year as a graduating student of BS computer science. She was also the former editor-in-chief of the Cipher Publication and now serves as the publication’s Associate Editor.',
    url: 'https://www.facebook.com/share/p/1cntKRS2G2/',
    image: 'https://scontent.fceb6-5.fna.fbcdn.net/v/t39.99422-6/854293490_1126147429791116_5801562508757480027_n.png?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHNUmtwmiuMt3Rnj3eM1GRXANcWhZKCE_oA1xaFkoIT-mGqW3eH73IoVIpqAhPN-7SbTL334aqFvtGqk3nO4UBS&_nc_ohc=xbuVNtYHZnYQ7kNvwGd_yMg&_nc_oc=AdpcDo7_LwjL3y6lmsXb0Oqydcr-dBKfgbMqyZTZ5BB4XjObbIWR5q0rgctq9ww2RA0&_nc_zt=14&_nc_ht=scontent.fceb6-5.fna&_nc_gid=8Grrdiha0QcYH-euBUfJpQ&_nc_ss=7b2a8&oh=00_AQN4pO3onxR3sJHn9xCWdenniQGMszRhKi5CTt7Y20HSDg&oe=6AE3A0B1'
  },
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
    id: 6,
    title: '𝗕𝗦𝗖𝗦-𝟮’𝘀 𝗞𝗿𝗶𝘀𝘁𝗼𝗳𝗳 𝗔𝘆𝗹 𝗟𝗶𝗺 𝗕𝗮𝗴𝘀 𝟭𝘀𝘁 𝗥𝘂𝗻𝗻𝗲𝗿-𝗨𝗽 𝗧𝗶𝘁𝗹𝗲 𝗪𝗶𝘁𝗵 𝗛𝗶𝘀 𝗔𝘄𝗮𝗿𝗱-𝗪𝗶𝗻𝗻𝗶𝗻𝗴 𝗣𝗼𝗲𝘁𝗿𝘆 𝗣𝗲𝗿𝗳𝗼𝗿𝗺𝗮𝗻𝗰𝗲 𝗗𝘂𝗿𝗶𝗻𝗴 𝗨𝗪𝗖𝗙 𝟮𝟬𝟮𝟲 𝗕𝗶𝗻𝗮𝗹𝗮𝘆𝗯𝗮𝘆 𝗖𝗼𝗺𝗽𝗲𝘁𝗶𝘁𝗶𝗼𝗻',
    date: 'September 24, 2026',
    category: 'Academic',
    summary: 'Kristoff Ayl Lim from BSCS-2, The College of Computer Studies’ (CCS) representative for the University Week Centralian Fest 2026 (UWCF 2026) Binalaybay Competition, gave a commanding performance with his rendered and crafted original poetry piece “Panubli-on Sa Masunod Nga Henerasyon” at the Rose Memorial Auditorium. Lim’s performance tackles on the generational legacy inspired by centralian excellence, weaved and harnessed for the next generation of learners.',
    url: 'https://www.facebook.com/share/p/1CWuXQkHQH/',
    image: 'https://scontent.fceb6-4.fna.fbcdn.net/v/t39.99422-6/845530550_1408134651467200_7009846125711718939_n.png?stp=dst-jpg_tt6&cstp=mx960x640&ctp=s960x640&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEmndq1tGVSS_VZ-2-_qdcyqXV9LR1NCXmpdX0tHU0Jecs-J54S7qQC6kOW6NYBOSV6GyCFbeXWrSjd1b_j2jQQ&_nc_ohc=o2o7H9-zKVoQ7kNvwEk95uf&_nc_oc=Adr52rmqKWHMnFDsP2nrhUXeeLdaQSz0cAdN0cPTrcic7kz3dcThZNld4dB0XamIW5w&_nc_zt=14&_nc_ht=scontent.fceb6-4.fna&_nc_gid=QTMHF6-6kVjOemKtla58mw&_nc_ss=7b2a8&oh=00_AQPrHqfIKES9gEvsZXo1hjdJBlmil-q-f3M-41GtZ1I41Q&oe=6AE394F9'
  },
  {
    id: 7,
    title: '𝗧𝗲𝗰𝗵𝗻𝗼𝗹𝗲𝗴𝗶𝘁𝘇\'𝘀 𝗘𝗹𝗲𝗰𝘁𝗿𝗶𝗳𝘆𝗶𝗻𝗴 𝗣𝗲𝗿𝗳𝗼𝗿𝗺𝗮𝗻𝗰𝗲 𝗗𝘂𝗿𝗶𝗻𝗴 𝗧𝗵𝗲 𝗨𝗪𝗖𝗙 𝟮𝟬𝟮𝟲 𝗛𝗶𝗽-𝗵𝗼𝗽 𝗖𝗼𝗺𝗽𝗲𝘁𝗶𝘁𝗶𝗼𝗻',
    date: 'September 22, 2025',
    category: 'Achievements',
    summary: 'The College of Computer Studies\' (CCS) hip-hop dance troupe "Technolegitz" gave a phenomenal performance during the University Week Centralian Fest 2026 (UWCF 2026) hip-hop competition held at the Rose Memorial Auditorium, Central Philippine University.',
    url: 'https://www.facebook.com/share/p/18FLi15GAC/',
    image: 'https://scontent.fceb6-1.fna.fbcdn.net/v/t39.99422-6/854570740_2300349857380535_3987618114930427518_n.png?stp=dst-jpg_tt6&cstp=mx1440x960&ctp=s1440x960&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG--nGEMtF9XpTlIt75wRlsjccz4PaZrZGNxzPg9pmtkaffFyhtmbIieYm8iuyN7a-U2j5jTeWpNWtqIa2UIAmH&_nc_ohc=3m5Y_7-2_HcQ7kNvwEoG6nY&_nc_oc=AdpMZsepVeBwl1Cd9GA0ZFgDM5vpXC1M_dEvjXXpIl7P_uO7DAAlcIqkEte6z734XAs&_nc_zt=14&_nc_ht=scontent.fceb6-1.fna&_nc_gid=ooTdWAdAkVmrGKGyz7WmNQ&_nc_ss=7b2a8&oh=00_AQOY4mP35QnWDbdvyPNmL_cHvaT3DJIj-7Zf8_iOXZWNmw&oe=6AE3BA80'
  }
]

// Computed property to filter news based on active category
const filteredNews = computed(() => {
  if (selectedCategory.value === 'All') return newsList
  return newsList.filter(item => item.category === selectedCategory.value)
})

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
  <div class="news-page theme-college-brand">
    <!-- Hero Banner with Dark Green Gradient & Orange Line -->
    <section class="news-hero">
      <div class="hero-bg-shapes">
        <div class="geo-circle circle-1"></div>
        <div class="geo-circle circle-2"></div>
      </div>

      <div class="hero-content animate-on-scroll">
        <h1>News & Events</h1>
        <div class="hero-line"></div>
        <p>Stay updated with the latest college announcements, academic highlights, and student achievements.</p>
      </div>
    </section>

    <!-- Main Content Container -->
    <div class="page-body">
      <div class="body-grid-pattern"></div>

      <div class="container">
        <!-- Publication Banner Container -->
        <section class="publication-card animate-on-scroll">
          <div class="pub-logo-col">
            <img src="/Cipher.jpg" alt="CPU - The Cipher Logo" class="pub-logo" />
          </div>
          <div class="pub-text-col">
            <span class="pub-subtitle">College Publication & Media Outlet</span>
            <h2>CPU - The Cipher</h2>
            <p>The Official Student Publication & Media Outlet of Central Philippine University - College of Computer Studies, founded in 2017.</p>
            <a
              href="https://www.facebook.com/cipherpub"
              target="_blank"
              rel="noopener noreferrer"
              class="pub-fb-btn"
            >
              <svg class="fb-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Visit Our Facebook Page
            </a>
          </div>
        </section>

        <!-- Category Filter Tabs -->
        <div class="filter-tabs animate-on-scroll">
          <button
            v-for="cat in categories"
            :key="cat"
            :class="['tab-btn', { active: selectedCategory === cat }]"
            @click="selectedCategory = cat"
          >
            {{ cat }}
          </button>
        </div>

        <!-- News Cards Grid -->
        <div v-if="filteredNews.length > 0" class="news-grid animate-on-scroll">
          <NewsCard
            v-for="item in filteredNews"
            :key="item.id"
            :title="item.title"
            :date="item.date"
            :category="item.category"
            :summary="item.summary"
            :url="item.url"
            :image="item.image"
          />
        </div>

        <!-- Empty State -->
        <div v-else class="empty-state animate-on-scroll">
          <p>No news articles found under the "{{ selectedCategory }}" category.</p>
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
.news-hero {
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
   Page Body & Layout
   ========================================================================== */
.page-body {
  position: relative;
  background-color: #f8fafc;
  padding: clamp(2.5rem, 5vw, 4rem) 0 clamp(3.5rem, 6vw, 6rem) 0;
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

/* ==========================================================================
   College Publication Banner
   ========================================================================== */
.publication-card {
  display: flex;
  align-items: center;
  gap: clamp(1.5rem, 4vw, 3rem);
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  padding: clamp(1.5rem, 3.5vw, 2.5rem);
  box-shadow: 0 10px 30px rgba(15, 56, 44, 0.06);
  margin-bottom: clamp(2rem, 4vw, 3rem);
  position: relative;
  overflow: hidden;
}

.publication-card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 5px;
  background: #E67E22;
}

.pub-logo-col {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pub-logo {
  width: clamp(120px, 18vw, 170px);
  height: clamp(120px, 18vw, 170px);
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #f1f5f9;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
}

.pub-text-col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.pub-subtitle {
  font-size: 0.82rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #E67E22;
  margin-bottom: 0.25rem;
}

.pub-text-col h2 {
  font-size: clamp(1.4rem, 2.8vw, 2rem);
  font-weight: 800;
  color: #0f382c;
  margin: 0 0 0.5rem 0;
  line-height: 1.2;
}

.pub-text-col p {
  font-size: clamp(0.92rem, 1.6vw, 1rem);
  color: #475569;
  line-height: 1.6;
  margin: 0 0 1.25rem 0;
  max-width: 720px;
}

.pub-fb-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: #1877f2;
  color: #ffffff;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.65rem 1.35rem;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(24, 119, 242, 0.25);
}

.pub-fb-btn:hover {
  background: #166fe5;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(24, 119, 242, 0.35);
}

.fb-icon {
  width: 18px;
  height: 18px;
}

/* ==========================================================================
   Filter Tabs & Grid Layout
   ========================================================================== */
.filter-tabs {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2.5rem;
}

.tab-btn {
  background: #ffffff;
  border: 1px solid #cbd5e1;
  color: #0f382c;
  padding: 0.5rem 1.25rem;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.88rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
}

.tab-btn:hover {
  border-color: #E67E22;
  color: #E67E22;
}

.tab-btn.active {
  background: #0f382c;
  color: #ffffff;
  border-color: #0f382c;
  box-shadow: 0 4px 12px rgba(15, 56, 44, 0.18);
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
  gap: clamp(1.25rem, 2.5vw, 1.75rem);
}

.empty-state {
  text-align: center;
  padding: 3rem;
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  color: #64748b;
  font-weight: 500;
}

/* ==========================================================================
   Scroll Animation & Responsive Breakpoints
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

@media (max-width: 640px) {
  .publication-card {
    flex-direction: column;
    text-align: center;
  }

  .pub-text-col {
    align-items: center;
  }
}
</style>