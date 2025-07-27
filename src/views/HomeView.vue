<script setup>
import carousel from '@/components/carousel.vue';
import threeCard from '@/components/threeCard.vue';
import SixPicture from '@/components/sixPicture.vue';
import fourCard from '@/components/fourCard.vue';
import ThreeBanner from '@/components/threeBanner.vue';
import bigCard from '@/components/bigCard.vue';
import eightCard from '@/components/eightCard.vue';
</script>
<template>
  <!-- 輪播 -->
  <carousel />

  <!-- 三張卡片 -->
  <threeCard />

  <!-- 六張照片 -->
  <SixPicture />

  <div class="container w-100 text-center">
    <h2 class="fw-bold">Pricing</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eius commodi reiciendis.
    </p>
  </div>
  <!-- table -->
  <table class="container table table-bordered text-center align-middle bg-secondary text-white">
    <thead class="table-dark">
      <tr>
        <th>名稱</th>
        <th>大小</th>
        <th>價格</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>YUNZII AL66</td>
        <td>65%</td>
        <td>$99.99 USD</td>
      </tr>
      <tr>
        <td>YUNZII YZ75 Pro</td>
        <td>75%</td>
        <td>$86.99 USD</td>
      </tr>
      <tr>
        <td>YUNZII RT68</td>
        <td>65%</td>
        <td>$84.99 USD</td>
      </tr>
      <tr>
        <td>YUNZII AL65</td>
        <td>65%</td>
        <td>$129.99 USD</td>
      </tr>
    </tbody>
  </table>

  <!-- 四張卡片 -->
  <fourCard />

  <!-- 三個橫幅 -->
  <ThreeBanner />

  <!-- 一張大卡片 -->
  <bigCard />

  <!-- 八張卡片 -->
  <eightCard />

  <!-- 地圖 -->
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14559.087560613183!2d120.6537721!3d24.1797315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34691623a7988aa7%3A0x73dd146c41c3035a!2z6YCi55Sy5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1749113552878!5m2!1szh-TW!2stw"
    width="100%"
    height="450"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"></iframe>
</template>
