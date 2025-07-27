<!-- src/components/OrderSummary.vue -->
<script setup>
import {defineProps} from 'vue';

const props = defineProps({
  totalCount: {
    type: Number,
    default: 0,
  },
  subtotal: {
    type: Number,
    default: 0,
  },
  deliveryFee: {
    type: Number,
    default: 0,
  },
  totalFee: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <div class="row d-flex justify-content-end fs-12">
    <div class="d-flex flex-column col-12 col-md-4 p-3 text-start gap-1 fw-bold">
      <div class="quantity">
        數量:<span id="counts" class="mx-2">{{ totalCount }}</span>
      </div>
      <div class="subtotal">
        小計:<span id="total-2" class="mx-2">{{ subtotal }}</span>
      </div>
      <div class="delivery-fee">
        運費:<span id="d-cost" class="mx-2">{{ deliveryFee }}</span>
      </div>
      <div class="total-fee">
        總計:<span id="total" class="mx-2">{{ totalFee }}</span>
      </div>
    </div>
  </div>
</template>
