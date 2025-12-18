<template>
  <div class="project-detail">
    <!-- GRID -->
    <div class="image-grid">
      <div
        v-for="(img, i) in projectImages"
        :key="i"
        class="image-item"
        @click="openViewer(i)"
      >
        <img :src="img" alt="" />
      </div>
    </div>

    <!-- LIGHTBOX -->
    <div v-if="viewerOpen" class="viewer" @click.self="closeViewer">
      <button class="nav prev" @click.stop="prevImage">‹</button>

      <img :src="projectImages[currentIndex]" class="viewer-image" />

      <button class="nav next" @click.stop="nextImage">›</button>
      <span class="close" @click="closeViewer">×</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const slug = route.params.slug;

/* ===== IMPORT IMAGES ===== */
import r1 from "@/assets/images/banner1.jpg";
import r2 from "@/assets/images/banner2.jpeg";
import r3 from "@/assets/images/banner3.jpeg";
import r4 from "@/assets/images/banner4.jpg";
import r5 from "@/assets/images/banner5.jpg";

/* ===== DATA ===== */
const projects = {
  "residential-house": [r1, r2, r3, r4, r5],
};

/* ===== IMAGES ===== */
const projectImages = computed(() => projects[slug] || []);

/* ===== VIEWER ===== */
const viewerOpen = ref(false);
const currentIndex = ref(0);

const openViewer = (index) => {
  currentIndex.value = index;
  viewerOpen.value = true;
};

const closeViewer = () => {
  viewerOpen.value = false;
};

const prevImage = () => {
  currentIndex.value =
    (currentIndex.value - 1 + projectImages.value.length) %
    projectImages.value.length;
};

const nextImage = () => {
  currentIndex.value =
    (currentIndex.value + 1) % projectImages.value.length;
};
</script>

<style scoped>
/* ===== PAGE ===== */
.project-detail {
  background: #000;
  min-height: 100vh;
  padding: 60px 40px;
}

/* ===== GRID ===== */
.image-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.image-item {
  cursor: pointer;
  overflow: hidden;
}

.image-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.image-item:hover img {
  transform: scale(1.05);
}

/* ===== LIGHTBOX ===== */
.viewer {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: center;
}

.viewer-image {
  max-width: 90%;
  max-height: 90%;
}

/* ===== NAV ===== */
.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 48px;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
  opacity: 0.7;
}

.nav:hover {
  opacity: 1;
}

.prev {
  left: 40px;
}

.next {
  right: 40px;
}

/* ===== CLOSE ===== */
.close {
  position: absolute;
  top: 30px;
  right: 40px;
  font-size: 36px;
  color: #fff;
  cursor: pointer;
  opacity: 0.7;
}

.close:hover {
  opacity: 1;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .image-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .image-grid {
    grid-template-columns: 1fr;
  }
}
</style>
