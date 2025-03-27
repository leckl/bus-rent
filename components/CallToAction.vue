<template>
  <div class="bg-[url(/img/CallToAction.png)] bg-center h-[600px] bg-no-repeat bg-cover py-7">
    <div class="mx-[0px] xsm:mx-[30px] sm:mx-[60px] lg:mx-[120px] desk:mx-[300px] max-w-2xl px-1.5">
      <h3 class="text-[#A8D8FF] text-[15px] mb-2.5">Компания пассажирских перевозок</h3>
      <h1 class="text-[52px] sm:text-[64px] leading-16 mb-5 text-white font-bold">Пассажирские перевозки</h1>
      <p class="text-white mb-5 font-normal">Позвоните нам прямо сейчас или оставьте заявку на обратную связь через WhatsApp, Telegram или звонок </p>
      <button @click="orderCall" class="bg-[#263C7A] cursor-pointer px-6 py-5 rounded-[50px] text-white text-[15px] font-semibold">Заказать звонок</button>
    </div>
  </div>
</template>

<script setup>
const { $eventBus } = useNuxtApp();

const orderCall = () => {
  $eventBus.emit('openOrderCall');
}
</script>

<style>

</style>