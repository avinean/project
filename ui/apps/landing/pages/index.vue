<script setup lang="ts">
const selectedImageUrl = ref<number | null>(null);
</script>

<template>
  <div>
    <div
      id="hero"
      class="h-screen relative"
      :style="{
        height: '100vh',
        marginTop: 'calc(var(--header-height) * -1)'
      }"
      style="padding-top: var(--header-height);"
    >
      <img src="/hero.png" alt="hero section" class="absolute z-[-1] inset-0 object-cover h-full w-full">
      <div class="container mx-auto">
        <h1 class="text-4xl text-primary py-32">Професійний викладач з англійської мови </h1>
        <div class="flex justify-center">
          <UButton size="xl" to="#products">
            До матеріалів
          </UButton>
        </div>
      </div>
    </div>
    <div id="about-us" class="h-screen" style="padding-top: var(--header-height);">
      <img src="/about-me.png" alt="hero section" class="absolute z-[-1] right-0 h-full">
      <div class="container mx-auto h-full flex flex-col justify-center gap-8">
        <h2 class="text-primary text-5xl">Про мене</h2>
        <div class="w-1/2">
          <p class="text-primary text-3xl">
            Привіт! Я Мар’яна - професійний репетитор з англійської мови з понад 15-річним досвідом роботи.
          </p>
          <br>
          <p class="text-primary text-3xl">
            Моя мета - допомогти вам досягти ваших мовних цілей, незалежно від вашого поточного рівня володіння англійською мовою.
          </p>
          <br>
          <p class="text-primary text-3xl">
            Кожен урок адаптується під ваші потреби, що забезпечує максимальну ефективність навчання.
          </p>
        </div>
      </div>
    </div>
    <div id="interesting" class="h-screen bg-secondary-500" style="padding-top: var(--header-height);">
      <img src="/interesting.png" alt="hero section" class="absolute z-[-1] left-0 h-full">
      <div class="container mx-auto h-full flex flex-col items-end justify-center gap-8">
        <h2 class="text-primary text-5xl">Цікаві факти</h2>
        <div class="w-1/2">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="border-2 border-primary py-2 px-4 rounded-lg flex items-center">
              <span class="i-heroicons-book-open text-primary text-2xl"/>
              <p class="text-primary ml-2">працюю з автентичними підручниками і виданнями</p>
            </div>
            <div class="border-2 border-primary py-2 px-4 rounded-lg flex items-center">
              <span class="i-heroicons-clipboard-document-check text-primary text-2xl"/>
              <p class="text-primary ml-2">більше 20 авторських уроків</p>
            </div>
            <div class="border-2 border-primary py-2 px-4 rounded-lg flex items-center">
              <span class="i-heroicons-presentation-chart-line text-primary text-2xl"/>
              <p class="text-primary ml-2">проводжу 120 уроків у місяць</p>
            </div>
            <div class="border-2 border-primary py-2 px-4 rounded-lg flex items-center">
              <span class="i-heroicons-user-group text-primary text-2xl"/>
              <p class="text-primary ml-2">навчаю студентів від 7 до 99 років</p>
            </div>
            <div class="border-2 border-primary py-2 px-4 rounded-lg flex items-center">
              <span class="i-heroicons-receipt-percent text-primary text-2xl"/>
              <p class="text-primary ml-2">100% задоволеність результатами НМТ</p>
            </div>
            <div class="border-2 border-primary py-2 px-4 rounded-lg flex items-center">
              <span class="i-heroicons-paint-brush-solid text-primary text-2xl"/>
              <p class="text-primary ml-2">різноманітні форми навчання</p>
            </div>
            <div class="border-2 border-primary py-2 px-4 rounded-lg flex items-center">
              <span class="i-heroicons-clock text-primary text-2xl"/>
              <p class="text-primary ml-2">15 років викладацької практики</p>
            </div>
            <div class="border-2 border-primary py-2 px-4 rounded-lg flex items-center">
              <span class="i-heroicons-clock text-primary text-2xl"/>
              <p class="text-primary ml-2">15 років викладацької практики</p>
            </div>
          </div>
          <div class="flex justify-center mt-10">
            <UButton size="xl" to="#products">
              До матеріалів
            </UButton>
          </div>
        </div>
      </div>
    </div>
    <div 
      id="certificates" 
      class="h-screen" 
      :class="{
        'fixed inset-0 z-10 bg-secondary-500 overflow-y-auto': selectedImageUrl
      }"
      style="padding-top: var(--header-height); padding-bottom: var(--header-height);"
    >
      <span 
        v-if="selectedImageUrl"
        class="fixed top-4 right-4 p-4 cursor-pointer i-heroicons-x-mark text-3xl text-primary"
        @click="selectedImageUrl = null"
      />
      <div 
        :class="[
          'container mx-auto',
          {
            'h-full grid grid-cols-3 gap-8 [&_div]:overflow-hidden': !selectedImageUrl
          }
        ]"
      >
        <div
          v-if="!selectedImageUrl || selectedImageUrl === 1"
          class="rounded-md aspect-[1/1] bg-primary"
          @click="selectedImageUrl = 1"
        >
          <img src="/cert1.png" alt="certificate 1" class="w-full">
        </div>
        <div
          v-if="!selectedImageUrl || selectedImageUrl === 2"
          class="rounded-md aspect-[1/1] bg-primary"
          @click="selectedImageUrl = 2"
        >
          <img src="/cert2.png" alt="certificate 2" class="w-full">
        </div>
        <div
          v-if="!selectedImageUrl || selectedImageUrl === 3"
          class="rounded-md aspect-[1/1] bg-primary"
          @click="selectedImageUrl = 3"
        >
          <img src="/cert3.png" alt="certificate 3" class="w-full">
        </div>
        <div
          v-if="!selectedImageUrl || selectedImageUrl === 4"
          class="rounded-md aspect-[1/1] bg-primary"
          @click="selectedImageUrl = 4"
        >
          <img src="/cert4.png" alt="certificate 4" class="w-full">
        </div>
        <div v-if="!selectedImageUrl" class="rounded-md aspect-[1/1] overflow-hidden bg-primary"/>
        <div v-if="!selectedImageUrl" class="rounded-md aspect-[1/1] overflow-hidden bg-primary"/>
      </div>
    </div>
    <div id="products" class="h-screen" style="padding-top: var(--header-height);"  >
      products
      <ProductCarousel />
      <ULink to="/c/teacher">
        See more
      </ULink>
    </div>
    <div id="contacts" class="h-screen" style="padding-top: var(--header-height);"  >
      contacts
    </div>
  </div>
</template>
