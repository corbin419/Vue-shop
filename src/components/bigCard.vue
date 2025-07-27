<script setup>
import AL66 from '../assets/kb/AL66.jpg';
</script>

<template>
  <div class="container my-5 bg-light p-5 p-sm-2">
    <div class="row g-4 align-items-stretch flex-column flex-md-row">
      <div class="col-md-6">
        <img
          :src="AL66"
          alt="Product"
          class="img-fluid w-100 h-100 object-fit-cover rounded min-height-300" />
      </div>

      <!-- 商品資訊 -->
      <div class="col-md-6 d-flex flex-column justify-content-between p-4">
        <div class="row w-80">
          <div class="row mt-5 fit-content">
            <small class="text-uppercase text-muted fit-content"> Brand Name </small>
            <h2 class="fw-bold fit-content">
              YUNZII AL66 Knob CNC Aluminum Wireless Mechanical Keyboard
            </h2>
            <div class="mb-2">
              <span class="text-warning">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
              <span class="ms-2 text-muted">4 Reviews</span>
              <span class="ms-3">
                <i class="bi bi-facebook"></i>
                <i class="bi bi-twitter ms-2"></i>
                <i class="bi bi-chat-left ms-2"></i>
              </span>
            </div>
          </div>

          <p class="text-muted">
            Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia
            microdosing tilde DIY. XOXO fam indxgo juiceramps... Fam locavore kickstarter
            distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO
            fam indxgo juiceramps... Fam locavore kickstarter distillery. Mixtape chillwave tumeric
            sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps...
          </p>

          <div class="d-flex align-items-center flex-wrap gap-2 mb-3">
            <span>Color</span>
            <button class="btn btn-outline-dark btn-sm rounded-circle circle-24"></button>
            <button class="btn btn-dark btn-sm rounded-circle circle-24"></button>
            <button class="btn btn-sm btn-pink rounded-circle circle-24"></button>

            <span class="ms-3">Size</span>
            <select class="form-select form-select-sm w-auto">
              <option>white</option>
              <option>black</option>
              <option>pink</option>
            </select>
          </div>

          <h4 class="fw-bold mb-3">$99.99 USD</h4>
        </div>

        <div class="d-flex align-items-center justify-content-end flex-wrap gap-2 px-5 h-20">
          <button class="btn btn-primary">Button</button>
          <button class="btn btn-outline-danger rounded-circle">
            <i class="bi bi-heart"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
