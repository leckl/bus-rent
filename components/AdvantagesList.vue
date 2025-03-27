<template>
  <ul class="flex flex-col gap-7 h-full justify-between">
    <li class="max-w-[340px] flex-1" v-for="(advantage, index) in props.advanteges" :key="index">
      <div class="flex gap-3.5">
        <div class="w-[30px] shrink-0 h-[30px] rounded-full bg-white"></div>
        <div>
          <h4 class="text-[20px] whitespace-nowrap font-bold text-white">{{ advantage.title }}</h4>
          <p class="text-white">{{ advantage.text }}</p>
        </div>
      </div>
    </li>
  </ul>
</template>


<script setup>
  const props = defineProps({
    advanteges: {
      type: Array,
      required: true,
    },
  })
</script>

<style>
</style>