<template>
  <div class="home">
    <div class="swiper_box">
      <carousel  :interval="3500" arrow="always">
        <carousel-item v-for="(item,index) in imgList" :key="index">
          <img :src="item.imgUrl" />
        </carousel-item>
      </carousel>
    </div>
    <div class="swiper_box1">
      <carousel  :interval="3500" arrow="always">
        <carousel-item v-for="(item,index) in imgList1" :key="index">
          <img :src="item.imgUrl" />
        </carousel-item>
      </carousel>
    </div>
  </div>
</template>

<script>
  import {Carousel,CarouselItem} from 'element-ui'
export default {
  components: {
    Carousel,
    CarouselItem
  },
  data(){
    return {
      imgList1:[
        {imgUrl:require('@/assets/images/home/bgc1___.jpg')},
        {imgUrl:require('@/assets/images/home/bgc2___.jpg')},
        {imgUrl:require('@/assets/images/home/bgc3___.jpg')}
      ],
      imgList:[
        {imgUrl:require('@/assets/images/home/bgc1__.png')},
        {imgUrl:require('@/assets/images/home/bgc2__.png')},
        {imgUrl:require('@/assets/images/home/bgc3__.png')}
        ],
    }
  }
};
</script>

<style lang="scss">
  .home{
    height: 100%;
  }

.swiper_box ,.swiper_box1{
  width: 100vw;
  height: 100%;
  .el-carousel {
    width: 100vw;
    height: 100%;
  }
  .el-carousel__item {
    width: 100vw;
    height: 100%;
  }
  .el-carousel__arrow{
    display: none;
  }

  .el-carousel__container{
    height: 100%;
  }

  .el-carousel__indicators {
    bottom: 47px;
    z-index: 20 !important;
  }
  .el-carousel__button {
    width: 74px;
    height: 10px;
  }

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

  .swiper_box1{
    display: none;
  }

@media screen and (max-width: 750px) {
  .swiper_box{
    display: none;
  }
  .swiper_box1{
    display: block;
  }
}
</style>
