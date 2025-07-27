<script setup>
import ALseries from '../assets/kb/AL-s.jpg';
import YXseries from '../assets/kb/YX-series.jpg';
import RTseries from '../assets/kb/RT-series.jpg';
</script>
<template>
  <div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"></button>
    </div>
    <!-- 照片倫波 -->
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img :src="ALseries" class="d-block w-100" alt="Al-series" />
      </div>
      <div class="carousel-item">
        <img :src="YXseries" class="d-block w-100" alt="YZ-series" />
      </div>
      <div class="carousel-item">
        <img :src="RTseries" class="d-block w-100" alt="RT-series" />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
