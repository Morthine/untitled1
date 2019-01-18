<template>

  <div>


    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="../../images/shuijiao.jpg">
          <div class="mui-media-body">
            幸福
            <p class="mui-ellipsis">
              <span>发表时间：2019-01-18</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>点击：10次</span>
            </p>

          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="../../images/muwu.jpg">
          <div class="mui-media-body">
            木屋
            <p class="mui-ellipsis">

              <span>发表时间：2019-01-18</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>点击：10次</span>
            </p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="../../images/cbd.jpg">
          <div class="mui-media-body">
            CBD
            <p class="mui-ellipsis">
              <span>发表时间：2019-01-18</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>点击：10次</span>
            </p>
          </div>
        </a>
      </li>

    </ul>


  </div>

</template>

<script>
  export default {
    name: 'NewList'
  }
</script>

<style  scoped>

  .mui-table-view div{
    font-size: 14px;

    }

  .mui-table-view .mui-ellipsis{

    font-size: 12px;
    color: #007aff;
    display: flex;
    justify-content: space-between;

  }




</style>
