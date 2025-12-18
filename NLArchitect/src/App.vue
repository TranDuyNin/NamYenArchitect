<template>
  <div>
    <!-- Loading screen -->
    <div v-if="isLoading" class="loading-screen">
      <img src="./assets/images/Logo.png" alt="Logo" class="loading-logo" />
    </div>

    <!-- Nội dung trang -->
    <Header v-show="!isLoading" />
    <transition name="fade" mode="out-in">
      <router-view v-show="!isLoading" />
    </transition>
    <Footer v-show="!isLoading" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Header from "./components/user/Header.vue";
import Footer from "./components/user/Footer.vue";

const isLoading = ref(true);
const router = useRouter();

// Hiện logo khi load trang lần đầu
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 3000); // 2s
});

// Hiện logo khi đổi trang
router.beforeEach((to, from, next) => {
  isLoading.value = true;
  setTimeout(() => {
    next();
    isLoading.value = false;
  }, 1000);
});
</script>

<style>
* {
  margin: 0;
  box-sizing: border-box;
}
html,
body,
#app {
  width: 100%;
  overflow-x: hidden;
}
body {
  font-family: system-ui, sans-serif;
}
ul,
li,
h1,
h2,
h3,
p {
  margin: 0;
  padding: 0;
}
/* Loading screen */
.loading-screen {
  position: fixed;
  inset: 0;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
}

.loading-logo {
  width: 180px;
  animation: logoFade 1.5s ease;
}

@keyframes logoFade {
  0% { opacity: 0; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(1.2); }
}

/* Fade effect cho trang */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>