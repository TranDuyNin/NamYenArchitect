<template>
  <div class="contact-page" :style="{ backgroundImage: `url(${bgImage})` }">
    <div class="overlay"></div>

    <div class="contact-container">
      <!-- LEFT INFO -->
      <div class="contact-info">
        <h1>Contact</h1>
        <p>
          Let’s talk about your next project.<br />
          We’d love to hear from you.
        </p>

        <ul>
          <li>
            <strong>Address</strong>
            <span>Ho Chi Minh City, Vietnam</span>
          </li>
          <li>
            <strong>Email</strong>
            <span>studio@email.com</span>
          </li>
          <li>
            <strong>Phone</strong>
            <span>+84 912 345 678</span>
          </li>
        </ul>
      </div>

      <!-- RIGHT FORM -->
      <form class="contact-form" @submit.prevent="submitForm">
        <input type="text" placeholder="Your name" v-model="form.name" />
        <input type="email" placeholder="Your email" v-model="form.email" />
        <textarea rows="5" placeholder="Your message" v-model="form.message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import bgImage from '@/assets/images/banner1.jpg'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const submitForm = () => {
  console.log('Contact form:', form)
  alert('Message sent!')
}
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
  color: #fff;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
}

.contact-container {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: auto;
  padding: 120px 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
}

.contact-info h1 {
  font-size: 64px;
  font-weight: 600;
  margin-bottom: 24px;
}

.contact-info p {
  font-size: 18px;
  opacity: 0.9;
  margin-bottom: 40px;
}

.contact-info ul {
  list-style: none;
  padding: 0;
}

.contact-info li {
  margin-bottom: 24px;
}

.contact-info strong {
  display: block;
  font-size: 14px;
  opacity: 0.6;
  text-transform: uppercase;
}

.contact-info span {
  font-size: 16px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-form input,
.contact-form textarea {
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255,255,255,0.4);
  padding: 12px 0;
  color: #fff;
  font-size: 16px;
  outline: none;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: rgba(255,255,255,0.6);
}

.contact-form button {
  margin-top: 24px;
  align-self: flex-start;
  padding: 12px 32px;
  background: #fff;
  color: #000;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.contact-form button:hover {
  background: #ddd;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .contact-container {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .contact-info h1 {
    font-size: 48px;
  }
}
</style>
