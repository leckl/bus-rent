<template>
  <section class="bg-[#191D27] pt-7 pb-12">
    <div class="mx-[0px] xsm:mx-[30px] sm:mx-[60px] lg:mx-[120px] desk:mx-[200px] px-1.5">
      <h3 id="advantages" class="text-[15px] scroll-mt-[184px] text-center text-[#A8D8FF] font-medium">Наши преимущества</h3>
      <h2 class="text-[40px] mb-12 text-center leading-[44px] xlg:leading-16 md:leading-[52px] text-white font-bold">Комфортабельные автобусные перевозки в любые направления с индивидуальным подходом к каждому</h2>
      <div class="hidden xlg:flex items-baseline gap-5 justify-between">
        <AdvantagesList v-for="(row, rowIndex) in chunkedItems" :key="rowIndex" :advanteges="row" />
      </div>
      <AdvantagesSwiper :advantages="advantages" class="block xlg:hidden" />
    </div>
  </section>
  <img class="w-full" loading="lazy" src="/img/AdvantagesBackgroundImage.webp" alt="">
</template>

<script setup>
const advantages = [
  {
    "title": "Удобство и комфорт",
    "text": "Современные и комфортабельные автобусы марки Mercedes Benz",
  },
  {
    "title": "Лучшие цены",
    "text": "Гибкие тарифы для любых маршрутов и поездок",
  },
  {
    "title": "Круглосуточное обслуживание",
    "text": "Мы на связи 24 часа и без выходных!",
  }, 
  {
    "title": "Чистые салоны",
    "text": "Перед каждой поездкой моются салон и кузов автобуса",
  },
  {
    "title": "Контроль качества",
    "text": "Все автобусы проходят технический осмотр перед выходом на линию",
  },
  {
    "title": "Удобная оплата",
    "text": "Наличный и безналичный расчет",
  },
  {
    "title": "Отчётность",
    "text": "Отчётные финансовые документы,  ЭДО",
  },
  {
    "title": "Опытная команда",
    "text": "Водители автобусов имеют большой стаж вождения",
  }, 
  {
    "title": "Гарантия безопасности",
    "text": "Автобусы оснащ системами мониторинга и контролля безопасности",
  },
];

const chunkedItems = computed(() => {
  const chunkSize = 3;
  return Array.from({ length: Math.ceil(advantages.length / chunkSize) }, (_, i) =>
    advantages.slice(i * chunkSize, i * chunkSize + chunkSize)
  );
});
</script>

<style>

</style>