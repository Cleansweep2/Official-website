<template>
  <div class="service">
    <div class="content container">
      <ul class="purpose">
        <li class="purpose_1">
          <span>我们的服务</span>
        </li>
        <li class="purpose_2">
          Our Service
        </li>
      </ul>
        <div class="bottom_zi">
<!--        SHIYU-->
<!--        <img src="../../assets/images/service/shiyu.png"/>-->
      </div>
      <div class="list" >
        <div class="item" :key="index" v-for="(item,index) in list">
          <div class="item_in">
            <img class="bgc" :src="item.imgUrl" />
            <div class="bottom">
              <div class="bottom_in">
                <div class="top_1">
                  <img src="../../assets/images/service/anzhuo.png"/>
                  <img src="../../assets/images/service/ios.png"/>
                  <img src="../../assets/images/service/h5.png"/>
<!--                  <div class="img">-->
<!--                    <img src="../../assets/images/service/anzhuo.png"/>-->
<!--                  </div>-->
<!--                  <div class="img">-->
<!--                    <img src="../../assets/images/service/ios.png"/>-->
<!--                  </div>-->
<!--                  <div class="img">-->
<!--                    <img src="../../assets/images/service/h5.png"/>-->
<!--                  </div>-->
                </div>
                <div class="bottom_1 ellipsis">
                  {{item.content}}
                </div>
              </div>
            </div>
            <div class="title">{{item.title}}</div>
            <div class="mask"></div>
            <div class="title1">{{item.title}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data(){
    return {
      list:[
        {
          imgUrl:require('../../assets/images/service/1.png'),
          title:'后台系统定制开发',
          content:'专注企业系统后台开发研发创造有活力的品牌网站提升用户体验和品牌价值感'
        },
        {
          imgUrl:require('../../assets/images/service/2.png'),
          title:'企业网站定制设计',
          content:'专注企业网站定制开发研发创造有活力的品牌网站提升用户体验和品牌价值感'
        },
        {
          imgUrl:require('../../assets/images/service/3.png'),
          title:'微信小程序定制开发',
          content:'专注小程序定制开发研发创造有活力的品牌网站提升用户体验和品牌价值感'
        },{
          imgUrl:require('../../assets/images/service/4.png'),
          title:'软件系统定制开发',
          content:'专注软件系统定制开发研发创造有活力的品牌网站提升用户体验和品牌价值感'
        }
      ]
    }
  },
  created() {

  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/comment";
.service{
  height: 100%;
  background-image:url('../../assets/images/service/bgc1.png');
  background-size: contain;
}
.title1{
  position: absolute;
  display: none;
  bottom: -50px;
  text-align: center;
  width: 100%;
  color: #333333;
  font-size: 22px;
  z-index: 10000;
}
  .content{
    position: relative;
    padding-top: 220px;
    .purpose{
      position: absolute;
      top:90px;
      //max-width: 400px !important;
      .purpose_1{
        font-size: 32px;
        font-weight: bold;
        color:#333;
        text-align: center;
        span{
          border-radius: 4px;
        }
      }
      .purpose_2{
        padding-top: 12px;
        line-height: 32px;
        font-size: 24px;
        font-weight: 400;
        color: #666;
      }
    }
    .bottom_zi{
      position: absolute;
      bottom: -100px;
      left: 0;
      width: 575px;
      height: 148px;
      img{
        height: 100%;
        width: 100%;
      }
    }
    .list{
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .item{
        position: relative;
        /*flex:1;*/
        /*padding: 20px;*/
        .item_in{
          overflow: hidden;
          position: relative;
          width: 300px;
          /*height: 300px;*/
          height: 445px;
          border-radius: 10px;
          transition: box-shadow .5s;
          img{
            /*position: absolute;*/
            width: 100% !important;
            height: 100% !important;
            border-radius: 10px;
            transition: all .5s;
          }
          .title{
            position: absolute;
            z-index:10;
            font-size: 16px;
            font-weight: 400;
            color: #FFFFFF;
            left: 20px;
            top:10px;
            width: 22px;
          }
          .mask{
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,.48);
            border-radius: 10px;
            z-index:9;
            transition: background-color .5s;
          }
          .bottom{
            position: absolute;
            width: 100%;
            height: 0;
            bottom: 0;
            overflow: hidden;
            /*height: 40%;*/
            background-color: rgba(0,0,0,.48);
            transition: height .5s;
            .bottom_in{
              padding:0 40px;
              .top_1{
                display: flex;
                justify-content: space-between;
                padding: 10px 10px 15px 10px;
                /*.img{*/
                /*  width: 30px !important;*/
                /*  height: 30px !important;*/

                  img{
                    border-radius: 50%;
                    width: 30px !important;
                    height: 30px !important;
                  }
                /*}*/
              }
              .bottom_1{
                text-align: center;
                font-size: 14px;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 22px;
              }
            }
          }
          &:hover .bgc{
            transform: scale(1.2);
         }
          &:hover .mask{
            background-color: rgba(0,0,0,0);
          }
          &:hover .bottom{
            height: 40%;
          }
          &:hover .title{
            display: none;
          }
          &:hover{
            box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.5);
          }
        }
      }
    }
  }

@media screen and (max-width: 1200px) {
  .content{
    width: 50vw;
    padding-top: 320px;
    .purpose{
      top:160px;
      .purpose_1{
        font-size: 50px;
      }
      .purpose_2{
        font-size: 31px;
      }
    }
    .bottom_zi{
      bottom: -70px;
    }
    .list{
      .item{
        padding-bottom: 20px;
        .item_in {
          width: 400px;
          height: 532px;
          .bottom_1{
            line-height: 22px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 750px) {
  .title{
    display: none !important;
  }
  .title1{
    display: block !important;
    font-size: 20px;
    color: #333;
  }
  .mask{
    display: none !important;
  }

  .content {
    padding-top: 220px;
    width: 70vw;
    .purpose{
      position: absolute;
      top:92px;
      .purpose_1{
        font-size: 37px;
      }
      .purpose_2{
        font-size: 32px;
      }
    }
    .bottom_zi{
      top:100px;
      left:70px;
    }
    .list {
      .item {
        padding-bottom: 20px;
        .item_in {
          overflow: inherit;
          height: 286px;
          width: 220px;
          .bottom{
            display: none;
          }
          &:hover .bgc{
            transform: scale(1);
          }
        }
      }
      .item:nth-of-type(1){
        padding-bottom: 60px;
      }
    }
  }
  }

@media screen and (max-width: 550px) {
    .title1{
    display: block;
    font-size: 20px;
    z-index:100;
  }
  .content {
    padding-top: 290px;
    width: 80vw;
    .purpose{
      top:130px;
    }
    .bottom_zi{
      top:190px;
      left:100px;
    }
    .list {
      .item {
        padding-bottom: 100px;
        .item_in {
          height: 350px;
          width: 270px;
        }
      }
    }
  }
}


@media screen and (max-width: 400px) {

  .title1{
    font-size: 28px;
  }

  .content {
    .purpose{
      .purpose_1{
        font-size: 40px;
      }
      .purpose_2{
        font-size: 30px;
      }
    }
    .list {
      .item {
        .item_in {
          height: 360px;
          width: 277px;
        }
      }
    }
  }
}

</style>
