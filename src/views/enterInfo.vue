<script setup>
import Progressbar from '@/components/progressbar.vue';
import OrderSummary from '@/components/orderSummary.vue';
import {useCartStore} from '@/stores/cart';
import {onMounted} from 'vue';
import {useRouter} from 'vue-router';

const cart = useCartStore();
const router = useRouter();

onMounted(() => {
  cart.loadFromLocalStorage(); // 從 localStorage 抓資料（商品 + 表單）
});

function handleSubmit(event) {
  // 表單驗證通過才會觸發這裡
  const form = event.target;
  if (form.checkValidity()) {
    router.push('/finishPage');
  } else {
    form.reportValidity(); // 顯示原生錯誤提示
  }
}
</script>

<template>
  <main class="container py-5 d-flex flex-column justify-content-center fit-content">
    <div
      class="container-sm rounded shadow bg-light p-4 w-75 d-flex flex-column justify-content-between h-100">
      <div class="row h4">購物車</div>

      <!-- 進度條 -->
      <Progressbar
        :steps="['確認購物車', '付款與運送方式', '填寫資料', '完成訂單']"
        :currentStep="3" />

      <!-- 表格區塊 -->
      <form class="form-section mt-3" @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for="name" class="form-label">姓名</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="王小明"
            maxlength="50"
            v-model="cart.form.name"
            required />
        </div>

        <div class="mb-3">
          <label for="phone" class="form-label">電話</label>
          <input
            type="tel"
            class="form-control"
            id="phone"
            placeholder="0912345678"
            v-model="cart.form.phone"
            required />
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="abc123@gmail.com"
            v-model="cart.form.email"
            required />
        </div>

        <div class="mb-3 row">
          <div class="col-md-6">
            <label for="city" class="form-label">城市</label>
            <input type="text" class="form-control" id="city" v-model="cart.form.city" required />
          </div>
          <div class="col-md-6">
            <label for="zip" class="form-label">郵遞區號</label>
            <input type="text" class="form-control" id="zip" v-model="cart.form.zip" required />
          </div>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">地址</label>
          <input
            type="text"
            class="form-control"
            id="address"
            v-model="cart.form.address"
            required />
        </div>

        <!-- 訂單摘要 -->
        <OrderSummary
          :totalCount="cart.totalCount"
          :subtotal="cart.subtotal"
          :deliveryFee="cart.deliveryFee"
          :totalFee="cart.totalFee" />

        <hr class="hr" />

        <!-- 按鈕 -->
        <div class="row">
          <div class="col d-flex justify-content-start">
            <RouterLink class="btn btn-outline-secondary" to="/payPage">上一頁</RouterLink>
          </div>
          <div class="col d-flex justify-content-end">
            <button type="submit" class="btn btn-outline-secondary">前往付款</button>
          </div>
        </div>
      </form>
    </div>
  </main>
</template>
