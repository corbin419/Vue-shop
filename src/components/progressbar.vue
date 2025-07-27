<!-- components/StepProgress.vue -->
<template>
  <div class="d-flex justify-content-between align-items-center w-100 progress-container">
    <template v-for="(step, index) in steps" :key="index">
      <!-- Step 圓圈 + Label -->
      <div class="d-flex flex-column align-items-center text-center flex-shrink-1 steps">
        <div
          class="step-circle"
          :class="{
            'bg-success text-white': index < currentStep,
            'border border-dark': index >= currentStep
          }">
          {{ index + 1 }}
        </div>
        <div class="step-label mt-2 text-nowrap">{{ step }}</div>
      </div>

      <!-- Bar Between Steps -->
      <div
        v-if="index < steps.length - 1"
        class="progress mx-1 flex-shrink-1 mb-4">
        <div
          class="progress-bar bg-success"
          :style="{ width: index < currentStep - 1 ? '100%' : '0%' }">
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
defineProps({
  steps: {
    type: Array,
    required: true,
  },
  currentStep: {
    type: Number,
    default: 1,
  },
});
</script>
