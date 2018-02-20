<template>
  <div class="container" id="classic">
    <div class="title">
      <span class="title-underline">10</span>首不容錯過的雋永情歌
      <div class="sub-title">唱出你的一生一世</div>
    </div>

    <div class="wrapper style">
      <div class="inner" v-for="(song, $index) in songs">
        <article :class="'feature ' + song.position">
          <img class="img-fluid" v-show="!song.show" :src="song.img" @click="showVideo($index)">
          <div class="video embed-responsive embed-responsive-16by9" v-show="song.show">
            <iframe class="embed-responsive-item" :src="song.videoTemp" frameborder="0" allowfullscreen></iframe>
          </div>
          <div class="content">
            <h2 class="underline">{{song.title}}</h2>
            <p v-html="song.content"></p>
          </div>
        </article>
      </div>
    </div>

    <div class="footer">
      每隔一段時間就會透過 <router-link to="/vote">投票系統</router-link> 的結果來決定經典歌曲 TOP10 喔！<br>
      想要的歌沒在榜上嗎？趕快前去投票！
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        songs: [
          {
            rank: '1', // 這是用不到的屬性，僅作為開發者辨識用
            position: 'left',
            img: '/static/img/class/img1.jpg',
            video: 'https://www.youtube.com/embed/RkQy3NlG1eo?autoplay=1',
            title: '愛久見人心',
            content: '存一寸光陰，換一個世紀。<br>摘一片苦心，釀一滴蜂蜜。',
            show: false
          },
          {
            rank: '2',
            position: 'right',
            img: '/static/img/class/img2.jpg',
            video: 'https://www.youtube.com/embed/XPD-0b66Wv4?autoplay=1',
            title: '無條件為你',
            content: '無條件為你，不顧明天的安穩。<br>為你變堅強，相信你的眼神。',
            show: false
          },
          {
            rank: '3',
            position: 'left',
            img: '/static/img/class/img3.jpg',
            video: 'https://www.youtube.com/embed/nDchQNPuA0k?autoplay=1',
            title: '勇氣',
            content: '終於作了這個決定，別人怎麼說我不理，<br>只要你也一樣的肯定。',
            show: false
          },
          {
            rank: '4',
            position: 'right',
            img: '/static/img/class/img4.jpg',
            video: 'https://www.youtube.com/embed/K3o6SfwZq_w?autoplay=1',
            title: '如果有一天',
            content: '如果有一天，我們再見面，時間會不會倒退一點？',
            show: false
          },
          {
            rank: '5',
            position: 'left',
            img: '/static/img/class/img5.jpg',
            video: 'https://www.youtube.com/embed/k_l7FVsqUyM?autoplay=1',
            title: '可惜不是你',
            content: '努力為你改變，卻變不了，預留的伏線。<br>以為在你身邊，那也算永遠......',
            show: false
          },
          {
            rank: '6',
            position: 'right',
            img: '/static/img/class/img6.jpg',
            video: 'https://www.youtube.com/embed/thRA-aCRREQ?autoplay=1',
            title: '一夜長大',
            content: '那幾乎成真我們的家，<br>你再也不想嗎？',
            show: false
          },
          {
            rank: '7',
            position: 'left',
            img: '/static/img/class/img7.jpg',
            video: 'https://www.youtube.com/embed/KKRqKsjqySI?autoplay=1',
            title: '崇拜',
            content: '可能的，可以的，真的可惜了。<br>幸福好不容易，怎麼你卻不敢了呢？',
            show: false
          },
          {
            rank: '8',
            position: 'right',
            img: '/static/img/class/img8.jpg',
            video: 'https://www.youtube.com/embed/gE6uuacCjhA?autoplay=1',
            title: '暖暖',
            content: '都可以隨便的，你說的，我都願意去。<br>小火車，擺動的旋律。',
            show: false
          },
          {
            rank: '9',
            position: 'left',
            img: '/static/img/class/img9.jpg',
            video: 'https://www.youtube.com/embed/GAA8ADgR2oI?autoplay=1',
            title: '我喜歡',
            content: '偷偷的聞著你，帶孩子氣的男人香。',
            show: false
          },
          {
            rank: '10',
            position: 'right',
            img: '/static/img/class/img10.jpg',
            video: 'https://www.youtube.com/embed/OsdMP5RiPPs?autoplay=1',
            title: '情歌',
            content: '慢動作繾綣膠卷，重播默片，定格一瞬間。<br>我們在告別的演唱會，說好不再見。',
            show: false
          }
        ]
      }
    },
    methods: {
      showVideo: function (index) {
        this.songs[index].show = true
        this.songs[index].videoTemp = this.songs[index].video
      }
    }
  }
</script>

<style scoped>
  img {
    cursor: pointer;
  }
  /* Wrapper */

  .wrapper {
    position: relative;
  }

  .wrapper>.inner {
    margin: 0 auto;
    width: 61rem;
  }

  .wrapper.style {
    color: #777;
  }

  .wrapper.style h1,
  .wrapper.style h2,
  .wrapper.style h3,
  .wrapper.style h4,
  .wrapper.style h5,
  .wrapper.style h6 {
    color: #555;
  }

  .wrapper.style .feature {
    background-color: #fff;
  }
  /* Video */

  .video {
    border-radius: 0;
    border: 0;
    display: inline-block;
    position: relative;
  }
  /* Feature */

  .feature {
    display: -moz-flex;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    -moz-align-items: center;
    -webkit-align-items: center;
    -ms-align-items: center;
    align-items: center;
    margin-bottom: 6em;
  }

  .feature.left {
    -moz-flex-direction: row;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
  }

  .feature.right {
    -moz-flex-direction: row-reverse;
    -webkit-flex-direction: row-reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }

  .feature .video {
    width: 50%;
  }

  .feature .content {
    padding: 2em 3em 0.1em 3em;
    width: 50%;
  }

  .feature .content p {
    padding-top: 1rem;
    font-size: 17px;
    line-height: 1.5;
  }

  @media screen and (max-width: 1280px) {
    .feature {
      margin-bottom: 4em;
    }

    .feature .content {
      padding: 1em 2em 0.1em 2em;
    }
  }

  @media screen and (max-width: 980px) {
    .feature.left,
    .feature.right {
      -moz-flex-direction: column;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
    }

    .feature .video {
      width: 100%;
    }

    .feature .content {
      padding: 2em 2em 0.1em 2em;
      width: 100%;
    }
  }

  @media screen and (max-width: 736px) {
    .feature {
      margin-bottom: 2em;
    }

    .feature .content {
      padding: 2em 1em 0.1em 1em;
    }
  }

  .feature {
    background-color: rgba(144, 144, 144, 0.075);
  }

  @media screen and (max-width: 1280px) {
    .wrapper>.inner {
      width: 54.5em;
    }
  }

  @media screen and (max-width: 980px) {
    .wrapper>.inner {
      width: 100%;
    }
  }

</style>
