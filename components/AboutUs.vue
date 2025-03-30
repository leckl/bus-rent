<template>
  <section class="mt-12 mb-7 mx-[0px] xsm:mx-[30px] sm:mx-[60px] lg:mx-[120px] desk:mx-[200px] px-1.5">
    <h3 id="about" class="text-[15px] scroll-mt-[184px] text-center text-[#263C7A] font-medium">О нас</h3>
    <h2 class="text-[40px] text-center leading-16 mb-5 text-[#3C57A3] font-bold">Кто мы</h2>
    <div class="xlg:flex block gap-10">
      <p class="text-[20px] text-center xlg:text-left font-medium">
        Тимонин Е.А. — это динамично развивающаяся компания на рынке пассажирских перевозок в Иркутске и по всему Байкальскому региону. Мы работаем в области пассажирских перевозок более 10 лет и зарекомендовали себя как надёжный и ответственный партнёр, предоставляющий высококачественные услуги, включая заказ автобуса для любых нужд, экскурсии по Байкалу и перевозку детей. За это время мы заслужили доверие наших клиентов, обеспечивая комфорт, безопасность и надежность во всех аспектах нашей работы. Выбирая нас для путешествий по Иркутску и Байкалу, вы уверены в том, что безопасность, комфорт и качество — наши главные приоритеты.
      </p>
      <div class="shrink-0 hidden xlg:block">
        <img class="mb-5 ml-11" loading="lazy" src="/img/OurBuses.webp" alt="Фотография нашего автобуса">
        <img loading="lazy" src="/img/AboutUs.webp" alt="О нас">
      </div>
      <AboutUsSwiper class="block xlg:hidden mt-10" :images="['/img/OurBuses.webp', '/img/AboutUs.webp']" />
    </div>
  </section>
</template>

<script setup>

</script>

<style>

</style>