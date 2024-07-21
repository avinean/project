<script setup lang="ts">
const header = ref<HTMLElement | null>(null)
const { height } = useElementBounding(header)
</script>

<template>
  <div>
    <header
      ref="header"
      class="p-4 sticky top-0 z-10"
    >
      <nav class="flex justify-between items-center gap-4 container mx-auto">
        <a href="/#certificates">Certificates</a>
        <a href="/#products">Products</a>
        <a href="/#hero">
          <NuxtImg src="/logo.svg" alt="logo"  height="50"/>
        </a>
        <a href="/#contacts">Contacts</a>
        <a href="/#about-us">About Us</a>
      </nav>
    </header>
    <main :style="{ '--header-height': `${height}px` }">
      <slot />
    </main>
    <footer class="border-t">
      <p>
        This is the footer of the landing page.
      </p>
    </footer>
  </div>
</template>
