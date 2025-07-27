<script setup>
import Progressbar from '@/components/progressbar.vue';
import OrderSummary from '@/components/orderSummary.vue';
import {useCartStore} from '@/stores/cart';
import {onMounted} from 'vue';
import {useRouter} from 'vue-router';

const cart = useCartStore();
const router = useRouter();

onMounted(() => {
  cart.loadFromLocalStorage();
});

function handleSubmit() {
  // 表單驗證成功後才會進來這裡
  if (cart.form.paymentMethod && cart.form.deliveryMethod) {
    router.push('/enterInfoPage');
  }
}
</script>

<template>
  <main
    class="container py-5 d-flex flex-column justify-content-between align-items-center fit-content">
    <div
      class="container-sm border rounded shadow bg-light p-4 w-75 d-flex flex-column justify-content-between h-100">
      <div class="row h5">購物車</div>

      <Progressbar
        :steps="['確認購物車', '付款與運送方式', '填寫資料', '完成訂單']"
        :currentStep="2" />

      <hr />

      <!-- 表單開始 -->
      <form @submit.prevent="handleSubmit">
        <!-- 付款方式 -->
        <div class="row p-2">
          <div class="row h5 fw-bold">付款方式</div>
          <div class="row px-5">
            <div
              class="form-check p-2"
              v-for="(method, i) in ['信用卡付款', '網路ATM', '超商代碼']"
              :key="'pay' + i">
              <input
                class="form-check-input border border-dark"
                type="radio"
                name="payment"
                :id="'payment' + i"
                :value="method"
                v-model="cart.form.paymentMethod"
                required />
              <label class="form-check-label w-100" :for="'payment' + i">{{ method }}</label>
            </div>
          </div>
        </div>

        <hr />

        <!-- 運送方式 -->
        <div class="row p-2">
          <div class="row h5 fw-bold">運送方式</div>
          <div class="row px-5">
            <div
              class="form-check p-2"
              v-for="(method, i) in ['黑貓宅配', '超商店到店']"
              :key="'delivery' + i">
              <input
                class="form-check-input border border-dark"
                type="radio"
                name="delivery"
                :id="'delivery' + i"
                :value="method"
                v-model="cart.form.deliveryMethod"
                required />
              <label class="form-check-label w-100" :for="'delivery' + i">{{ method }}</label>
            </div>
          </div>
        </div>

        <hr />

        <OrderSummary
          :totalCount="cart.totalCount"
          :subtotal="cart.subtotal"
          :deliveryFee="cart.deliveryFee"
          :totalFee="cart.totalFee" />

        <hr />

        <!-- 按鈕 -->
        <div class="row">
          <div class="col d-flex justify-content-start">
            <RouterLink class="btn btn-outline-secondary" to="/checkCartPage">上一頁</RouterLink>
          </div>
          <div class="col d-flex justify-content-end">
            <button type="submit" class="btn btn-outline-secondary">下一頁</button>
          </div>
        </div>
      </form>
      <!-- 表單結束 -->
    </div>
  </main>
</template>
