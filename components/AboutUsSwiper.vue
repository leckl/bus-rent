<template>
  <div class="max-w-3xl mx-auto mt-10">
    <swiper :slides-per-view="1" :space-between="10" class="">
      <swiper-slide v-for="(image, index) in props.images" :key="index">
        <img :src="image" loading="lazy" alt="Фото" class="w-full h-auto object-cover rounded-lg" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});
</script>


<style>
.swiper-wrapper {
  display: flex;
  align-items: center;
}
</style>