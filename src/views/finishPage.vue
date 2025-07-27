<script setup>
import Progressbar from '@/components/progressbar.vue';
import OrderSummary from '@/components/orderSummary.vue';
import {useCartStore} from '@/stores/cart';
import {onMounted} from 'vue';
import ProductCard from '@/components/productCard.vue';

const cart = useCartStore();

onMounted(() => {
  cart.loadFromLocalStorage();
});

//回首頁&清storage
function clearDataAndGoHome(event) {
  localStorage.removeItem('orderSummary'); // 清除 localStorage
  cart.reset(); // 重置 Pinia store
}
</script>

<template>
  <main class="container py-5 d-flex flex-column justify-content-center fit-content">
    <div
      class="container-sm rounded shadow bg-light p-5 w-75 d-flex flex-column justify-content-between h-100">
      <div class="row h4 fw-bold">購物車</div>
      <!-- 進度條 -->
      <Progressbar
        :steps="['確認購物車', '付款與運送方式', '填寫資料', '完成訂單']"
        :currentStep="4" />
      <hr />
      <h3 class="text-center fw-bold mb-5">訂單成立</h3>
      <!-- 商品列表 -->
      <!-- 寄送資料 -->
      <div class="row gap-2 mx-auto w-100 mt-4">
        <h5 class="fw-bold">寄送資料</h5>
        <span>姓名：{{ cart.form.name }}</span>
        <span>電話：{{ cart.form.phone }}</span>
        <span>Email：{{ cart.form.email }}</span>
        <span>地址：{{ cart.form.city }} {{ cart.form.zip }} {{ cart.form.address }}</span>
        <span>付款方式：{{ cart.form.paymentMethod }}</span>
        <span>運送方式：{{ cart.form.deliveryMethod }}</span>
      </div>
      <!-- 金額小計 -->
      <OrderSummary
        :totalCount="cart.totalCount"
        :subtotal="cart.subtotal"
        :deliveryFee="cart.deliveryFee"
        :totalFee="cart.totalFee" />
      <hr class="hr" />
      <!-- 返回首頁按鈕 -->
      <div class="row">
        <div class="col d-flex justify-content-end">
          <RouterLink class="btn btn-outline-primary" to="/" @click="clearDataAndGoHome"
            >返回首頁</RouterLink
          >
        </div>
      </div>
    </div>
  </main>
</template>
