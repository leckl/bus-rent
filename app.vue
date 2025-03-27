<template>
  <head>
    <title>Пассажирские перевозки Иркутск и Байкал – Заказать трансфер</title>
    <meta name="description" content="Пассажирские перевозки в любых направлениях. Комфортные и безопасные поездки на автобусах.">
    <meta name="keywords" content="пассажирские перевозки Иркутск, Перевозка сотрудников, Перевозки детей, Экскурсии на Байкал и не только">
    <meta name="author" content="ИП Тимонин Е.А.">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <!-- Open Graph для соцсетей -->
    <meta property="og:title" content="Пассажирские перевозки ИП Тимонин">
    <meta property="og:description" content="Пассажирские перевозки в любых направлениях. ИП Тимонин">
    <meta property="og:image" content="/new_logo.png">
    <meta property="og:url" content="https://exclusive-bus.com">
    
    <!-- Favicon -->
    <link rel="icon" href="/favicon.ico">
  </head>
  <div class="bg-custom-gradient text-[#191D27]">
    <div class="mx-[0px] xsm:mx-[30px] sm:mx-[60px] lg:mx-[120px] desk:mx-[200px] px-1.5 font-Manrope">
      <header class="pt-6 pb-6 fixed top-0 left-0 right-0 z-30 xsm:px-[30px] sm:px-[60px] lg:px-[120px] desk:px-[200px] px-1.5 bg-white">
        <div class="flex items-center justify-between">
          <div class="flex gap-5 items-center">
            <img class="pr-1.5 object-cover max-w-[130px] max-h-[130px]" src="/img/new_logo-removebg-preview.png" alt="Логотип ИП Тимонин">
            <h2 class="uppercase hidden slg:block text-3xl text-[#263C7A] font-semibold">ИП Тимонин Е.А.</h2>
          </div>
          <div class="flex items-center text-[16px] xsm:text-[20px] gap-3 font-medium">
            <p class="cursor-pointer" @click="orderCall">+7 (983) 447-25-25</p>
            <button @click="orderCall" class="bg-[#263C7A] cursor-pointer text-white py-2 px-5 rounded-full font-medium text-[15px]">Заказать звонок</button>
            <!-- <img class="object-fit w-9 h-9 cursor-pointer" src="/img/WhatsApp logo.png" alt="Мы в WhatsApp">
            <img class="object-fit w-9 h-9 cursor-pointer" src="/img/Telegram logo.png" alt="Мы в Telegram"> -->
          </div>
        </div>
        <nav class="mt-0.5 flex xsm:justify-end justify-center">
        <ul class="flex gap-3 text-[16px] font-medium sm:gap-7 sms:text-[20px]">
          <li><a class="cursor-pointer hover:text-[#263C7A]" href="#about">О нас</a></li>
          <li><a class="cursor-pointer hover:text-[#263C7A]" href="#services">Услуги</a></li>
          <li><a class="cursor-pointer hover:text-[#263C7A]" href="#advantages">Наши преимущества</a></li>
          <li><a class="cursor-pointer hover:text-[#263C7A]" href="#choseUs">Почему мы</a></li>
          <li><a class="cursor-pointer hover:text-[#263C7A]" href="#contacts">Контакты</a></li>
        </ul>
      </nav>
      </header>
    </div>
    <CallToAction class="mt-[174px]" />
    <ContactPopUp />
  </div>
  <main>
  <NuxtPage class="text-[#191D27]" />
  <OrderCallModal ref="orderCallModal" />
  </main>
  <footer id="contacts" class="bg-[#191D27] pt-10 pb-40">
    <div class="xsm:mx-[30px] sm:mx-[60px] lg:mx-[120px] desk:mx-[200px] mx-1.5">
      <div class="flex items-center pb-8">
        <img class="pr-1.5 object-cover max-w-[130px] max-h-[130px]" src="/img/footer-logo.png" alt="Логотип ИП Тимонин">
        <h2 class="uppercase hidden slg:block text-3xl text-white font-semibold">ИП Тимонин Е.А.</h2>
      </div>
      <div class="flex gap-5 xsm:gap-20 xmd:gap-44  text-white border-t-2 border-[#616161] pt-12">
        <ul>
          <li class="text-[20px] mb-7 font-bold">Информация</li>
          <li class="text-[14px] mb-1.5">ИНН 380121061254</li>
          <li class="text-[14px] mb-4">ОГРНИП 318385000110160</li>
          <li class="text-[14px] mb-1.5">Юридический адрес</li>
          <li class="text-[14px]">664075, г. Иркутск,
            улица Байкальская 234Б/3-18</li>
        </ul>
        <ul>
          <li class="text-[20px] mb-7 font-bold">Контакты</li>
          <li class="text-[20px] whitespace-nowrap shrink-0 mb-2.5 font-bold">+7 (983) 447-25-25</li>
          <li class="text-[14px] mb-4">timonina.arina@yandex.ru</li>
          <li><button @click="orderCall" class="bg-white cursor-pointer text-[#191D27] py-2 px-5 rounded-full font-medium text-[15px]">Заказать звонок</button></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
  const orderCallModal = ref(null);
  const { $eventBus } = useNuxtApp();

  const orderCall = () => {
    $eventBus.emit('openOrderCall');
  }

  $eventBus.on('openOrderCall', () => {
    orderCallModal.value.openModal();
  })
</script>

<style>
  html {
    scroll-behavior: smooth;
  }
</style>
