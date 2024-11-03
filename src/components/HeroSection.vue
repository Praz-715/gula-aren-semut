<!-- src/components/HeroSection.vue -->
<template>
    <section id="hero" class="hero section">
      <div class="hero-bg">
        <img src="/assets/img/hero-bg-light.webp" alt="">
      </div>
      <div class="container text-center">
        <div class="d-flex flex-column justify-content-center align-items-center">
          <h1>Coconut Palm Sugar <span>Crystals</span></h1>
          <p>The finest natural quality in every grain of palm sugar</p>
          <div class="d-flex">
            <a href="#about" class="btn-get-started">Get Started</a>
            <!-- <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" class="glightbox btn-watch-video">
              <i class="bi bi-play-circle"></i><span>Watch Video</span>
            </a> -->
          </div>
          <img src="/assets/img/hero-services-img.webp" class="img-fluid hero-img" alt="">
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "HeroSection",
  };
  </script>
  
  <style scoped>
  /* Scoped CSS untuk HeroSection */
  </style>
  