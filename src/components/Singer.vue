<template>
  <div class="body-content" id="singer">
    <section id="aboutSinger" class="container content-section">
      <div class="row justify-content-md-center">
        <div class="col-lg-9">
          <div class="shape">
            <div class="shape-text">
              {{ singer.about.type }}
            </div>
          </div>
          <div class="panel">
            <div class="panel-body">
              <h2>{{ singer.about.title }}<br><small class="h2-muted"><i>{{ singer.about.subTitle }}</i></small></h2>
              <hr class="style-seven">
              <img class="img-responsive" :src="'/static/img/' + singer.about.img">
              <div v-html="singer.about.content"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="debut" class="container content-section">
      <div class="row justify-content-md-center">
        <div class="col-lg-9">
          <div class="shape">
            <div class="shape-text">
              {{ singer.debut.type }}
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-body">
              <h2>{{ singer.debut.title }}<br><small class="h2-muted"><i>{{ singer.debut.subTitle }}</i></small></h2>
              <hr class="style-seven">
              <div v-html="singer.debut.content"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="company" class="container content-section">
      <div class="row justify-content-md-center">
        <div class="col-lg-9">
          <div class="shape">
            <div class="shape-text">
              {{ singer.company.type }}
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-body">
              <h2 class="text-center">{{ singer.company.title }}<br><small class="h2-muted"><i class="text-center">{{ singer.company.subTitle }}</i></small></h2>
              <hr class="style-seven">
              <div class="card-columns">
                <div class="card" v-for="content in singer.company.contents">
                  <img class="card-img-top img-fluid" :src="'/static/img/' + content.img">
                  <div class="card-block">
                    <h5 class="card-title"><span class="badge badge-info">{{ content.year }}</span></h5>
                    <p class="card-text">
                      <ul>
                        <li v-for="song in content.songs">{{ song }}</li>
                      </ul>
                      <center><button type="button" class="btn btn-sm btn-primary btn-block" v-popover.top="{ name: content.id }">公司簡介</button></center>
                      <popover :name="content.id">
                        {{ content.about }}
                      </popover>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="ost" class="container content-section">
      <div class="row justify-content-md-center">
        <div class="col-lg-9">
          <div class="shape">
            <div class="shape-text">
              {{ singer.ost.type }}
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-body">
              <h2>{{ singer.ost.title }}<br><small class="h2-muted"><i>{{ singer.ost.subTitle }}</i></small></h2>
              <hr class="style-seven">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th class="table-no">#</th>
                    <th>連續劇</th>
                    <th>片頭曲&片尾曲</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(TV, $index) in singer.ost.TVs">
                    <td class="table-no">{{ $index + 1 }}</td>
                    <td>{{ TV.name }}</td>
                    <td>{{ TV.song }}</td>
                  </tr>
                </tbody>
              </table>
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th class="table-no">#</th>
                    <th>電影</th>
                    <th>主題曲</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(Movie, $index) in singer.ost.Movies">
                    <td class="table-no">{{ $index + 1 }}</td>
                    <td>{{ Movie.name }}</td>
                    <td>{{ Movie.song }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="official" class="container content-section">
      <div class="row justify-content-md-center">
        <div class="col-lg-9">
          <div class="shape">
            <div class="shape-text">
              {{ singer.official.type }}
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-body">
              <h2>{{ singer.official.title }}<br><small class="h2-muted"><i>{{ singer.official.subTitle }}</i></small></h2>
              <hr class="style-seven">
              <div class="row">
                <div class="col" v-for="content in singer.official.contents">
                  <a :href="content.href" target="_blank"><img class="img-responsive" :id="content.id" :src="'/static/img/' + content.img"></a>
                  <p> {{ content.name }} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="footer"></div>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        singer: {
          about: {
            sectionID: 'aboutSinger',
            type: 'About',
            title: '基本介紹',
            subTitle: '她 一個人 有很多個夢',
            img: 'singer_about.jpg',
            content: '<p>梁靜茹，馬來西亞人，出生於1978年6月16日。出道時間為1999年，至今發行了12張錄音室專輯、2張精選輯、3張演唱會專輯。</p><p>膾炙人口的歌曲有《勇氣》、《分手快樂》、《可惜不是你》、《崇拜》、《會呼吸的痛》、《情歌》等等。</p><p>靜茹於2010年結婚，2014年產下一子Anderson，正式升格當媽。</p><p>近期演唱過《小小孩》、《在愛裡等你》、《溫柔》、《可以的話》，以及與范瑋琪合唱《最好的安排》。</p>'
          },
          debut: {
            sectionID: 'debut',
            type: 'Debut',
            title: '出道過程',
            subTitle: '誰帶我踏上 孤獨的絲路',
            content: '<p>梁靜茹在1996年參加馬來西亞的一歌唱比賽獲得了第三名，獲得在馬來西亞滾石唱片發行一張合輯初試啼聲。之後李宗盛聽到了靜茹的聲音後十分感興趣，便約她在新加坡試唱，而李宗盛非常滿意，就簽約了梁靜茹。</p><p>梁靜茹在1997年10月來台灣，開始進行專輯的配唱與籌劃工作，並開始接受中文訓練。但因為水土不服加上李宗盛的嚴格要求，讓梁靜茹承受巨大的壓力，於是主動提出希望回馬來西亞重整自己。</p><p>梁靜茹回馬來西亞後發現自己在台灣太過自閉，於是她選擇到較沒有壓力的民歌餐廳去唱她喜歡的歌，希望能找回自信。她想起李宗盛說過的一句話：「不管在任何狀態唱歌，都要跟當初為什麼要唱歌是一樣的。」，最後在1999年4月回台，並告訴李宗盛：「大哥，我準備好了。」。</p><p>梁靜茹於1999年9月發行自己的第一張個人專輯《一夜長大》，但也許是因為921大地震的緣故取消許多宣傳，這張專輯並沒有引起太大關注。2000年，由光良寫給她的《勇氣》這首歌則讓她一夜成名。</p>'
          },
          company: {
            sectionID: 'company',
            type: 'Record',
            title: '唱片公司',
            subTitle: '你就是我的專屬品牌',
            contents: [
              {
                name: '滾石唱片',
                id: 'rock',
                about: '滾石唱片是臺灣一家大型唱片公司，由段鍾沂、段鍾潭兄弟於1980年創辦，為華人世界中規模最大的唱片業者，目前也是除日本之外亞洲最大的獨立唱片公司。旗下曾擁有魔岩唱片、風雲唱片、大海嘯唱片、電星唱片、火山唱片、龍捲風唱片等子品牌',
                img: 'rock_logo.jpg',
                year: '1995~2006',
                songs: ['一夜長大', '勇氣', '閃亮的星', 'SUNRISE 我喜歡', '美麗人生', '燕尾蝶', '絲路', '戀愛的力量 (精選)', 'Time and Love 演唱會全紀錄 (演唱會)', '愛的大遊行 Live全記錄 (演唱會)']
              },
              {
                name: '相信音樂',
                id: 'bin',
                about: '相信音樂國際股份有限公司（B\'in Music Co. Ltd）是一間以台灣為基地的唱片公司，正式成立於2006年7月1日。由滾石唱片策略長陳勇志及搖滾樂團五月天共同創立，梁靜茹為首位加盟歌手，事業範圍橫跨台灣與香港、中國大陸、馬來西亞。',
                img: 'BinMUSIC_logo.jpg',
                year: '2006~2009',
                songs: ['親親', '崇拜', '靜茹＆情歌—別再為他流淚', '現在開始我愛你 (精選)', '今天情人節 (演唱會)']
              },
              {
                name: '環球唱片',
                id: 'universal',
                about: '環球唱片（Universal Music Group，簡稱 UMG）是全世界最大的唱片公司，隸屬維旺迪集團，它佔有世界唱片市場的25.6%。',
                img: 'universal_logo.jpg',
                year: '2010~',
                songs: ['情歌沒有告訴你', '愛久見人心']
              }
            ]
          },
          ost: {
            sectionID: 'ost',
            type: 'OST',
            title: '電視、電影歌曲',
            subTitle: '原來 你也唱過我的歌',
            TVs: [
              {
                name: '俠女闖天關',
                song: '勇氣'
              },
              {
                name: '楊門女將之女兒當自強',
                song: '在晴朗的一天出發'
              },
              {
                name: '貞女、烈女、豪放女',
                song: '無條件為你'
              },
              {
                name: '神醫俠侶',
                song: '寧夏、接受'
              },
              {
                name: '隋唐英雄傳(動畫)',
                song: '花園'
              },
              {
                name: '吐司男之吻',
                song: '分手快樂'
              },
              {
                name: '愛情合約',
                song: '中間'
              },
              {
                name: '悲傷戀歌',
                song: '可惜不是你'
              },
              {
                name: '大唐雙龍傳',
                song: '親親'
              },
              {
                name: '幸福的抉擇',
                song: '屬於、PK、插曲-「崇拜」'
              },
              {
                name: '敗犬女王',
                song: '沒有如果、愛情之所以為愛情、別再為他流淚 \n 插曲-「用力抱著」「情歌」「天燈」「風笛手」「不敢當」'
              },
              {
                name: '同伊',
                song: '情歌沒有告訴你、你會不會'
              },
              {
                name: '我的完美男人',
                song: '勇氣'
              },
              {
                name: '東門四少',
                song: '偶陣雨、小愛情'
              },
              {
                name: '只因單身在一起',
                song: '在愛裡等你'
              }
            ],
            Movies: [
              {
                name: '最遙遠的距離',
                song: '崇拜'
              },
              {
                name: '新郎不是我',
                song: '如果能在一起(台灣引進中文主題曲)'
              },
              {
                name: '極光之愛',
                song: '小小孩'
              },
              {
                name: '剩者為王',
                song: '可以的話'
              }
            ]
          },
          official: {
            sectionID: 'official',
            type: 'Contact',
            title: '官方社群',
            subTitle: '你是心中的花園 經常開玫瑰',
            contents: [
              {
                name: '梁靜茹個人Facebook',
                id: 'fb_icon',
                href: 'https://www.facebook.com/fishleongmusic/?fref=ts',
                img: 'facebook_icon.png'
              },
              {
                name: '梁靜茹個人Instagram',
                id: 'ig_icon',
                href: 'https://www.instagram.com/fishleong616/',
                img: 'instagram_icon.png'
              }
            ]
          }
        }
      }
    }
  }

