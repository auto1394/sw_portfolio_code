<template>
  <HeaderComponent />
  <main class="ly_cont">
    <section class="un_catDetail_wrapper un_content">
      <h2 class="el_title el_title__left">Detail</h2>
      <div v-if="catInfo" class="bl_catDetail">
        <figure v-if="catInfo.referenceImageId" class="bl_catDetail_img">
          <img :src="'https://cdn2.thecatapi.com/images/' + catInfo.referenceImageId + '.jpg'" :alt="catInfo.name">
        </figure>
        <p class="bl_catDetail_name">{{ catInfo.name }}</p>
        <p class="bl_catDetail_description">{{ catInfo.description }}</p>
        <p class="bl_catDetail_lifeSpan">Life span: {{ catInfo.lifeSpan }}</p>
        <ul class="bl_textLink">
          <li class="bl_textLink_item"><a class="el_textLink" :href="catInfo.wikipediaUrl" target="_blank">wikipedia</a></li>
        </ul>
      </div>
      <Loading v-else />
    </section>
  </main>
  <FooterComponent />
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import Loading from '@/components/LoadingComponent.vue'
import { getCatInfo } from '@/repositories/cat-repository'

export default {
  name: 'CatDetailView',
  components: {
    HeaderComponent,
    FooterComponent,
    Loading,
  },
  name: 'CatDetail',
  data() {
    return {
      catInfo: undefined,
    }
  },
  mounted() {
    this.setCatInfo()
  },
  methods: {
    async setCatInfo() {
      const response = await getCatInfo(this.$route.params.catId)
      this.catInfo = response
    },
  }
}
</script>

<style>
.bl_catDetail_img {
  margin-bottom: 30px;
}
.bl_catDetail_img img {
  display: block;
  height: auto;
  max-width: 100%;
}
.bl_catDetail_name,
.bl_catDetail_description,
.bl_catDetail_lifeSpan {
  margin-bottom: 24px;
}
@media (min-width: 1024px) {

}
</style>
