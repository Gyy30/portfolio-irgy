<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const menu = [
  { name: 'Home', link: '/home' },
  { name: 'About', link: '/about' },
  { name: 'Services', link: '/services' },
  { name: 'Contact', link: '/contact' }
]

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      
      <div class="logo">Elvora</div>

      <!-- HAMBURGER -->
      <div class="hamburger" @click="toggleMenu">
        ☰
      </div>

      <!-- SIDEBAR MENU -->
      <div class="sidebar" :class="{ active: isOpen }">
        
        <div class="close-btn" @click="toggleMenu">✕</div>

        <ul class="nav-menu">
          <li v-for="item in menu" :key="item.name">
            <a :href="item.link" @click="toggleMenu">
              {{ item.name }}
            </a>
          </li>

          <li>
            <router-link to="/login" class="nav-btn" @click="toggleMenu">
              Login
            </router-link>
          </li>
        </ul>
      </div>

      <!-- OVERLAY -->
      <div class="overlay" v-if="isOpen" @click="toggleMenu"></div>

      <!-- DESKTOP MENU -->
      <ul class="nav-menu desktop">
        <li v-for="item in menu" :key="item.name">
          <a :href="item.link">{{ item.name }}</a>
        </li>
      </ul>

      <router-link to="/login" class="nav-btn desktop">
        Login
      </router-link>

    </div>
  </nav>
</template>

<style scoped>
/* NAVBAR */
.navbar {
  width: 100%;
  background: linear-gradient(90deg, #000000, #4b4b4b);
  padding: 12px 0;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar-container {
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
  display: flex;
  align-items: center; /* 🔥 fix sejajar */
  justify-content: space-between;
}

.logo {
  font-size: 22px;
  font-weight: bold;
}

/* DESKTOP MENU */
.nav-menu.desktop {
  display: flex;
  align-items: center; /* 🔥 fix sejajar */
  gap: 24px;
  list-style: none;
  margin: 0;
}

.nav-menu.desktop a {
  display: inline-flex;
  align-items: center; /* 🔥 fix teks naik */
  color: white;
  text-decoration: none;
}

/* BUTTON */
.nav-btn {
  background: white;
  color: #3a3a3a;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
}

.nav-btn.desktop {
  display: inline-flex;
  align-items: center; /* 🔥 fix sejajar */
}

/* HAMBURGER */
.hamburger {
  display: none;
  font-size: 24px;
  cursor: pointer;
}

/* SIDEBAR */
.sidebar {
  position: fixed;
  top: 0;
  right: -260px;
  width: 260px;
  height: 100%;
  background: #111;
  padding: 20px 24px;
  transition: 0.3s ease;
  z-index: 1001;
  text-align: left;
}

.sidebar.active {
  right: 0;
}

.close-btn {
  font-size: 20px;
  text-align: right;
  cursor: pointer;
  margin-bottom: 20px;
}

/* SIDEBAR MENU */
.sidebar .nav-menu {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  padding: 0;
  margin-top: 20px;
}

.sidebar a {
  color: white;
  text-decoration: none;
}

.sidebar .nav-btn {
  background: white;
  color: black;
  padding: 10px 16px;
  border-radius: 6px;
  display: block;
  margin: 0;
}

/* OVERLAY */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 1000;
}

/* MOBILE */
@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  @media (max-width: 768px) {
  .nav-menu.desktop,
  .nav-btn.desktop {
    display: none !important;
  }
}
}
</style>