<template>
  <div class="fixed bottom-10 right-10 flex flex-col items-center space-y-2">
    <TransitionGroup name="fade">
      <a
        v-if="isOpen"
        href="https://t.me/+79834472525"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-blue-500 cursor-pointer text-white p-3 rounded-full shadow-lg w-13 h-13 flex items-center justify-center aspect-square"
      >
        <i class="fab fa-telegram-plane text-3xl"></i>
      </a>
      <a
        v-if="isOpen"
        href="https://wa.me/79834472525"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-green-500 cursor-pointer text-white p-3 rounded-full shadow-lg w-13 h-13 flex items-center justify-center aspect-square"
      >
        <i class="fab fa-whatsapp text-3xl"></i>
      </a>
    </TransitionGroup>
    <button @click="toggle" class="bg-[#263C7A] cursor-pointer text-white p-3 rounded-full shadow-lg">
      <svg v-if="isOpen === false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
