<template>
  <section class="bg-[#DEF2FF] pt-7 pb-20">
    <div class="flex gap-0 md:gap-16 justify-between mx-[0px] xsm:mx-[30px] sm:mx-[60px] lg:mx-[120px] desk:mx-[200px] px-1.5">
      <div class="flex gap-8 items-center">
        <div class="hidden xl:flex flex-col gap-8">
          <Card image="/img/Safe.webp" text="Безопасность" />
          <Card image="/img/Bus.webp" text="Надёжность" />
        </div>
        <Card class="shrink-0 hidden xl:flex mt-15" image="/img/Comfort.webp" text="Комфорт" />
      </div>
      <div>
        <h3 id="choseUs" class="text-[15px] scroll-mt-[184px] text-center text-[#263C7A] font-medium">Почему выбирают нас</h3>
        <h2 class="text-[40px] mb-3 text-center leading-[44px] xlg:leading-[52px] md:leading-[52px] text-[#3C57A3] font-bold">Комфорт и надёжность в каждой поездке</h2>
        <p class="text-center md:text-left">Мы заботимся о вашем удобстве, предлагая пассажирские перевозки, которые сочетают в себе безопасность, высокий уровень сервиса и современные автобусы. Независимо от того, нужна ли вам поездка в аэропорт, трансфер для гостей или транспорт для группового путешествия, мы подберём оптимальное решение под ваши потребности.</p>
        <div class="flex mt-5 flex-col items-center gap-5 xl:hidden">
          <div class="flex w-full justify-center md:justify-between">
            <Card image="/img/Safe.webp" text="Безопасность" />
            <Card class="hidden md:flex" image="/img/Bus.webp" text="Надёжность" />
          </div>
          <Card image="/img/Comfort.webp" text="Комфорт" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style>

</style>