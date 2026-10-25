<script setup lang="ts">
defineProps<{
  name: string
  role: string
  education?: string
  photo: string
}>()
</script>

<template>
  <div class="faculty-card">
    <div class="card-image-wrapper">
      <img :src="photo" :alt="name" class="faculty-photo" loading="lazy" />
    </div>

    <div class="card-details">
      <h3 class="faculty-name">{{ name }}</h3>
      <p class="faculty-role">{{ role }}</p>
      <p v-if="education" class="faculty-education">{{ education }}</p>
    </div>
  </div>
</template>

<style scoped>
.faculty-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px -4px rgba(15, 56, 44, 0.06);
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.faculty-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px -5px rgba(15, 56, 44, 0.12);
  border-color: #E67E22;
}

.card-image-wrapper {
  width: 100%;
  aspect-ratio: 4 / 4.5; /* Slightly shorter photo frame */
  overflow: hidden;
  background-color: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
}

.faculty-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.3s ease;
}

.faculty-card:hover .faculty-photo {
  transform: scale(1.03);
}

.card-details {
  padding: 0.9rem 1rem; /* Compact inner padding */
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.faculty-name {
  font-size: 0.98rem; /* Slightly smaller name */
  font-weight: 800;
  color: #0f382c;
  margin: 0 0 0.25rem 0;
  line-height: 1.3;
}

.faculty-role {
  font-size: 0.82rem; /* Compact role badge/text */
  font-weight: 700;
  color: #E67E22;
  margin: 0 0 0.35rem 0;
  line-height: 1.3;
}

.faculty-education {
  font-size: 0.78rem; /* Slightly smaller education text */
  color: #64748b;
  margin: 0;
  line-height: 1.35;
  font-weight: 500;
}
</style>