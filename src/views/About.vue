<template>
  <div class="page">

    <!-- HERO -->
    <section class="section text-center">
      <div class="container fade-up">
        <h1 class="fw-bold display-6 display-md-5 mb-3 text-white">
          Designed for Simplicity.
        </h1>
        <p class="text-light fs-6 fs-md-5 mx-auto px-2" style="max-width: 600px;">
          We build products that feel effortless, elegant, and powerful —
          just like the experience you expect.
        </p>
      </div>
    </section>

    <!-- PHILOSOPHY -->
    <section class="section">
      <div class="container">
        <div class="row align-items-center g-4 g-md-5 fade-up delay-1">
          
          <div class="col-12 col-md-6">
            <img
              src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
              class="img-fluid rounded-4 shadow-sm w-100"
              style="object-fit: cover; max-height: 300px;"
              alt="Design"
            />
          </div>

          <div class="col-12 col-md-6 text-center text-md-start text-white">
            <h2 class="fw-semibold mb-3">Our Philosophy</h2>
            <p class="text-light">
              We believe technology should be invisible.
              Our mission is to create digital experiences that are intuitive,
              fast, and beautifully simple.
            </p>
            <p class="text-light">
              Every detail matters — from typography to performance.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- FEATURES -->
    <section class="section">
      <div class="container">
        <div class="row text-center g-3 g-md-4 fade-up delay-2">

          <div class="col-12 col-md-4 text-white">
            <div class="p-3 p-md-4">
              <h5 class="fw-bold mb-2">Minimal Design</h5>
              <p class="text-light mb-0">
                Clean layouts with focus on what truly matters.
              </p>
            </div>
          </div>

          <div class="col-12 col-md-4 text-white">
            <div class="p-3 p-md-4">
              <h5 class="fw-bold mb-2">High Performance</h5>
              <p class="text-light mb-0">
                Optimized for speed, responsiveness, and scalability.
              </p>
            </div>
          </div>

          <div class="col-12 col-md-4 text-white">
            <div class="p-3 p-md-4">
              <h5 class="fw-bold mb-2">Human Experience</h5>
              <p class="text-light mb-0">
                Built with empathy and real user needs in mind.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section text-center">
      <div class="container fade-up delay-3">
        <h2 class="fw-bold mb-3 text-white">Built for the Future</h2>
        <p class="text-light mb-4 px-2">
          We don’t just build websites — we build experiences.
        </p>
        <a
          href="#"
          class="btn btn-light px-4 py-2 rounded-pill"
        >
          Learn More
        </a>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* 🌌 BACKGROUND SAMA KAYAK HOME */
.page {
  background: linear-gradient(270deg, #000000, #1a1a1a, #333333, #111111);
  background-size: 800% 800%;
  animation: gradientMove 12s ease infinite;
  min-height: 100vh;
}

/* SECTION SPACING */
.section {
  padding: 60px 0;
}

/* ✨ ANIMATION */
.fade-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeUp 0.8s ease forwards;
}

.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.4s; }
.delay-3 { animation-delay: 0.6s; }

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 🌊 GRADIENT ANIMATION */
@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>