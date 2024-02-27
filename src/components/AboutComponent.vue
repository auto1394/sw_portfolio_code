<template>
  <section class="un_about un_content">
    <h2 :class="['el_title', { 'el_title__left': this.$route.name != 'HomeView' }]">About</h2>
    <p class="un_about_txt">こちらはVue.jsとAPIを勉強するために作成したサイトになります。<br>使用しているテキストや画像はフリー素材を使用しています。</p>
    <div class="un_about_useTool">
      <div class="un_about_useTool_item">
        <dl class="un_about_useTool_item_list">
          <dt class="un_about_useTool_item_list_title">使用ソフト・ツール</dt>
          <dd class="un_about_useTool_item_list_detail">Visual Studio Code / Adobe XD / Git / Sourcetree</dd>
        </dl>
        <dl class="un_about_useTool_item_list">
          <dt class="un_about_useTool_item_list_title">使用言語</dt>
          <dd class="un_about_useTool_item_list_detail">Javascript (Vue.js) / HTML / CSS</dd>
        </dl>
        <dl class="un_about_useTool_item_list">
          <dt class="un_about_useTool_item_list_title">API</dt>
          <dd class="un_about_useTool_item_list_detail">
            <ul class="bl_textLink">
              <li class="bl_textLink_item"><a class="el_textLink" href="https://docs.thecatapi.com/" target="_blank">Cats</a></li>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="un_about_useTool_item">
        <dl class="un_about_useTool_item_list">
          <dt class="un_about_useTool_item_list_title">作成したコード</dt>
          <dd class="un_about_useTool_item_list_detail">
            <ul class="bl_textLink">
              <li class="bl_textLink_item"><a class="el_textLink" href="https://github.com/auto1394/sw_portfolio_code" target="_blank">GitHub</a></li>
            </ul>
          </dd>
        </dl>
        <dl class="un_about_useTool_item_list">
          <dt class="un_about_useTool_item_list_title">参考サイト</dt>
          <dd class="un_about_useTool_item_list_detail">
            <ul class="bl_textLink">
              <li class="bl_textLink_item"><a class="el_textLink" href="https://precss.io/ja/" target="_blank">PRECSS</a></li>
              <li class="bl_textLink_item"><a class="el_textLink" href="https://qiita.com/e99h2121/items/6d5cc72679f43aa37be2" target="_blank">無料で使える (癒やされたいだけの) 公開APIリスト:ねこ、いぬ、キツネ、柴犬、ジブリ</a></li>
              <li class="bl_textLink_item"><a class="el_textLink" href="https://photopizza.design/css_loading/" target="_blank">CSSで作るローディングアニメーション40選〜待ち時間を楽しくするテクニック</a></li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>
  </section>
</template>

<style>
.un_about_txt {
  text-align: center;
  margin-bottom: 30px;
}

.un_about_useTool_item_list_title {
  padding: 5px 0 5px 12px;
  margin-bottom: 12px;
  border-left: 3px solid #666666;
}

.un_about_useTool_item_list_detail {
  margin-bottom: 18px;
  word-break: break-all;
}

@media (min-width: 1024px) {
  .un_about_useTool {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  .un_about_useTool_item {
    width: calc(100% / 2);
  }
}
</style>