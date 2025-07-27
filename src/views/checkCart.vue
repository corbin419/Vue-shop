<script setup>
import OrderSummary from '@/components/orderSummary.vue';
import ProductCard from '@/components/productCard.vue';
import Progressbar from '@/components/progressbar.vue';
import {useCartStore} from '@/stores/cart';
import {onMounted} from 'vue';

const cart = useCartStore();

onMounted(() => {
  cart.loadFromLocalStorage();
});

const handleCountChange = (index, newCount) => {
  cart.products[index].count = newCount;
};
</script>

<template>
  <body>
    <main class="container py-5 d-flex flex-column justify-content-center fit-content">
      <div
        class="container-sm rounded shadow bg-light p-4 w-75 d-flex flex-column justify-content-between h-100">
        <div class="row h4">購物車</div>
        <!-- 進度條 -->
        <Progressbar
          :steps="['確認購物車', '付款與運送方式', '填寫資料', '完成訂單']"
          :currentStep="1" />
        <hr class="hr" />
        <div class="row h4">訂單明細</div>
        <!--  選購商品項目  -->
        <ProductCard
          v-for="(product, index) in cart.products"
          :key="product.id"
          :modelValue="product.count"
          :product="product"
          @update:modelValue="(newCount) => handleCountChange(index, newCount)">
          <template #productName
            ><span class="fs-12">{{ product.name }}</span></template
          >
          <template #productNumber
            ><span class="fs-12">{{ product.number }}</span></template
          >
          <template #productPrice
            ><span class="fs-12">${{ product.price }}</span></template
          >
        </ProductCard>
        <OrderSummary
          :totalCount="cart.totalCount"
          :subtotal="cart.subtotal"
          :deliveryFee="cart.deliveryFee"
          :totalFee="cart.totalFee" />
        <hr />
        <!-- 按鈕區塊 -->
        <div class="row">
          <div class="col d-flex justify-content-start">
            <RouterLink class="btn btn-outline-secondary" to="/"> 繼續選購 </RouterLink>
          </div>
          <div class="col d-flex justify-content-end">
            <RouterLink class="btn btn-outline-secondary" to="/payPage"> 下一頁 </RouterLink>
          </div>
        </div>
      </div>
    </main>
  </body>
</template>
