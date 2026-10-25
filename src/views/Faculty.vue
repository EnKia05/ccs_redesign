<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import { facultyData } from '../data/facultyData'
import FacultyCard from '../components/FacultyCard.vue'

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

// Extract the Dean's record from facultyData
const deanInfo = computed(() => {
  const deanDept = facultyData.find((d) => d.title === 'Office of the Dean')
  return deanDept?.people[0] ?? null
})

// Group faculty members cleanly by course program while preserving Department Heads and Staff
const formattedDepartments = computed(() => {
  const result: Array<{ title: string; people: typeof facultyData[0]['people'] }> = []

  facultyData.forEach((dept) => {
    // Skip Office of the Dean since it has its own featured hero section
    if (dept.title === 'Office of the Dean') return

    if (dept.title === 'Faculty') {
      const bsitFaculty = dept.people.filter((p) => p.role.includes('BSIT'))
      const bscsFaculty = dept.people.filter((p) => p.role.includes('BSCS'))
      const bsdmiaFaculty = dept.people.filter((p) => p.role.includes('BSDMIA'))
      const blisFaculty = dept.people.filter((p) => p.role.includes('BLIS'))

      if (bsitFaculty.length) {
        result.push({ title: 'Information Technology Faculty', people: bsitFaculty })
      }
      if (bscsFaculty.length) {
        result.push({ title: 'Computer Science Faculty', people: bscsFaculty })
      }
      if (bsdmiaFaculty.length) {
        result.push({ title: 'Digital Media & Interactive Arts Faculty', people: bsdmiaFaculty })
      }
      if (blisFaculty.length) {
        result.push({ title: 'Library & Information Science Faculty', people: blisFaculty })
      }
    } else {
      result.push(dept)
    }
  })

  return result
})
</script>

<template>
  <div class="faculty-page theme-college-brand">
    <!-- Hero Banner with Dark Green Gradient & Orange Accents -->
    <section class="faculty-hero">
      <div class="hero-bg-shapes">
        <div class="geo-circle circle-1"></div>
        <div class="geo-circle circle-2"></div>
      </div>

      <div class="hero-content animate-on-scroll">
        <h1>Faculty & Staff</h1>
        <div class="hero-line"></div>
        <p>Meet our dedicated leadership, educators, and technical specialists shaping the future of computing at the College of Computer Studies.</p>
      </div>
    </section>

    <!-- Main Content Body -->
    <div class="page-body">
      <div class="body-grid-pattern"></div>

      <div class="container">
        <!-- 1. Office of the Dean / Message from the Dean Section -->
        <section v-if="deanInfo" class="dean-feature-section animate-on-scroll">
          <div class="dean-grid">
            <div class="dean-photo-col">
              <div class="photo-frame">
                <img :src="deanInfo.photo" :alt="deanInfo.name" class="dean-photo" />
              </div>
            </div>

            <div class="dean-message-col">
              <h2 class="message-title">Message from the Dean</h2>

              <div class="message-body">
                <p>
                  In every school year for the College of Computer Studies, we look forward with great anticipation to the contributions the new class will make to campus life. In both the aspect of academic and non academic, each students is unique enough to achieve whatever they want to reach for in our college.
                </p>

                <p>
                  The primary focus of CCS is teaching and learning. Our undergraduates are encouraged to think about their education as a whole, rather than just a term taken one thing at a time, and the different faculty members work with them not only during the start of the school year, but throughout the whole as well.
                </p>

                <p>
                  Learning and growth with us does not always come in classroom and academic experiences. Other kinds of opportunities abound, not the least of them the daily occasions for friendship and fellowship with people from many different backgrounds and with a wide variety of interests. In addition, students participate in rich and varied extracurricular activities that the College and University has got to offer.
                </p>

                <p>
                  As another year starts, a new challenge comes for each and everyone with us. Take this into your mind and hearts and be able to reach the dream that you have ever dreamt to succeed. Welcome dear students and have a great school year ahead of you.
                </p>
              </div>

              <div class="dean-signature">
                <span class="dean-name">{{ deanInfo.name }}<template v-if="deanInfo.education">, MSCS</template></span>
                <span class="dean-role">{{ deanInfo.role }}</span>
              </div>
            </div>
          </div>
        </section>

        <!-- 2. Program & Department Sections (Department Heads, Course-grouped Faculty, Staff) -->
        <section 
          v-for="dept in formattedDepartments" 
          :key="dept.title" 
          class="program-section animate-on-scroll"
        >
          <div class="section-header-block">
            <h2>{{ dept.title }}</h2>
            <div class="header-line"></div>
          </div>
          
          <div class="card-grid">
            <FacultyCard
              v-for="person in dept.people"
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
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,500;0,600;0,700;0,800;1,600&display=swap');

