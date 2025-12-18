<template>
  <header :class="{ scrolled: isScrolled }">
    <div class="container">
      <div class="logo">
        <RouterLink to="/">
          <img src="@/assets/images/Logo.png" alt="Logo" />
        </RouterLink>
      </div>

      <div class="menu-toggle" @click="toggleMenu">☰</div>

      <nav :class="{ active: menuOpen }">
        <ul>
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/About">About</RouterLink>
          </li>
          <li class="dropdown">
            <RouterLink to="/Project" class="dropdown-toggle">
              Projects
            </RouterLink>
            <ul class="dropdown-menu">
              <li>
                <RouterLink to="/Project/architecture">Architecture</RouterLink>
              </li>
              <li>
                <RouterLink to="/Project/interior">Interior</RouterLink>
              </li>
              <li>
                <RouterLink to="/Project/landscape">Landscape</RouterLink>
              </li>
            </ul>
          </li>
          <li>
            <RouterLink to="/Service">Services</RouterLink>
          </li>
          <li>
            <RouterLink to="/Contact">Contact</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<style scoped>
/* Reset & container */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1200px;
  width: 100%;
  padding: 0 24px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Header default (transparent) */
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 0;
  background-color: transparent;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  z-index: 1000;
}

/* Header when scrolled */
header.scrolled {
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(255, 254, 254, 0.2);
  border-bottom: 1px solid #dddcdc;
}

.logo img {
  height: 40px;
  transition: filter 0.3s ease;
}

/* set màu logo khi scroll */
/* header.scrolled .logo img {
  filter: invert(1);
} */

/* Navigation styles */
nav ul {
  list-style: none;
  display: flex;
  gap: 30px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  padding: 4px 0;
  transition: color 0.3s ease;
}

nav ul li a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 1px;
  background-color: #a8a840;
  transition: width 0.3s ease;
}

nav ul li a:hover {
  color: #a8a840;
}

nav ul li a:hover::after {
  width: 100%;
}


header.scrolled nav ul li a {
  color: #000000;
}

header.scrolled nav ul li a:hover {
  color: #a1a106;
}

/* Toggle button (mobile) */
.menu-toggle {
  display: none;
  font-size: 28px;
  color: white;
  cursor: pointer;
}

/* Responsive */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  nav {
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: #333;
    display: none;
    padding: 20px 0;
  }

  nav.active {
    display: block;
  }

  nav ul {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
}
.dropdown {
  position: relative;
  list-style: none;
}

.dropdown-toggle {
  cursor: pointer;
  text-decoration: none;
}

.dropdown-menu {
  display: none;
  position: absolute;
  list-style: none;
  padding: 0;
  margin: 0;
  min-width: 150px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.dropdown-menu li {
  padding: 10px;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

</style>
