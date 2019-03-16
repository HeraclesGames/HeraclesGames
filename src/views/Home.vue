<template>
  <div class="home">
    <div class="header">
  		<img class="bg-header" src="https://github.com/HeraclesGames/HeraclesGames/raw/master/src/assets/images/fire_game.PNG" style="width: 100%; height: auto;">
      <div class="header-title">
        <h4>Heracles Games</h4>
        <p>Making games because I feel like it :)</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "home"
};
</script>

<style lang="scss">

  .header {
    margin: 0;
    position: relative;
  }

  .header:before {
    content: "";
    margin: 0;
    width: 100%;
    height: 99.5%;
    position: absolute;
    background: rgba(50, 48, 59, 0.329);
  }

  img .bg-header {
    margin: 0;
  }
  
  .header-title {
    text-align: center;
    position: absolute;
    top: 20%;
    left: 25%;
    right: 25%;
    width: 50%;
    color: white;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
  }

  .header-title h4 {
    font: bold 48px sans-serif;
    text-shadow: 2px 2px 8px rgb(0, 0, 0);
  }

  .header-title p {
    font: bold 32px sans-serif;
    text-shadow: 2px 2px 8px rgb(0, 0, 0);
  }
</style>

