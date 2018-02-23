<template>
  <div class="container" id="album" ref="">
    <div class="form-inline">
      <button type="button" class="btn btn-danger">專輯列表</button>
      <button type="button" class="btn btn-danger">展開</button>
      <select class="form-control" id="display-methods">
        <option value="all">全部顯示</option>
        <option value="all">錄音室專輯</option>
        <option>演唱會專輯</option>
        <option>精選輯</option>
      </select>
    </div>
    <div class="row" id="albums-display">
      <div class="col-lg-2 col-md-3 col-sm-4" v-for="(album, $index) in albums">
        <a href="#" data-toggle="collapse" :data-target="'#'+$index">
          <img class="img-fluid img-thumbnail" :src="'/static/'+album.album_img">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
let axios = require('axios')
export default {
  data () {
    return {
      albums: []
    }
  },
  mounted: function () {
    axios.get('/static/js/albums.json')
      .then((response) => {
        this.albums = response.data.albums
      })
      .catch((error) => {
        alert(error.message)
      })
  },
  methods: {
    showDetail: function (index) {
    }
  }
}
</script>

<style scoped>
  .btn{
    margin-right: 10px;
  }
  #display-methods{
    width: 200px;
  }
  #albums-display{
    padding-top: 20px;
  }
  #albums-display .img-thumbnail{
    margin-bottom: 30px;
  }
</style>
