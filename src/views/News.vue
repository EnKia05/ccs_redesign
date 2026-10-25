<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import NewsCard from '../components/NewsCard.vue'

// Category Filter State
const selectedCategory = ref('All')
const categories = ['All', 'Announcements', 'Events', 'Achievements', 'Academic']

// News Dataset
const newsList = [
  {
    id: 1,
    title: 'CCS Students Secure Top Spots in National Hackathon',
    date: 'October 18, 2026',
    category: 'Achievements',
    summary: 'Our Computer Science and IT teams demonstrated exceptional skill in software development and algorithm design during the annual regional collegiate dev competition.'
  },
  {
    id: 2,
    title: 'Enrollment Open for Next Semester Academic Programs',
    date: 'October 10, 2026',
    category: 'Announcements',
    summary: 'Explore our specialized degree offerings across IT, Computer Science, Digital Media, and Library Science. Online pre-registration is now active.'
  },
  {
    id: 3,
    title: 'Guest Lecture Series: Emerging Trends in AI and Media',
    date: 'September 28, 2026',
    category: 'Events',
    summary: 'Industry experts share insights on artificial intelligence, interactive design, and data ethics in an interactive virtual panel discussion.'
  },
  {
    id: 4,
    title: 'CCS Faculty Publish Research on Data Privacy in Cloud Systems',
    date: 'September 15, 2026',
    category: 'Academic',
    summary: 'Distinguished faculty members from the Information Technology department have been featured in the International Journal of Computing Research.'
  },
  {
    id: 5,
    title: 'Annual College Sports and Tech Cultural Week Announced',
    date: 'September 02, 2026',
    category: 'Events',
    summary: 'Get ready for a week of competitive esports, athletic events, interactive art showcases, and student project exhibitions.'
  },
  {
    id: 6,
    title: 'Upgraded Computing Laboratories Now Open for Student Use',
    date: 'August 24, 2026',
    category: 'Announcements',
    summary: 'New high-performance graphics workstations and specialized server racks are now available for BSDMIA and BSCS laboratory classes.'
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
   Page Body & Filters
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

/* Filter Tabs */
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

/* News Grid Layout */
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
  gap: clamp(1.25rem, 2.5vw, 1.75rem);
}

/* Empty State */
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