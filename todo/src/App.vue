<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
/* global CSS */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-image: url("./assets/background.gif"); /* 배경 이미지 경로 설정 */
  background-size: cover;
  background-position: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
