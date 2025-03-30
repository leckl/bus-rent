<template>
  <section class="bg-[#DEF2FF] pt-7 pb-20">
    <div class="mx-[0px] xsm:mx-[30px] sm:mx-[60px] lg:mx-[120px] desk:mx-[200px] px-1.5">
      <h3 id="services" class="text-[15px] scroll-mt-[184px] text-center text-[#263C7A] font-medium">Услуги</h3>
      <h2 class="text-[40px] mb-12 text-center leading-16 text-[#3C57A3] font-bold">Аренда автобусов и микроавтобусов для любых целей
        и мероприятий
      </h2>
      <div class="hidden slg:block">
        <div class="flex justify-between mb-10">
          <ServicesList first-service="Трансферы" second-service="Междугородние поездки" third-service="Перевозка сотрудников" />
          <ServicesList first-service="Перевозка детей" second-service="Экскурсии" third-service="Гастрольные туры" />
          <ServicesList first-service="Спортивные мероприятия" second-service="Свадебные торжества" third-service="Корпоративные мероприятия" />
        </div>
        <div class="flex gap-10 mb-5">
          <div class="shrink-0">
            <ServicesList class="shrink-0" first-service="Перевозки по городу" second-service="Выезды на природу" third-service="Обслуживание делегаций" />
            <button @click="orderCall" class="bg-[#263C7A] cursor-pointer mt-12 rounded-full text-white px-6 py-5">Заказать звонок</button>
          </div>
          <div class="flex gap-10 mt-7">
            <img class="object-cover" loading="lazy" src="/img/OurService1.webp" alt="Наши услуги 1">
            <img class="object-cover hidden sdesk:block" loading="lazy" src="/img/OurService2.webp" alt="Наши услуги 2">
          </div>
        </div>
        <div class="flex gap-3 sdesk:gap-10">
          <img class="object-cover" loading="lazy" src="/img/OurService3.webp" alt="Наши услуги 3">
          <img class="object-cover hidden xlg:block" loading="lazy" src="/img/OurService4.webp" alt="Наши услуги 4">
        </div>
      </div>

      <!-- Tablet version  -->

      <div class="hidden sm:block slg:hidden">
        <div class="flex justify-start gap-5 mb-10">
          <ServicesList first-service="Трансферы" second-service="Междугородние поездки" third-service="Перевозка сотрудников" fourth-service="Спортивные мероприятия" />
          <ServicesList first-service="Перевозка детей" second-service="Экскурсии" third-service="Гастрольные туры" fourth-service="Свадебные торжества" />
        </div>
        <div class="flex gap-10 mb-5">
          <div class="shrink-0">
            <ServicesList class="shrink-0" first-service="Перевозки по городу" second-service="Выезды на природу" third-service="Обслуживание делегаций" fourth-service="Корпоративные мероприятия" />
            <button @click="orderCall" class="bg-[#263C7A] cursor-pointer mt-12 rounded-full text-white px-6 py-5">Заказать звонок</button>
          </div>
          <div>
            <img class="block md:hidden object-cover" loading="lazy" src="/img/OurService Vertical.webp" alt="Наши услуги">
          </div>
          <div class="hidden md:flex gap-10 mt-7">
            <img class="object-cover rounded-[10px] object-center" loading="lazy" src="/img/OurService1.webp" alt="Наши услуги 1">
            <img class="object-cover hidden sdesk:block" loading="lazy" src="/img/OurService2.webp" alt="Наши услуги 2">
          </div>
        </div>
        <div class="hidden md:flex gap-3 sdesk:gap-10">
          <img class="object-cover" loading="lazy" src="/img/OurService3.webp" alt="Наши услуги 3">
          <img class="object-cover hidden xlg:block" loading="lazy" src="/img/OurService4.webp" alt="Наши услуги 4">
        </div>
      </div>

      <!-- Mobile version -->

      <div class="sm:hidden flex flex-col items-center">
        <div class="flex flex-col gap-5">
          <ServicesList class="shrink-0" first-service="Трансферы" second-service="Междугородние поездки" third-service="Перевозка сотрудников" fourth-service="Спортивные мероприятия" />
          <ServicesList class="shrink-0" first-service="Перевозка детей" second-service="Экскурсии" third-service="Гастрольные туры" fourth-service="Свадебные торжества" />
          <ServicesList class="shrink-0" first-service="Перевозки по городу" second-service="Выезды на природу" third-service="Обслуживание делегаций" fourth-service="Корпоративные мероприятия" />
        </div>
        <div class="flex gap-10 mb-5">
          <div class="shrink-0">
            <button @click="orderCall" class="bg-[#263C7A] cursor-pointer mt-12 rounded-full text-white px-6 py-5">Заказать звонок</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Tablet version -->

  <!-- <section class="bg-[#DEF2FF] hidden sm:block slg:hidden pt-7 pb-20">
    <div class="mx-[0px] xsm:mx-[30px] sm:mx-[60px] lg:mx-[120px] desk:mx-[200px] px-1.5">
      <h3 id="services" class="hidden sm:block slg:hidden text-[15px] text-center text-[#263C7A] font-medium">Услуги</h3>
      <h2 class="text-[40px] mb-12 text-center leading-[52px] text-[#3C57A3] font-bold">Аренда автобусов и микроавтобусов для любых целей
        и мероприятий
      </h2>

    </div>
  </section>

  Mobile version

  <section class="bg-[#DEF2FF] block sm:hidden pt-7 pb-20">
    <div class="flex flex-col items-center mx-[0px] xsm:mx-[30px] sm:mx-[60px] lg:mx-[120px] desk:mx-[200px] px-1.5">
      <h3 id="services" class="block sm:hidden text-[15px] text-center text-[#263C7A] font-medium">Услуги</h3>
      <h2 class="text-[40px] mb-12 text-center leading-[44px] text-[#3C57A3] font-bold">Аренда автобусов и микроавтобусов для любых целей
        и мероприятий
      </h2>

    </div>
  </section> -->
</template>

<script setup>
const { $eventBus } = useNuxtApp()

const orderCall = () => {
  $eventBus.emit('openOrderCall');
}
</script>

<style>

</style>