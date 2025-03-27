<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg mb-5 font-medium leading-6 text-gray-900"
              >
                Закажите звонок
              </DialogTitle>
              <div class="mt-2">

                <form class="w-full flex flex-col gap-6" @submit.prevent="orderCall">
                  <div>
                    <div class="relative w-full z-0">
                      <input v-model="name" v-bind="nameAttrs" type="text" id="name" class="block px-6 pb-2.5 pt-4 w-full text-base text-text bg-transparent rounded-[50px] border border-border appearance-none focus:outline-none focus:ring-0 focus:border-[#263C7A] peer" placeholder=" " />
                      <label for="name" class="pointer-events-none absolute text-sm text-secondText duration-300 transform -translate-y-4 scale-75 top-1.5 z-10 origin-[0] bg-white px-2 mx-4 peer-focus:px-2 peer-focus:mx-4 peer-focus:text-[#263C7A] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                        Имя
                      </label>
                    </div>
                    <p class="text-sm pt-1 text-cancel">{{ errors.name }}</p>
                  </div>
                  <div>
                    <div class="relative w-full z-0">
                      <input v-maska="options" v-model="phone" v-bind="phoneAttrs" type="text" id="phone" class="block px-6 pb-2.5 pt-4 w-full text-base text-text bg-transparent rounded-[50px] border border-border appearance-none focus:outline-none focus:ring-0 focus:border-[#263C7A] peer" placeholder=" " />
                      <label for="phone" class="pointer-events-none absolute text-sm text-secondText duration-300 transform -translate-y-4 scale-75 top-1.5 z-10 origin-[0] bg-white px-2 mx-4 peer-focus:px-2 peer-focus:mx-4 peer-focus:text-[#263C7A] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                        Телефон
                      </label>
                    </div>
                    <p class="text-sm pt-1 text-cancel">{{ errors.phone }}</p>
                  </div>
                  <div>
                    <div class="relative w-full z-0">
                      <textarea v-model="info" type="text" id="info" class="block h-[170px] resize-none px-6 pb-2.5 pt-4 w-full text-base text-text bg-transparent rounded-[50px] border border-border appearance-none focus:outline-none focus:ring-0 focus:border-[#263C7A] peer" placeholder=" " />
                      <label for="info" class="pointer-events-none absolute text-sm text-secondText duration-300 transform -translate-y-4 scale-75 top-1.5 z-10 origin-[0] bg-white px-2 mx-4 peer-focus:px-2 peer-focus:mx-4 peer-focus:text-[#263C7A] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                        Доп. информация
                      </label>
                    </div>
                  </div>
              </form>
              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="bg-[#263C7A] cursor-pointer px-6 py-5 rounded-[50px] text-white text-[15px] font-semibold"
                  @click="orderCall"
                  :disabled="isLoading"
                >
                  {{ isLoading ? 'Отправка...' : 'Заказать звонок' }}
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import { useForm } from 'vee-validate';
import { vMaska } from "maska/vue";
import * as yup from 'yup';
import axios from 'axios';

const isOpen = ref(false);

const { errors, handleSubmit, defineField, setErrors } = useForm({
  validationSchema: yup.object({
    name: yup.string().min(1, 'Минимальная длина поля 1 символа').max(50, 'Масимальная длина поля 90 символов').required('Поле обязательно'),
    phone: yup.string().matches(/^8/, 'Номер должен начинаться с цифры 8').min(17, 'Минимальная длина поля 11 символов').max(17, 'Масимальная длина поля 11 символов').required('Поле обязательно'),
  }),
});

const info = ref('');
const isLoading = ref(false);
const errorMessage = ref('');
const [name, nameAttrs] = defineField('name');
const [phone, phoneAttrs] = defineField('phone');

const options = reactive({
  mask: "8-(###) ###-##-##",
  eager: true
});

const cleanPhoneNumber = (number) => {
  return number.replace(/[^\d]/g, ''); // Удаляет все символы, кроме цифр
};

const orderCall = async () => {
  isLoading.value = true;
  errorMessage.value = '';

  try {
    const cleanedPhone = cleanPhoneNumber(phone.value); // Очистка номера

    console.log(cleanedPhone)

    const response = await axios.post('/api/send-message', {
      name: name.value,
      phone: cleanedPhone, // Отправляем очищенный номер
      info: info.value
    });

    console.log(response);

    if (response.data.success) {
      name.value = '';
      phone.value = '';
      info.value = '';
    } else {
      errorMessage.value = response.data.message;
    }
  } catch (error) {
    errorMessage.value = 'Ошибка отправки сообщения';
    console.error(error);
  } finally {
    isLoading.value = false;
  }
}

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}

defineExpose({
  openModal,
});
</script>