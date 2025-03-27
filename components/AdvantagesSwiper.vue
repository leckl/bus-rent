<template>
  <div class="mx-auto">
    <!-- Tablet -->
    <swiper :slides-per-view="1" :space-between="10" :loop="true" :autoplay='{ "delay": 4000, "disableOnInteraction": false }' :modules="modules" :loopAdditionalSlides="3" class="rounded-lg !hidden md:!block">
      <swiper-slide>
        <div class="!flex !justify-between">
          <AdvantagesList v-for="(chunk, index) in chunks.slice(0, 2)" :key="index" :advanteges="chunk" />
        </div>
      </swiper-slide>
      <swiper-slide class="!flex !items-center !justify-center">
        <div class="flex justify-center">
          <AdvantagesList :advanteges="chunks[2]" />
        </div>
      </swiper-slide>
    </swiper>

    <!-- Mobile -->
    <swiper :slides-per-view="1" :space-between="10" :loop="true" :autoplay='{ "delay": 4000, "disableOnInteraction": false }' :modules="modules" class="rounded-lg !block md:!hidden">
      <swiper-slide v-for="(chunk, index) in chunks" :key="index">
        <div class="flex justify-center">
          <AdvantagesList :advanteges="chunk" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const props = defineProps({
  advantages: {
    type: Array,
    required: true,
  },
});

const modules = [Autoplay];

const advantages = ref(props.advantages);

// Разбиваем массив на группы по 3 элемента
const chunks = computed(() => {
  const chunkSize = 3;
  return Array.from({ length: Math.ceil(advantages.value.length / chunkSize) }, (_, i) =>
    advantages.value.slice(i * chunkSize, i * chunkSize + chunkSize)
  );
});
</script>

<style scoped>
.swiper-wrapper {
  display: flex;
  /* align-items: center; */
}
</style>
