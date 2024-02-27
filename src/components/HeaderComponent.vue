<template>
  <header class="ly_header">
    <div class="ly_header_inner">
      <div :class="['bl_hamburger', { 'active': isOpen }]" @click="toggleMenu()">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav :class="['bl_nav', { 'active': isOpen }]">
        <ul>
          <li><router-link :to="{ name: 'HomeView' }" class="bl_nav_link">Home</router-link></li>
          <li><router-link :to="{ name: 'AboutView' }" class="bl_nav_link">About</router-link></li>
          <li><router-link :to="{ name: 'CatListView' }" class="bl_nav_link">List</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>

export default {
  name: 'HeaderComponent',
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    },
  }
}
</script>

<style scoped>
@media (max-width: 1023px) {
  /* ハンバーガーメニューボタン */
  .bl_hamburger {
    display: block;
    position: fixed;
    z-index: 3;
    right: 20px;
    top: 20px;
    width: 42px;
    height: 42px;
    cursor: pointer;
    text-align: center;
  }

  .bl_hamburger span {
    display: block;
    position: absolute;
    width: 30px;
    height: 2px;
    left: 6px;
    background: #BBBBBB;
    transition: 0.3s ease-in-out;
  }

  .bl_hamburger span:nth-child(1) {
    top: 10px;
  }

  .bl_hamburger span:nth-child(2) {
    top: 20px;
  }

  .bl_hamburger span:nth-child(3) {
    top: 30px;
  }

  /* スマホメニューを開いてる時のボタン */
  .bl_hamburger.active span:nth-child(1) {
    top: 16px;
    left: 6px;
    background: #fff;
    transform: rotate(-45deg);
  }

  .bl_hamburger.active span:nth-child(2),
  .bl_hamburger.active span:nth-child(3) {
    top: 16px;
    background: #fff;
    transform: rotate(45deg);
  }

  /* メニュー背景 */
  .bl_nav {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 100%;
    color: #fff;
    background: #666666;
    text-align: center;
    width: 100%;
    height: 100vh;
    transition: all 0.6s;
  }

  .bl_nav ul {
    margin: 0 auto;
    padding: 0;
    width: 100%;
  }

  .bl_nav ul li {
    list-style-type: none;
    padding: 0;
    width: 100%;
    transition: .4s all;
  }


  .bl_nav ul li:hover {
    background: #ddd;
  }

  .bl_nav ul li a {
    display: block;
    color: #fff;
    padding: 1em 0;
    text-decoration: none;
  }

  .bl_nav.active {
    opacity: 1;
    display: block;
    left: 0;
  }
}

@media (min-width: 1024px) {
  .ly_header {
    position: sticky;
    top: 0;
    background: rgba(255,255,255,0.8);
    z-index: 999;
  }
  .bl_nav {
    display: flex;
    justify-content: flex-end;
  }
  .bl_nav ul {
    display: flex;
    justify-content: center;
    align-content: center;
    gap: 1em;
    padding: 0;
  }
  .bl_nav li {
    list-style: none;
  }
  .bl_nav_link {
    display: block;
    text-decoration: none;
    padding: 24px 30px;
    color: #424242;
  }
  .bl_nav_link:hover {
    opacity: 0.8;
  }
}
</style>
