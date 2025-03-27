<template>
  <ul class="text-[20px] font-medium">
    <li class="flex items-center pb-5 gap-1.5">
      <div class="bg-[#D64949] inline-block w-[20px] h-[20px] rounded-full"></div>
      <p class="text-[20px] font-medium">{{ firstService }}</p>
    </li>
    <li class="flex items-center pb-5 gap-1.5">
      <div class="bg-[#D64949] inline-block w-[20px] h-[20px] rounded-full"></div>
      <p class="text-[20px] font-medium">{{ secondService }}</p>
    </li>
    <li class="flex items-center gap-1.5">
      <div class="bg-[#D64949] inline-block w-[20px] h-[20px] rounded-full"></div>
      <p class="text-[20px] font-medium">{{ thirdService }}</p>
    </li>
    <li v-if="props.fourthService" class="flex pt-5 items-center gap-1.5">
      <div class="bg-[#D64949] inline-block w-[20px] h-[20px] rounded-full"></div>
      <p class="text-[20px] font-medium">{{ fourthService }}</p>
    </li>
  </ul>
</template>

<script setup>
  const props = defineProps({
    firstService: {
      type: String,
      required: true
    },
    secondService: {
      type: String,
      required: true
    },
    thirdService: {
      type: String,
      required: true
    },
    fourthService: {
      type: String,
      required: false,
    }
  });
</script>

<style>

</style>