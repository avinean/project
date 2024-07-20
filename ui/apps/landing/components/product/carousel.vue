
<script setup lang="ts">
const { findPreview } = useProducts()
const { data } = await findPreview()

const list = computed(() => data?.value?.data || [])
</script>

<template>
  <div>
    <UCarousel
      v-if="list.length > 1"
      v-slot="{ item }" 
      :items="list"
      arrows
      indicators 
      :ui="{  item: 'basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4' }"
      class="gap-2"
    >
      <div class="p-2 flex">
        <ProductCard v-bind="item.attributes" />
      </div>
    </UCarousel>
    <div v-else class="flex">
      <!-- 
      TODO:
        For some reason carousel gets rendered incorrectly with 1 item
        The only item gets rerendered infinitely
        As a result the image is not displayed but gets fetched infinitely
      -->
      <div 
        v-for="item, i in list"
        :key="i"
        class="p-2 flex basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
      >
        <ProductCard v-bind="item.attributes" />
      </div>
    </div>
  </div>
</template>
