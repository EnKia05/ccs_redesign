<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitted = ref(false)

const handleSubmit = () => {
  if (form.value.name && form.value.email && form.value.message) {
    isSubmitted.value = true
  }
}
</script>

<template>
  <div class="contact-form">
    <div v-if="isSubmitted" class="success-alert">
      Thank you for reaching out! (Demonstration Only)
    </div>

    <form v-else @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input id="name" v-model="form.name" type="text" required />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" v-model="form.email" type="email" required />
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" v-model="form.message" rows="4" required></textarea>
      </div>

      <button type="submit">Send Message</button>
    </form>
  </div>
</template>

<style scoped>
.contact-form {
  max-width: 500px;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: #ffffff;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.25rem;
  font-weight: 600;
}

input, textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
}

button {
  background: #2563eb;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  cursor: pointer;
}

.success-alert {
  padding: 1rem;
  background-color: #dcfce7;
  color: #15803d;
  border-radius: 4px;
}
</style>