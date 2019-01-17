<template>


<div>
  <mt-swipe :auto="4000">
    <mt-swipe-item><img src="../../css/5c12864369f4a7409.jpg_fo710.jpg"  height="100%"  width="100%" alt=""></mt-swipe-item>
    <mt-swipe-item><img src="../../css/5c34466130ebc879.png_e600.png"  height="100%"  width="100%" alt=""></mt-swipe-item>
    <mt-swipe-item><img src="../../css/20180104094446953.jpg"  height="100%"  width="100%" alt=""></mt-swipe-item>
  </mt-swipe>




  <ul class="mui-table-view mui-grid-view mui-grid-9">
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">

      <router-link to="/home/newslist">

      <span class="mui-icon mui-icon-home"></span>
      <div class="mui-media-body">新闻资讯</div>
      </router-link></li>

    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
      <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
      <div class="mui-media-body">Email</div></a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
      <span class="mui-icon mui-icon-chatbubble"></span>
      <div class="mui-media-body">Chat</div></a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
      <span class="mui-icon mui-icon-location"></span>
      <div class="mui-media-body">location</div></a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
      <span class="mui-icon mui-icon-search"></span>
      <div class="mui-media-body">Search</div></a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
      <span class="mui-icon mui-icon-phone"></span>
      <div class="mui-media-body">Phone</div></a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
      <span class="mui-icon mui-icon-gear"></span>
      <div class="mui-media-body">Setting</div></a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
      <span class="mui-icon mui-icon-info"></span>
      <div class="mui-media-body">about</div></a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
      <span class="mui-icon mui-icon-more"></span>
      <div class="mui-media-body">more</div></a></li>
  </ul>
</div>

</template>

<script>

</script>

<style scoped>
  .mint-swipe{
    height: 200px;

  }
  .mint-swipe-item:nth-child(3){
    background-color: red;
  }
  .mint-swipe-item:nth-child(1){
    background-color: blue;
  }
  .mint-swipe-item:nth-child(2){
    background-color: pink;
  }
</style>
