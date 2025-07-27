import {ref, computed, watch} from 'vue';
import {defineStore} from 'pinia';

export const useCartStore = defineStore('cart', () => {
  const products = ref([
    {
      id: 1,
      name: 'AL66',
      number: '#7777',
      price: 20,
      count: 0,
    },
    {
      id: 2,
      name: 'AL65',
      number: '#8888',
      price: 30,
      count: 0,
    },
    {
      id: 3,
      name: 'RT68',
      number: '#9999',
      price: 40,
      count: 0,
    },
  ]);

  //總數
  const totalCount = computed(() => products.value.reduce((sum, p) => sum + p.count, 0));

  //小計
  const subtotal = computed(() => products.value.reduce((sum, p) => sum + p.count * p.price, 0));

  //運費
  const deliveryFee = computed(() => (totalCount.value > 0 ? 60 : 0));

  //總計
  const totalFee = computed(() => subtotal.value + deliveryFee.value);

  //localstorage
  const loadFromLocalStorage = () => {
    const data = localStorage.getItem('orderSummary');
    if (data) {
      try {
        const parsed = JSON.parse(data);
        products.value.forEach((item, index) => {
          item.count = parsed.products?.[index]?.count || 0;
        });
      } catch (e) {
        console.error('抓不到資料', e);
      }
    }
  };

  // 表單資料
  const form = ref({
    name: '',
    phone: '',
    email: '',
    city: '',
    zip: '',
    address: '',
    paymentMethod: '',
    deliveryMethod: '',
  });

  //清資料
  function reset() {
    products.value.forEach((p) => (p.count = 0));
    form.value = {
      name: '',
      phone: '',
      email: '',
      city: '',
      zip: '',
      address: '',
      paymentMethod: '',
      deliveryMethod: '',
    };
  }

  //資料有變化就更新
  watch(
    [products, subtotal, totalFee, totalCount, form],
    () => {
      const summary = {
        totalCount: totalCount.value,
        subtotal: subtotal.value,
        deliveryFee: deliveryFee.value,
        totalFee: totalFee.value,
        products: products.value.map((p) => ({id: p.id, count: p.count})),
        form: form.value,
      };
      localStorage.setItem('orderSummary', JSON.stringify(summary));
    },
    {deep: true} // 深層監聽 => 針對槽狀結構的資料 或是 陣列物件 進行變化追蹤
  );

  //回傳資料和function給其他人用
  return {
    products,
    deliveryFee,
    totalCount,
    subtotal,
    totalFee,
    loadFromLocalStorage,
    form,
    reset,
  };
});
