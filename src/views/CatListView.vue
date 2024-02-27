<template>
  <HeaderComponent />
  <main class="ly_cont">
    <CatList />
  </main>
  <FooterComponent />
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import CatList from '@/components/CatList.vue'

export default {
  name: 'CatListView',
  components: {
    HeaderComponent,
    FooterComponent,
    CatList,
  }
}
</script>
