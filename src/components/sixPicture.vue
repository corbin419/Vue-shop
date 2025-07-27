<script setup>
import AL66 from '../assets/kb/AL66.jpg';
import AL65 from '../assets/kb/AL65.jpg';
import RT68 from '../assets/kb/RT68.jpg';
</script>
<template>
  <div class="container d-flex bg-gray my-5">
    <div class="row">
      <div class="col-6">
        <div class="row">
          <div class="col-6 p-1">
            <img class="w-100" :src="AL66" alt="AL66" />
          </div>
          <div class="col-6 p-1">
            <img class="w-100" :src="AL66" alt="AL66" />
          </div>
        </div>
        <div class="row">
          <div class="col p-1">
            <img class="w-100" :src="RT68" alt="RT68" />
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="row">
          <div class="col p-1">
            <img class="w-100" :src="RT68" alt="RT68" />
          </div>
        </div>
        <div class="row">
          <div class="col-6 p-1">
            <img class="w-100" :src="AL65" alt="AL65" />
          </div>
          <div class="col-6 p-1">
            <img class="w-100" :src="AL65" alt="AL65" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
