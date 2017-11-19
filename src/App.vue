<template>
  <div id="app">
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      <router-link to="/" class="navbar-brand">Fish Story 梁靜茹</router-link>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/new" class="nav-link">最新消息</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/singer" class="nav-link">歌手介紹</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/classic" class="nav-link">經典歌曲</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/album" class="nav-link">專輯列表</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/vote" class="nav-link">投票專區</router-link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/signup" class="nav-link">註冊</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/signin" class="nav-link">登入</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }

  #app a {
    color: #591212;
  }

  #app a:hover {
    color: #b24949;
  }

  .navbar {
    background-color: #E8C9C9;
    margin-bottom: 4rem;
  }

  body {
    background-color: #FFF0F0;
    font-size: 18px;
    margin-bottom: 4rem;
  }

  .footer {
    margin-top: 7rem;
  }

</style>
