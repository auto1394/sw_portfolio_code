<template>
  <HeaderComponent />
  <main class="ly_cont">
    <AboutComponent />
  </main>
  <FooterComponent />
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import AboutComponent from '@/components/AboutComponent.vue'

export default {
  name: 'AboutView',
  components: {
    HeaderComponent,
    FooterComponent,
    AboutComponent
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