/* ==========================================================================
   Faculty Page Branding Palette (Dark Green #0F382C & Orange #E67E22 Accent)
   ========================================================================== */
.theme-college-brand {
  width: 100%;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  color: #1e293b;
  overflow-x: hidden;
}

/* ==========================================================================
   Hero Section
   ========================================================================== */
.faculty-hero {
  position: relative;
  background: linear-gradient(135deg, #09261E 0%, #0F382C 50%, #175242 100%);
  min-height: clamp(320px, 40vh, 420px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(3.5rem, 6vh, 5.5rem) 1.25rem;
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
   Page Body & Grid Layout
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

/* ==========================================================================
   Message from the Dean Section
   ========================================================================== */
.dean-feature-section {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: clamp(1.75rem, 4vw, 3rem);
  box-shadow: 0 10px 30px -10px rgba(15, 56, 44, 0.08);
  margin-bottom: clamp(3rem, 5vw, 4.5rem);
}

.dean-grid {
  display: grid;
  grid-template-columns: clamp(260px, 30vw, 340px) 1fr;
  gap: clamp(2rem, 4vw, 3.5rem);
  align-items: flex-start;
}

.dean-photo-col {
  display: flex;
  justify-content: center;
  width: 100%;
  position: sticky;
  top: 2rem;
}

.photo-frame {
  width: 100%;
  aspect-ratio: 3 / 4;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px -4px rgba(0, 0, 0, 0.12);
  background-color: #f1f5f9;
}

.dean-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.3s ease;
}

.photo-frame:hover .dean-photo {
  transform: scale(1.03);
}

.dean-message-col {
  display: flex;
  flex-direction: column;
}

.message-title {
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 800;
  font-style: italic;
  color: #E67E22;
  margin: 0 0 1.25rem 0;
  letter-spacing: -0.02em;
  line-height: 1.15;
}

.message-body {
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
  margin-bottom: 2rem;
}

.message-body p {
  font-size: clamp(0.92rem, 1.6vw, 1rem);
  line-height: 1.75;
  color: #475569;
  margin: 0;
  font-weight: 500;
  text-align: justify;
}

.dean-signature {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  border-top: 1px dashed #e2e8f0;
  padding-top: 1.25rem;
}

.dean-name {
  font-size: clamp(0.98rem, 1.8vw, 1.08rem);
  font-weight: 700;
  color: #0F382C;
  font-style: italic;
}

.dean-role {
  font-size: 0.88rem;
  font-weight: 800;
  color: #E67E22;
  font-style: italic;
}

/* ==========================================================================
   Program & Department Sections
   ========================================================================== */
.program-section {
  margin-bottom: clamp(3rem, 5vw, 4.5rem);
}

.program-section:last-child {
  margin-bottom: 0;
}

.section-header-block {
  margin-bottom: 1.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.section-header-block h2 {
  font-size: clamp(1.4rem, 2.8vw, 1.9rem);
  font-weight: 800;
  color: #0f382c;
  margin: 0;
}

.header-line {
  width: 45px;
  height: 3px;
  background: #E67E22;
  margin-top: 0.5rem;
  border-radius: 2px;
}

/* Card Grid Layout */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 240px));
  gap: clamp(1rem, 2vw, 1.25rem);
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

@media (max-width: 820px) {
  .dean-grid {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }

  .dean-photo-col {
    position: static;
    max-width: 300px;
    margin: 0 auto;
  }

  .dean-signature {
    align-items: flex-start;
    text-align: left;
  }

  .card-grid {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }
}
</style>