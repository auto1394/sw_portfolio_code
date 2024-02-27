<template>
  <section class="un_MV">
    <h1 class="un_MV_title">Portfolio</h1>
    <div class="un_MV_scroll" @click="scrollToAnchorPoint('scrollPoint')">scroll</div>
    <ul class="un_MV_list">
      <li class="un_MV_item un_MV_item__01"></li>
      <li class="un_MV_item un_MV_item__02"></li>
      <li class="un_MV_item un_MV_item__03"></li>
    </ul>
  </section>
  <HeaderComponent />
  <main class="ly_cont" ref="scrollPoint">
    <AboutComponent />
    <CatList />
  </main>
  <FooterComponent />
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import AboutComponent from '@/components/AboutComponent.vue'
import CatList from '@/components/CatList.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    CatList,
  },
  methods: {
    scrollToAnchorPoint(refName) {
      const el = this.$refs[refName]
      el.scrollIntoView({ behavior: 'smooth'})
    }
  },
}
</script>

<style scoped>
.un_MV {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.un_MV_title {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  z-index: 1;
  font-size: 60px;
  color: #fff;
  text-shadow: 0 0 10px rgba(0,0,0,0.3);
}
.un_MV_scroll {
  position: absolute;
  bottom: 24px;
  margin: auto;
  z-index: 1;
  font-size: 30px;
  font-weight: lighter;
  color: #fff;
  text-shadow: 0 0 10px rgba(0,0,0,0.3);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s all;
}
.un_MV_scroll::after {
  content: '';
  display: block;
  width: 14px;
  height: 14px;
  border-top: 1px solid #fff;
  border-right: 1px solid #fff;
  transform: rotate(135deg);
}
.un_MV_scroll:hover {
  bottom: 16px;
}
.un_MV_list {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin: 0 auto;
  padding: 0;
}

.un_MV_item {
  list-style: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.un_MV_item__01 {
  background-image: url('../assets/img/cat_1.jpg');
  animation: slide-animation-01 24s infinite;
}

.un_MV_item__02 {
  background-image: url('../assets/img/cat_2.jpg');
  animation: slide-animation-02 24s infinite;
}

.un_MV_item__03 {
  background-image: url('../assets/img/cat_3.jpg');
  animation: slide-animation-03 24s infinite;
}

@keyframes slide-animation-01 {
  0% {
    opacity: 1;
    transform: scale(1.0);
  }

  30% {
    opacity: 1;
  }

  40% {
    opacity: 0;
    transform: scale(1.15);
  }

  90% {
    opacity: 0
  }

  100% {
    opacity: 1;
    transform: scale(1.0);
  }
}

@keyframes slide-animation-02 {
  0% {
    opacity: 0;
  }

  30% {
    opacity: 0;
    transform: scale(1.1);
  }

  40% {
    opacity: 1;
  }

  60% {
    opacity: 1;
  }

  70% {
    opacity: 0;
    transform: scale(1.0);
  }

  100% {
    opacity: 0;
  }
}

@keyframes slide-animation-03 {
  0% {
    opacity: 0;
  }

  60% {
    opacity: 0;
    transform: scale(1.0);
  }

  70% {
    opacity: 1;
  }

  90% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: scale(1.1);
  }
}
</style>