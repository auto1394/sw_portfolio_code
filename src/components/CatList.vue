<template>
  <section class="un_catList_wrapper un_content">
    <h2 :class="['el_title', {'el_title__left': this.$route.name != 'HomeView'}]">List</h2>
    <ul class="bl_catList" v-if="catList.length > 0">
      <template v-for="item in catList" :key="item.id">
        <li v-if="item.imageUrl" :class="['bl_catList_item', 'bl_catList_item__' + item.id]">
          <router-link :to="{ name: 'CatDetailView', params: { catId: item.id } }" class="bl_catList_item_link">
            <figure class="bl_catList_item_img"><img :src="item.imageUrl" :alt="item.name"></figure>
            <div class="bl_catList_item_name">{{ item.name }}</div>
          </router-link>
        </li>
      </template>
    </ul>
    <Loading v-else />
  </section>
</template>

<script>
import { getCatInfos } from '@/repositories/cat-repository'
import Loading from '@/components/LoadingComponent.vue'

export default {
  components: {
    Loading,
  },
  name: 'CatList',
  data() {
    return {
      catList: [],
    }
  },
  mounted() {
    this.setCatList()
  },
  methods: {
    async setCatList() {
      const response = await getCatInfos()
      this.catList = response
    },
  }
}
</script>

<style>
.bl_catList {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2em 1em;
}

.bl_catList_item {
  width: calc((100% / 2) - 1em);
  list-style: none;
}

.bl_catList_item_link {
  display: block;
  text-decoration: none;
  color: #424242;
}

.bl_catList_item_img {
  height: 250px;
  overflow: hidden;
  margin-bottom: 1em;
}

.bl_catList_item_img img {
  display: block;
  height: 100%;
  object-fit: cover;
  width: 100%;
  transition: 1s all;
}

.bl_catList_item_img:hover img {
  transform: scale(1.2, 1.2);
  transition: 1s all;
}

@media (min-width: 1024px) {
  .bl_catList_item {
    width: calc((100% / 4) - 1em);
  }
  .bl_catList_item_img {
    height: 180px;
  }
}
</style>
