<template>
  <div class="project-page">
    <!-- HEADER -->
    <header :class="{ scrolled: isScrolled }">
      <div class="container">
        <div class="left">
          <!-- Logo -->
          <RouterLink to="/" class="logo">
            <img src="@/assets/images/Logo.png" alt="Logo" />
          </RouterLink>
          <!-- Menu Toggle -->
          <div class="menu-toggle" @click="menuOpen = !menuOpen">
            <span v-if="!menuOpen">☰</span>
            <span v-else>✕</span>
          </div>
          <!-- Main Menu -->
          <nav class="main-menu">
            <span v-for="cat in categories" :key="cat" :class="{ active: activeCategory === cat }"
              @click="setCategory(cat)">
              {{ cat }}
            </span>
          </nav>


        </div>
      </div>
    </header>

    <!-- Menu Overlay -->
    <MenuOverlay :open="menuOpen" @close="menuOpen = false" />

    <!-- Project Grid -->
    <section class="projects-grid">
      <article v-for="(p, i) in filteredProjects" :key="i" class="project-item" @click="goDetail(p.slug)">
        <div class="project-image" :style="{ backgroundImage: `url(${p.image})` }">
          <div class="hover-info">
            <h3>{{ p.name }}</h3>
            <span>{{ p.location }}</span>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import MenuOverlay from "@/components/user/MenuOverlay.vue";

// Images
import p1 from "@/assets/images/banner1.jpg";
import p2 from "@/assets/images/banner2.jpeg";
import p3 from "@/assets/images/banner3.jpeg";
import p4 from "@/assets/images/banner4.jpg";
import p5 from "@/assets/images/banner5.jpg";
import p6 from "@/assets/images/banner6.jpg";

const router = useRouter();
const route = useRoute();

// Header
const menuOpen = ref(false);
const isScrolled = ref(false);
const onScroll = () => (isScrolled.value = window.scrollY > 50);
onMounted(() => window.addEventListener("scroll", onScroll));
onUnmounted(() => window.removeEventListener("scroll", onScroll));

// Categories / Menu
const categories = ["ALL", "HOUSES.VILLAS", "CAFE.SHOP", "RESTAURANT.RESORT", "APARTMENTS.PENTHOUSE", "HOTEL.OFFICE"];
const activeCategory = ref("ALL");

const setCategory = cat => {
  activeCategory.value = cat;
};

// Projects
const projects = [
  { name: "Residential House", category: "HOUSES.VILLAS", location: "Ho Chi Minh City", slug: "home1", image: p1 },
  { name: "Studio Office", category: "HOTEL.OFFICE", location: "Da Nang", slug: "home2", image: p2 },
  { name: "Private Villa", category: "HOUSES.VILLAS", location: "Hanoi", slug: "home3", image: p3 },
  { name: "Art Gallery", category: "CAFE.SHOP", location: "Paris", slug: "home4", image: p4 },
  { name: "Urban Housing", category: "APARTMENTS.PENTHOUSE", location: "Tokyo", slug: "home5", image: p5 },
  { name: "Cultural Center", category: "RESTAURANT.RESORT", location: "Berlin", slug: "home6", image: p6 },
  { name: "Residential House", category: "HOUSES.VILLAS", location: "Ho Chi Minh City", slug: "home1", image: p1 },
  { name: "Studio Office", category: "HOTEL.OFFICE", location: "Da Nang", slug: "home2", image: p2 },
  { name: "Private Villa", category: "HOUSES.VILLAS", location: "Hanoi", slug: "home3", image: p3 },
  { name: "Art Gallery", category: "CAFE.SHOP", location: "Paris", slug: "home4", image: p4 },
  { name: "Urban Housing", category: "APARTMENTS.PENTHOUSE", location: "Tokyo", slug: "home5", image: p5 },
  { name: "Cultural Center", category: "RESTAURANT.RESORT", location: "Berlin", slug: "home6", image: p6 },
  { name: "Residential House", category: "HOUSES.VILLAS", location: "Ho Chi Minh City", slug: "home1", image: p1 },
  { name: "Studio Office", category: "HOTEL.OFFICE", location: "Da Nang", slug: "home2", image: p2 },
  { name: "Private Villa", category: "HOUSES.VILLAS", location: "Hanoi", slug: "home3", image: p3 },
  { name: "Art Gallery", category: "CAFE.SHOP", location: "Paris", slug: "home4", image: p4 },
  { name: "Urban Housing", category: "APARTMENTS.PENTHOUSE", location: "Tokyo", slug: "home5", image: p5 },
  { name: "Cultural Center", category: "RESTAURANT.RESORT", location: "Berlin", slug: "home6", image: p6 },
];

// Filter projects
const filteredProjects = computed(() => {
  if (activeCategory.value === "ALL") return projects;
  return projects.filter(p => p.category === activeCategory.value);
});

// Navigate to project detail
const goDetail = slug => router.push(`/project-detail/${slug}`);
</script>

<style scoped>
/* HEADER */
header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background: #fff;
  display: flex;
  align-items: center;
  transition: background 0.3s;
  z-index: 1000;
}

header.scrolled {
  background: #fff;
}

.container {
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.logo img {
  height: 38px;
}

/* MENU NHẤN LỌC */
.main-menu {
  display: flex;
  gap: 24px;
}

.main-menu span {
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 14px;
  color: #111;
  position: relative;
}

.main-menu span.active::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #111;
}

/* PROJECT GRID */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  width: 100%;
  margin-top: 80px;
}

.project-item {
  cursor: pointer;
  position: relative;
  background: #111;
}

.project-image {
  width: 100%;
  padding-top: 75%;
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
}

.project-item:hover .project-image {
  transform: scale(1.05);
}

.hover-info {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  text-align: center;
  transition: opacity 0.3s;
}

.project-item:hover .hover-info {
  opacity: 1;
}

.hover-info h3 {
  margin-bottom: 6px;
  font-size: 18px;
  font-weight: 600;
}

.hover-info span {
  font-size: 14px;
  opacity: 0.8;
}

/* RESPONSIVE */
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

.menu-toggle {
  font-size: 26px;
  cursor: pointer;
  color: #111;
}
</style>
