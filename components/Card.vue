<template>
  <div class="w-3xs h-36 bg-white card-shadow flex justify-center items-center">
    <img class="absolute" loading="lazy" :src="image" alt="Безопасность">
    <p class="z-10 text-[20px] font-bold">{{ text }}</p>
  </div>
</template>

<script setup>
  const props = defineProps({
    image: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  });
</script>

<style>

</style>