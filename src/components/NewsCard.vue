<script setup lang="ts">
defineProps<{
  title: string
  date: string
  category: string
  summary: string
  url?: string
  image?: string
}>()
</script>

<template>
  <a
    :href="url || '#'"
    target="_blank"
    rel="noopener noreferrer"
    class="news-card"
  >
    <!-- Article Image Thumbnail -->
    <div v-if="image" class="card-image-wrapper">
      <img :src="image" :alt="title" class="card-image" loading="lazy" />
      <span class="category-badge">{{ category }}</span>
    </div>

    <!-- Article Info -->
    <div class="card-body">
      <div v-if="!image" class="category-badge-inline">{{ category }}</div>
      <span class="card-date">{{ date }}</span>
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-summary">{{ summary }}</p>

      <div class="card-footer">
        <span class="read-more">
          Read Full Article
          <svg class="arrow-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </span>
      </div>
    </div>
  </a>
</template>

<style scoped>
.news-card {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 14px;
  border: 1px solid #e2e8f0;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), 
              box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
}

.news-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 28px rgba(15, 56, 44, 0.12);
  border-color: #E67E22;
}

/* Image Wrapper */
.card-image-wrapper {
  position: relative;
  width: 100%;
  height: 190px;
  overflow: hidden;
  background-color: #f1f5f9;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.news-card:hover .card-image {
  transform: scale(1.06);
}

/* Badges */
.category-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(15, 56, 44, 0.92);
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  backdrop-filter: blur(4px);
  letter-spacing: 0.02em;
}

.category-badge-inline {
  display: inline-block;
  align-self: flex-start;
  background: #0f382c;
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  margin-bottom: 0.5rem;
}

/* Card Body */
.card-body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 1.25rem;
}

.card-date {
  font-size: 0.8rem;
  font-weight: 600;
  color: #64748b;
  margin-bottom: 0.5rem;
}

.card-title {
  font-size: 1.05rem;
  font-weight: 800;
  color: #0f382c;
  line-height: 1.4;
  margin: 0 0 0.65rem 0;
  transition: color 0.2s ease;
}

.news-card:hover .card-title {
  color: #E67E22;
}

.card-summary {
  font-size: 0.9rem;
  color: #475569;
  line-height: 1.55;
  margin: 0 0 1.25rem 0;
  flex-grow: 1;
}

/* Footer Link */
.card-footer {
  border-top: 1px solid #f1f5f9;
  padding-top: 0.85rem;
  margin-top: auto;
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.85rem;
  font-weight: 700;
  color: #E67E22;
}

.arrow-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease;
}

.news-card:hover .arrow-icon {
  transform: translateX(4px);
}
</style>