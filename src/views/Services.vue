<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / 20) * -1;
      const rotateY = (x - centerX) / 20;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  });
});
</script>

<template>
<section class="services fade-in">
  <div class="section-title fade-up">
    <h2>Our Services</h2>
    <p>What Can We Help You With Today?</p>
  </div>

  <div class="services-grid">
    <div class="card fade-up delay-1">
      <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952" />
      <div class="card-body">
        <h3>Residential Services</h3>
        <p>Modern home solutions with clean execution and reliability.</p>
        <button>Learn More</button>
      </div>
    </div>

    <div class="card fade-up delay-2">
      <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e" />
      <div class="card-body">
        <h3>Commercial Services</h3>
        <p>Scalable systems built for performance and long-term growth.</p>
        <button>Learn More</button>
      </div>
    </div>

    <div class="card fade-up delay-3">
      <img src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0" />
      <div class="card-body">
        <h3>Maintenance & Repair</h3>
        <p>Reliable support that keeps your systems running smoothly.</p>
        <button>Learn More</button>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>
/* 🌌 BACKGROUND */
.services {
  padding: 120px 80px;
  background: linear-gradient(270deg, #000000, #1a1a1a, #333333, #111111);
  background-size: 800% 800%;
  animation: gradientMove 12s ease infinite;
  color: white;
}

/* TITLE */
.section-title {
  text-align: center;
  margin-bottom: 70px;
}

.section-title h2 {
  font-size: 42px;
  font-weight: 600;
  margin-bottom: 12px;
}

.section-title p {
  color: #9ca3af;
  font-size: 17px;
}

/* GRID */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
}

/* CARD */
.card {
  background: #4d5055;
  border-radius: 18px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.35s ease;
  box-shadow: 0 10px 25px rgba(0,0,0,0.4);
  transform-style: preserve-3d;
}

/* IMAGE */
.card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.card:hover img {
  transform: scale(1.05);
}

/* BODY */
.card-body {
  padding: 30px;
}

.card-body h3 {
  font-size: 20px;
  margin-bottom: 12px;
}

.card-body p {
  color: #cbd5e1;
  margin-bottom: 20px;
  font-size: 15px;
}

/* BUTTON */
.card-body button {
  padding: 10px 22px;
  border: none;
  border-radius: 8px;
  background: #3b82f6;
  color: white;
  cursor: pointer;
  transition: 0.3s ease;
}

.card-body button:hover {
  background: #2563eb;
}

/* ✨ FADE */
.fade-in {
  animation: fadeIn 0.8s ease forwards;
}

.fade-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeUp 0.8s ease forwards;
}

.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.4s; }
.delay-3 { animation-delay: 0.6s; }

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 🌊 GRADIENT */
@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* 📱 RESPONSIVE FIX (INI YANG PENTING) */
@media (max-width: 992px) {
  .services {
    padding: 80px 40px;
  }

  .section-title h2 {
    font-size: 34px;
  }
}

@media (max-width: 768px) {
  .services {
    padding: 60px 20px;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .section-title {
    margin-bottom: 40px;
  }

  .section-title h2 {
    font-size: 28px;
  }

  .section-title p {
    font-size: 15px;
  }

  .card-body {
    padding: 20px;
  }

  .card img {
    height: 180px;
  }
}

@media (max-width: 480px) {
  .section-title h2 {
    font-size: 24px;
  }

  .card-body h3 {
    font-size: 18px;
  }

  .card-body p {
    font-size: 14px;
  }
}
</style>