</script>

<style scoped>

  #singer {
    text-align: center;
    margin: 0 auto;
  }

  .content-section:not(:first-child) {
    padding-top: 4rem;
  }

  .panel {
    background-color: white;
    padding: 50px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .shape {
    float: right;
    height: 0px;
    width: 0px;
    border-style: solid;
    border-width: 0 100px 60px 0;
    -ms-transform: rotate(360deg);
    /* IE 9 */
    -o-transform: rotate(360deg);
    /* Opera 10.5 */
    -webkit-transform: rotate(360deg);
    /* Safari and Chrome */
    transform: rotate(360deg);
    border-color: rgba(255, 255, 255, 0) #d9534f rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);
  }

  .shape-text {
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    position: relative;
    right: -46px;
    white-space: nowrap;
    -ms-transform: rotate(30deg);
    /* IE 9 */
    -o-transform: rotate(360deg);
    /* Opera 10.5 */
    -webkit-transform: rotate(30deg);
    /* Safari and Chrome */
    transform: rotate(30deg);
  }

  h2 {
    margin: 0 50px;
  }
  /* Flaired edges, by Tomas Theunissen */

  hr.style-seven {
    height: 30px;
    border-style: solid;
    border-color: black;
    border-width: 1px 0 0 0;
    border-radius: 20px;
  }

  hr.style-seven:before {
    /* Not really supposed to work, but does */
    display: block;
    content: "";
    height: 30px;
    margin-top: -31px;
    border-style: solid;
    border-color: black;
    border-width: 0 0 1px 0;
    border-radius: 20px;
  }

  img {
    display: block;
    margin: 0 auto;
    margin-bottom: 40px;
    width: 250px;
    border-radius: 10px;
  }

  #company {
    font-size: 16px;
  }

  #company img {
    margin-bottom: 0px;
    width: 150px;
  }

  .card-text{
    font-size: 16px;
    text-align: left;
  }

  #company ul{
    margin-left: -1rem;
  }

  .vue-popover {
    background: #444;
    color: #f9f9f9;
    line-height: 1.5;
    padding: 15px;
  }

  .vue-popover.dropdown-position-top:before{
    border-top: 6px solid #444;
  }

  .table {
    font-size: 16px;
    text-align: left;
  }

  .table-no {
    width: 80px;
    text-align: center;
  }

  @media(max-width:767px) {
    .table-no {
      width: 50px;
    }
  }

  #official p {
    font-size: 16px;
    padding-top: 10px;
  }

  #official img {
    display: block;
    margin: 0 auto;
    width: 150px;
  }

</style>
