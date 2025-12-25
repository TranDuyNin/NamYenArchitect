<template>
  <div class="kc-menu" :class="{ open }">
    <!-- LEFT -->
    <div class="left">
  <ul class="menu">
    <!-- HOME -->
    <li>
      <RouterLink to="/" @click="$emit('close')">
        HOME
      </RouterLink>
    </li>

    <!-- PROJECT -->
    <li class="project-item">
      <!-- chữ PROJECT đi trang tổng -->
      <RouterLink
        to="/Project"
        class="project-link"
        @click="$emit('close')"
      >
        PROJECT
      </RouterLink>

      <!-- dấu + mở submenu -->
      <span
        class="toggle"
        @click.stop="toggle('project')"
      >
        +
      </span>
    </li>

    <!-- SUBMENU -->
    <ul v-if="active === 'project'" class="submenu">
      <li>
        <RouterLink
          to="/Project/architecture"
          @click="$emit('close')"
        >
          Architecture
        </RouterLink>
      </li>

      <li>
        <RouterLink
          to="/Project/interior"
          @click="$emit('close')"
        >
          Interior
        </RouterLink>
      </li>

      <li>
        <RouterLink
          to="/Project/landscape"
          @click="$emit('close')"
        >
          Landscape
        </RouterLink>
      </li>
    </ul>

    <!-- SERVICE -->
    <li>
      <RouterLink to="/Service" @click="$emit('close')">
        SERVICE
      </RouterLink>
    </li>

    <!-- CONTACT -->
    <li>
      <RouterLink to="/Contact" @click="$emit('close')">
        CONTACT
      </RouterLink>
    </li>
  </ul>
</div>

    <!-- RIGHT -->
    <div class="right">
      <div class="overlay"></div>
      <!-- sau này gắn grid project -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({ open: Boolean })

const active = ref(null)
const toggle = (key) => {
  active.value = active.value === key ? null : key
}
</script>

<style scoped>
/* ================== MENU WRAPPER ================== */
.kc-menu {
  position: fixed;
  top: 80px; /* đúng chiều cao header */
  left: 0;
  width: 100%;
  height: calc(100vh - 80px);

  display: flex;
  background: transparent;

  transform: translateX(-100%);
  transition: transform 0.7s cubic-bezier(0.77, 0, 0.175, 1);

  z-index: 900;
}

.kc-menu.open {
  transform: translateX(0);
}

/* ================== LEFT MENU ================== */
.left {
  width: 15%;
  background: #ffffff;
  padding: 60px 48px;
  display: flex;
  align-items: flex-start;
  padding: 5% 1%; /* chỉ padding trên/dưới, tránh lệch ngang */

}

/* ================== MENU LIST ================== */
.menu {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.menu > li {
  margin-bottom: 32px;
  
}

/* LINK CHÍNH */
.menu a {
  font-size: 13px;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 400;
  color: #111;
  text-decoration: none;
  transition: opacity 0.3s ease;
  font-weight: bold;

}

.menu a:hover {
  opacity: 0.6;
}

/* ================== PROJECT ITEM ================== */
.project-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* dấu + */
.toggle {
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
  user-select: none;
  transition: transform 0.4s ease, opacity 0.3s ease;
}

.toggle:hover {
  opacity: 0.6;
}

/* xoay thành X */
.toggle.open {
  transform: rotate(45deg);
}

/* ================== SUBMENU ================== */
.submenu {
  list-style: none;
  margin: 10px 0 32px 18px;
  padding: 0;

  animation: fadeSlide 0.4s ease forwards;
}

.submenu li {
  margin-bottom: 16px;
}

.submenu a {
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: none;
  color: #555;
}

/* ================== RIGHT PANEL ================== */
.right {
  flex: 1;
  position: relative;
  background: url('@/assets/images/menu-bg.jpg') center / cover no-repeat;
  width: 85%;
}

/* overlay mờ */
.right .overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
}

/* ================== ANIMATION ================== */
@keyframes fadeSlide {
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>
