<template>
  <article class="news-card">
    <div class="card-meta">
      <span class="category-badge">{{ category }}</span>
      <time class="news-date">{{ date }}</time>
    </div>
    <h3 class="news-title">{{ title }}</h3>
    <p class="news-summary">{{ summary }}</p>
    <div class="card-footer">
      <span class="read-more">Read Article <span>→</span></span>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  date: string
  category: string
  summary: string
}>()
</script>

<style scoped>
.news-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  height: 100%;
}

/* Gold Top Accent Line on Hover */
.news-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #062c1e 0%, #FFB027 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.news-card:hover {
  transform: translateY(-6px);
  border-color: #cbd5e1;
  box-shadow: 0 16px 28px -6px rgba(6, 44, 30, 0.12);
}

.news-card:hover::before {
  opacity: 1;
}

.card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}

.category-badge {
  background-color: #FFB027;
  color: #0f172a;
  font-weight: 800;
  font-size: 0.75rem;
  padding: 0.25rem 0.65rem;
  border-radius: 6px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.news-date {
  font-size: 0.85rem;
  color: #94a3b8;
  font-weight: 500;
}

.news-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #062c1e;
  line-height: 1.35;
  margin-bottom: 0.85rem;
  transition: color 0.2s ease;
}

.news-card:hover .news-title {
  color: #0a4d33;
}

.news-summary {
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 2rem;
  flex-grow: 1;
}

.card-footer {
  border-top: 1px solid #f1f5f9;
  padding-top: 1rem;
}

.read-more {
  font-size: 0.9rem;
  font-weight: 700;
  color: #062c1e;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  transition: color 0.2s ease;
}

.read-more span {
  transition: transform 0.2s ease;
}

.news-card:hover .read-more {
  color: #FFB027;
}

.news-card:hover .read-more span {
  transform: translateX(4px);
}
</style>