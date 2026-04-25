<script setup>
const goToPage = () => {
  window.location.href = "https://playvalorant.com/id-id/"
}
</script>

<template>
  <section class="home">
    <div class="hero-container">

      <!-- TEXT -->
      <div class="hero-text">
        <h1 class="title">Welcome to Elvora</h1>
        <p class="desc">
          We build modern, clean, and powerful digital solutions 
          for the future generation.
        </p>
        <button class="cta" @click="goToPage">Get Started</button>
      </div>

      <!-- IMAGE -->
      <div class="hero-image">
        <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="workspace1"
        />
        <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="workspace2"
        />
      </div>

    </div>
  </section>
</template>

<style scoped>
/* 🌌 BACKGROUND */
.home {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 60px;
  background: linear-gradient(270deg, #000000, #1a1a1a, #333333, #111111);
  background-size: 800% 800%;
  animation: gradientMove 12s ease infinite;
  color: white;
}

/* LAYOUT */
.hero-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 60px;
  flex-direction: column;
  text-align: center;
}

.hero-text {
  flex: 1;
}

/* ✨ TEXT ANIMATION */
.title {
  font-size: 56px;
  margin-bottom: 20px;
  opacity: 0;
  transform: translateY(40px);
  animation: fadeUp 1s ease forwards;
  animation-delay: 0.2s;
}

.desc {
  font-size: 18px;
  color: #cccccc;
  margin-bottom: 30px;
  max-width: 500px;
  opacity: 0;
  transform: translateY(40px);
  animation: fadeUp 1s ease forwards;
  animation-delay: 0.4s;
}

/* 🚀 BUTTON */
.cta {
  padding: 14px 35px;
  background: white;
  color: black;
  border: none;
  border-radius: 999px;
  font-weight: 600;
  transition: 0.3s;
}

.cta:hover {
  transform: translateY(-2px);
  opacity: 0.9;
}

/* 🖼️ IMAGE (NO ANIMATION) */
.hero-image {
  display: flex;
  justify-content: center;
  gap: 30px;
  width: 100%;
  margin-top: 20px;
}

.hero-image img {
  width: 45%;
  max-width: 450px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.6);
  transition: 0.3s ease;
}

.hero-image img:hover {
  transform: scale(1.05);
}

/* ✨ KEYFRAMES */
@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(99,102,241,0.6); }
  70% { box-shadow: 0 0 0 15px rgba(99,102,241,0); }
  100% { box-shadow: 0 0 0 0 rgba(99,102,241,0); }
}

@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>