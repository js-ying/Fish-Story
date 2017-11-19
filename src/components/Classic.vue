<template>
  <div id="classic">
    <div class="title">
      <span>10</span>首不容錯過的雋永情歌
      <div class="sub-title">唱出你的一生一世</div>
    </div>

    <div class="wrapper style1">
      <div class="inner">

        <article class="feature left">
          <img src="../assets/img/class/img1.jpg" class="img-responsive" video-source="https://www.youtube.com/embed/RkQy3NlG1eo?autoplay=1"
            onClick="play_video()">
          <span class="video"></span>
          <div class="content">
            <h2>愛久見人心</h2>
            <p>
              存一寸光陰，換一個世紀。<br> 摘一片苦心，釀一滴蜂蜜。
            </p>
          </div>
        </article>

        <article class="feature right">
          <img src="../assets/img/class/img2.jpg" class="img-responsive" video-source="https://www.youtube.com/embed/XPD-0b66Wv4?autoplay=1"
            onClick="play_video(2)">
          <span class="video"></span>
          <div class="content">
            <h2>無條件為你</h2>
            <p>
              無條件為你，不顧明天的安穩。<br> 為你變堅強，相信你的眼神。
            </p>
          </div>
        </article>

        <article class="feature left">
          <img src="../assets/img/class/img3.jpg" class="img-responsive" video-source="https://www.youtube.com/embed/nDchQNPuA0k?autoplay=1"
            onClick="play_video(3)">
          <span class="video"></span>
          <div class="content">
            <h2>勇氣</h2>
            <p>
              終於作了這個決定，別人怎麼說我不理，<br> 只要你也一樣的肯定。
            </p>
          </div>
        </article>

        <article class="feature right">
          <img src="../assets/img/class/img4.jpg" class="img-responsive" video-source="https://www.youtube.com/embed/K3o6SfwZq_w?autoplay=1"
            onClick="play_video(4)">
          <span class="video"></span>
          <div class="content">
            <h2>如果有一天</h2>
            <p>
              如果有一天，我們再見面，時間會不會倒退一點？
            </p>
          </div>
        </article>

        <article class="feature left">
          <img src="../assets/img/class/img5.jpg" class="img-responsive" video-source="https://www.youtube.com/embed/k_l7FVsqUyM?autoplay=1"
            onClick="play_video(5)">
          <span class="video"></span>
          <div class="content">
            <h2>可惜不是你</h2>
            <p>
              努力為你改變，卻變不了，預留的伏線。<br> 以為在你身邊，那也算永遠......
            </p>
          </div>
        </article>

        <article class="feature right">
          <img src="../assets/img/class/img6.jpg" class="img-responsive" video-source="https://www.youtube.com/embed/thRA-aCRREQ?autoplay=1"
            onClick="play_video(6)">
          <span class="video"></span>
          <div class="content">
            <h2>一夜長大</h2>
            <p>
              那幾乎成真我們的家，<br> 你再也不想嗎？
            </p>
          </div>
        </article>

        <article class="feature left">
          <img src="../assets/img/class/img7.jpg" class="img-responsive" video-source="https://www.youtube.com/embed/KKRqKsjqySI?autoplay=1"
            onClick="play_video(7)">
          <span class="video"></span>
          <div class="content">
            <h2>崇拜</h2>
            <p>
              可能的，可以的，真的可惜了。<br> 幸福好不容易，怎麼你卻不敢了呢？
            </p>
          </div>
        </article>

        <article class="feature right">
          <img src="../assets/img/class/img8.jpg" class="img-responsive" video-source="https://www.youtube.com/embed/gE6uuacCjhA?autoplay=1"
            onClick="play_video(8)">
          <span class="video"></span>
          <div class="content">
            <h2>暖暖</h2>
            <p>
              都可以隨便的，你說的，我都願意去。<br> 小火車，擺動的旋律。
            </p>
          </div>
        </article>

        <article class="feature left">
          <img src="../assets/img/class/img9.jpg" class="img-responsive" video-source="https://www.youtube.com/embed/GAA8ADgR2oI?autoplay=1"
            onClick="play_video(9)">
          <span class="video"></span>
          <div class="content">
            <h2>我喜歡</h2>
            <p>
              偷偷的聞著你，帶孩子氣的男人香。
            </p>
          </div>
        </article>

        <article class="feature right">
          <img src="../assets/img/class/img10.jpg" class="img-responsive" video-source="https://www.youtube.com/embed/OsdMP5RiPPs?autoplay=1"
            onClick="play_video(10)">
          <span class="video"></span>
          <div class="content">
            <h2>情歌</h2>
            <p>
              慢動作繾綣膠卷，重播默片，定格一瞬間。<br> 我們在告別的演唱會，說好不再見。
            </p>
          </div>
        </article>

      </div>
    </div>

    <div class="footer">
      每隔一段時間就會透過<a href="vote.html">投票系統</a>的結果來決定經典歌曲TOP10喔！<br> 想要的歌沒在榜上嗎？趕快前去投票！
    </div>

  </div>
</template>

<style scoped>
  #classic {
    overflow-x: hidden;
    font-weight: 200;
  }

  .title {
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 100px;
    letter-spacing: 5px;
  }

  @media screen and (max-width: 1280px) {
    .title {
      margin-bottom: 0px;
    }
  }

  @media screen and (max-width: 480px) {
    .title {
      font-size: 30px;
      padding-left: 45px;
      padding-right: 45px;
    }
  }

  .title span {
    border-bottom: 3px solid #bc7981;
  }

  .sub-title {
    font-size: 25px;
    font-weight: 500;
    color: gray;
  }

  @media screen and (max-width: 480px) {
    .sub-title {
      font-size: 20px;
      margin-bottom: 20px;
    }
  }

  .content h2 {
    border-bottom: 3px solid #bc7981;
  }

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

  .wrapper.style1 {
    color: #777;
  }

  .wrapper.style1 h1,
  .wrapper.style1 h2,
  .wrapper.style1 h3,
  .wrapper.style1 h4,
  .wrapper.style1 h5,
  .wrapper.style1 h6 {
    color: #555;
  }

  .wrapper.style1 .feature {
    background-color: #fff;
  }

  /* Video */
  .video {
    border-radius: 0;
    border: 0;
    display: inline-block;
    position: relative;
    display: none;
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
    .wrapper {
      padding: 6em 0 4em 0;
    }

    .wrapper>.inner {
      width: 70em;
    }
  }

  @media screen and (max-width: 980px) {
    .wrapper {
      padding: 5em 3em 3em 3em;
    }

    .wrapper>.inner {
      width: 100%;
    }
  }

  @media screen and (max-width: 736px) {
    .wrapper {
      padding: 3em 2em 1em 2em;
    }
  }

  @media screen and (max-width: 480px) {
    .wrapper {
      padding: 2em 1em 0.1em 1em;
    }
  }

  .footer {
    text-align: center;
  }

</style>
