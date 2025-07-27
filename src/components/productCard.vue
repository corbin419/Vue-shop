<template>
  <div class="row d-flex flex-column">
    <div class="row d-flex justify-content-between align-items-end my-2">
      <div class="col-12 col-sm-6 p-4 d-flex justify-content-center justify-content-sm-start">
        <div class="rounded-circle bg-dark social-btn"></div>
        <div class="d-flex flex-column ms-3 justify-content-between">
          <slot name="productName"><span class="fs-12">AAAA</span></slot>
          <slot name="productNumber"><span class="fs-12">#2486</span></slot>
        </div>
      </div>

      <div
        class="col-12 col-sm-6 d-flex justify-content-end fit-content justify-content-center justify-content-sm-end">
        <div v-if="props.editable" class="d-flex count-btnG">
          <button
            class="btn btn-outline-secondary btn-sm rounded-start"
            type="button"
            @click="minus">
            -
          </button>
          <output
            class="form-control border border-secondary border-start-0 border-end-0 text-center lh-1"
            >{{ props.product.count }}</output
          >
          <button class="btn btn-outline-secondary btn-sm rounded-end" type="button" @click="add">
            +
          </button>
        </div>

        <!-- 如果是只讀模式就只顯示數量 -->
        <div v-else class="fs-6 d-flex align-items-center">{{ props.product.count }} 件</div>

        <div class="d-flex flex-column ms-3 justify-content-end">
          <slot class="fs-12" name="productPrice">$8.7</slot>
        </div>
      </div>
    </div>
  </div>
  <hr />
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  modelValue: {
    type: Number,
    default: 0,
  },
  editable: {
    type: Boolean,
    default: true, // 預設是可編輯的（有顯示加減按鈕）
  },
});

const add = () => {
  props.product.count++;
};

const minus = () => {
  if (props.product.count > 0) {
    props.product.count--;
  }
};
</script>
