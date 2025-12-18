<template>
  <div class="projects-page" :style="{ backgroundImage: `url(${bgImage})` }">
    <!-- OVERLAY -->
    <div class="overlay"></div>

    <!-- PROJECT GRID -->
    <section class="projects-grid">
      <article v-for="(p, i) in projects" :key="i" class="project-item" @click="goDetail(p.slug)">
        <div class="project-image" :style="{ backgroundImage: `url(${p.image})` }">
          <div class="detail-box">
          </div>
        </div>
        <div class="project-info">
          <h3>{{ p.name }}</h3>
          <span>{{ p.location }}</span>
        </div>
      </article>

    </section>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

/* ===== IMPORT IMAGES ===== */
import bgImage from "@/assets/images/banner1.jpg";

import p1 from "@/assets/images/banner1.jpg";
import p2 from "@/assets/images/banner2.jpeg";
import p3 from "@/assets/images/banner3.jpeg";
import p4 from "@/assets/images/banner4.jpg";
import p5 from "@/assets/images/banner5.jpg";
import p6 from "@/assets/images/banner6.jpg";

const router = useRouter();

/* ===== DATA ===== */
const projects = [
  { name: "Residential House", location: "Ho Chi Minh City", slug: "home1", image: p1 },
  { name: "Studio Office", location: "Da Nang", slug: "home2", image: p2 },
  { name: "Private Villa", location: "Hanoi", slug: "home3", image: p3 },
  { name: "Art Gallery", location: "Paris", slug: "home4", image: p4 },
  { name: "Urban Housing", location: "Tokyo", slug: "home5", image: p5 },
  { name: "Cultural Center", location: "Berlin", slug: "home6", image: p6 },
];

/* ===== ROUTE ===== */
const goDetail = (slug) => {
  router.push(`/ProjectDetail/${slug}`);
};
</script>


<style scoped>
/* ===== PAGE ===== */
.projects-page {
  position: relative;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ===== OVERLAY ===== */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  z-index: 1;
}

/* ===== GRID ===== */
.projects-grid {
  position: relative;
  z-index: 2;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 1200px;
  width: 100%;
  padding: 40px;
}

/* ===== ITEM ===== */
.project-item {
  background: #000;
  overflow: hidden;
  cursor: pointer;
}

/* ===== IMAGE ===== */
.project-image {
  position: relative;
  width: 100%;
  height: 260px;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  transition: transform 0.6s ease;
}

/* Zoom ảnh */
.project-item:hover .project-image {
  transform: scale(1.05);
}

/* Overlay tối */
.project-image::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.project-item:hover .project-image::after {
  opacity: 1;
}

/* ===== DETAIL BOX (HUNI STYLE) ===== */
.detail-box {
  position: absolute;
  inset: 0;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  transition: opacity 0.4s ease;
}

.project-item:hover .detail-box {
  opacity: 1;
}

.detail-box {
  pointer-events: none;
}

.detail-box::before {
  content: "DETAIL";

  width: 140px;
  height: 46px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(255, 255, 255, 0.75);
  color: #fff;
  font-size: 13px;
  letter-spacing: 2px;
  background: rgba(0, 0, 0, 0.25);

  transition: all 0.3s ease;
}

.project-item:hover .detail-box::before {
  border-color: #fff;
  background: rgba(255, 255, 255, 0.08);
}

/* ===== INFO ===== */
.project-info {
  padding: 16px;
  color: #fff;
}

.project-info h3 {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 6px;
}

.project-info span {
  font-size: 12px;
  opacity: 0.7;
  letter-spacing: 1px;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
