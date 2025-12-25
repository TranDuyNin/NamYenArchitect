<template>
  <header :class="{ scrolled: isScrolled }">
    <div class="container">
      <div class="left">
        <RouterLink to="/" class="logo">
          <img src="@/assets/images/Logo.png" alt="Logo" />
        </RouterLink>

        <!-- Category Bar: chỉ hiện khi ở /project -->
        <nav v-if="showCategoryBar" class="category-bar">
          <span
            v-for="category in categories"
            :key="category"
            :class="{ active: activeCategory === category }"
            @click="$emit('update:activeCategory', category)"
          >
            {{ category }}
          </span>
        </nav>

        <div class="menu-toggle" @click="menuOpen = !menuOpen">
          <span v-if="!menuOpen">☰</span>
          <span v-else>✕</span>
        </div>
      </div>
    </div>
  </header>

  <MenuOverlay :open="menuOpen" @close="menuOpen = false" />
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from "vue";
import { useRoute } from "vue-router";
import MenuOverlay from "@/components/user/MenuOverlay.vue";

const menuOpen = ref(false);
const isScrolled = ref(false);
const route = useRoute();

const onScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => window.addEventListener("scroll", onScroll));
onUnmounted(() => window.removeEventListener("scroll", onScroll));

const categories = [
  "ALL",
  "HOUSES.VILLAS",
  "CAFE.SHOP",
  "RESTAURANT.RESORT",
  "APARTMENTS.PENTHOUSE",
  "HOTEL.OFFICE",
];

const activeCategory = ref("ALL");

// Hiển thị thanh category chỉ khi url là /project
const showCategoryBar = computed(() => route.path === "/project");

defineExpose({ activeCategory }); // để truyền ra ngoài nếu cần
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background: transparent;
  transition: background 0.3s ease;
  z-index: 1000;
}

header.scrolled {
  background: #fff;
}

.container {
  max-width: 1200px;
  height: 100%;
  margin: auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
}

.left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.menu-toggle {
  font-size: 26px;
  cursor: pointer;
  color: #111;
}

.logo img {
  height: 38px;
}

/* Category Bar */
.category-bar {
  display: flex;
  gap: 24px;
  margin-left: 40px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  color: #111;
}

.category-bar span {
  cursor: pointer;
  position: relative;
  padding-bottom: 4px;
}

.category-bar span.active {
  font-weight: 700;
}

.category-bar span.active::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #111;
}
</style>
