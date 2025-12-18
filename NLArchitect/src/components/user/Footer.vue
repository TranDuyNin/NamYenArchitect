<template>
  <footer class="footer-kconcept">
    <div class="footer-inner">
      <div class="footer-left">
        <p>&copy; 2026 NAM YEN Architect</p>
      </div>
      <div class="footer-right">
        <a href="#">Facebook</a>
        <a href="#">Zalo</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer này tĩnh nên không cần logic JS
</script>

<style scoped>
.footer-kconcept {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: transparent;
  color: white;
  padding: 15px 0;
  z-index: 1000;
  pointer-events: none;
}

.footer-inner {
  width: 100%;
  padding: 0 50px; /* Khoảng cách sát mép hơn */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-left p {
  margin: 0;
  font-size: 14px;
  letter-spacing: 1px;
  pointer-events: auto;
}

.footer-right {
  display: flex;
  gap: 20px;
}

.footer-right a {
  color: white;
  text-decoration: none;
  font-size: 14px;
  letter-spacing: 1px;
  opacity: 0.8;
  transition: opacity 0.3s;
  pointer-events: auto;
}

.footer-right a:hover {
  opacity: 1;
}
</style>
