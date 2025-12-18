<template>
  <article
    class="about-page"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <!-- OVERLAY -->
    <div class="overlay"></div>

    <!-- CONTENT -->
    <div class="content">
      <!-- HERO -->
      <section class="hero">
        <h1>NL Architect</h1>
        <p>
          An independent architectural practice focusing on calm,
          contextual and human-centered design.
        </p>
      </section>

      <!-- ABOUT -->
      <section class="block">
        <p>
          NL Architect is a one-member architecture practice founded and
          led by a licensed architect based in Vietnam.
        </p>

        <p>
          The studio works on residential and small-scale architectural
          projects, providing carefully crafted design solutions with
          strong attention to context, materiality, and spatial quality.
        </p>
      </section>

      <!-- PHILOSOPHY -->
      <section class="block">
        <h2>Design Philosophy</h2>

        <p>
          Architecture is approached as a balance between function,
          atmosphere, and clarity.
        </p>

        <p>
          Each project is treated as a unique response to its site,
          climate, and client, rather than a repetition of form.
        </p>
      </section>

      <!-- PRACTICE -->
      <section class="block">
        <h2>Practice</h2>

        <ul>
          <li>Residential Architecture</li>
          <li>Interior Architecture</li>
          <li>Small Commercial Projects</li>
          <li>Concept Design & Consultation</li>
        </ul>
      </section>
    </div>
  </article>
</template>
<script setup>
import bgImage from "@/assets/images/banner1.jpg";
</script>
<style scoped>
.about-page {
  position: relative;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  color: #fff;
  font-family: serif;
}

/* OVERLAY */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

/* CONTENT */
.content {
  position: relative;
  z-index: 2;
  max-width: 900px;
  padding: 140px 40px 120px;
  margin: 0 auto;
}

/* HERO */
.hero {
  margin-bottom: 80px;
}

.hero h1 {
  font-size: 52px;
  font-weight: 400;
  letter-spacing: 2px;
  margin-bottom: 20px;
}

.hero p {
  font-size: 20px;
  line-height: 1.6;
  opacity: 0.85;
  max-width: 720px;
}

/* BLOCKS */
.block {
  margin-bottom: 72px;
}

.block h2 {
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 24px;
  opacity: 0.7;
}

.block p {
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 20px;
  opacity: 0.85;
}

/* LIST */
.block ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.block li {
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 15px;
  opacity: 0.85;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .content {
    padding: 100px 24px 80px;
  }

  .hero h1 {
    font-size: 40px;
  }

  .hero p {
    font-size: 18px;
  }
}
</style>
