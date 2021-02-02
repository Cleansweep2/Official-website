<template>
  <div class="about">
    <div class="content">

      <div class="left spacing">
        <img class="img1" src="../../assets/images/about/left.png"/>
        <img class="img2" src="../../assets/images/about/left1.png">
      </div>
      <div class="right ">
        <div class="right_box">
          <div class="bottom_zi">
            <img src="../../assets/images/about/shiyu.png"/>
          </div>
          <div class="title">
            <div class="row_1">关于湜鱼</div>
            <div class="row_2">
            <span class="gs">
              About us
            </span>
            </div>
          </div>
          <div class="right_content">
            <div class="right_content_in">
              <div class="in_1">
                青岛湜鱼网络科技有限公司（以下简称：湜鱼科技），创立于2017年，是国内专业互联网解决方案提供商，专注于移动互联网技术开发和产品运营，湜鱼科技作为国内高端专业互联网解决方案提供商，提供高端APP定制开发、CRM系统定制开发、微信公众号、微信小程序定制开发、高品质网站设计和各行业解决方案等服务。
              </div>
              <div class="in_2">
                公司立足技术服务，专注于打造一支高技术、高效率、高素质的专业技术团队。公司致力于整个IT资源整合，从而可以客户提供科学精准、人性化的专业IT技术服务。
              </div>
            </div>
          </div>
          <div class="right_btn">
            <div class="contact" @click="contact">联系我们</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods:{
      contact(){
        this.$bus.$emit('click1',5)
      }
    }
  }
</script>


<style lang="scss" scoped>
  @import "../../assets/css/comment";
  .img2{
    display: none;
  }
  .about{
    height: 100%;
    position: relative;
    .content{
      height: 100%;
      display: flex;
      /*padding-top: 230px;*/
      .left{
        flex:2;
        height: 100vh;
        background-image:url('../../assets/images/about/left.png');
        /*background-size: ;*/
        img{
          width: 100%;
          height: 100%;
        }
      }
      .right{
        padding-left: 100px;
        flex:3;
        display: flex;
        align-items: center;
        .right_box{
          position: relative;
        }
        .right_btn{
          margin-top: 50px;
          position: relative;
          margin-right: 10vw;
          &::after{
            content: '';
            position: absolute;
            display: block;
            width: 100%;
            border-bottom: 2px solid #999;
            top:-2px;
          }
          .contact{
            font-size: 24px;
            font-weight: 400;
            color: #FFFFFF;
            width: 181px;
            height: 43px;
            background: #005BA2;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }
        }
        .bottom_zi{
          top:-160px;
          position: absolute;
          left: 0px;
          width: 911px;
          height: 216px;
          img{
            height: 100%;
            width: 100%;
          }
        }
        .title{
          text-align: left;
          .row_1{
            font-size: 32px;
            font-weight: 400;
            color: #333333;
            line-height: 50px;
          }
          .row_2{
            font-size: 24px;
            color: #666;
          }
        }
        .right_content{
          padding-right: 10vw;
          margin-top: 72px;
          .right_content_in{
            font-size: 22px;
            font-weight: 400;
            color: #666666;
            line-height: 41px;
            text-align: left;
            div{
              text-indent: 44px;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 991px) {
    .img1{
      display: none;
    }
    .img2{
      display: block;
    }
    .about{
      .content{
        width: 100vw;
        flex-direction: column;
        align-items: center;
        .left{
          width: 100vw;
          height: 538px;
          margin-bottom: 30px;
          flex:2;
        }
        .right{
          width: 85vw;
          padding-left: 0;
          margin-right: 0;
          align-items: flex-start;
          flex:3;
          padding-top: 10px;
          .right_btn{
            display: none;
          }
          .bottom_zi{
            display: none;
          }
          .title{
            .row_1{
              font-size: 40px;
              line-height: 60px;
            }
            .row_2{
              font-size: 30px;
            }
          }
          .right_content{
            margin-top: 40px;
            padding-right: 0;
            .right_content_in{
              font-size: 28px;
              line-height: 60px;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 750px) {
    .about{
      .content{
        .left{
          &.spacing{
            margin-top: 50px;
            width: 100%;
          }
        }
        .right{
          padding-left: 0;
          .title{
            .row_1{
              font-size: 15px;
              line-height: 30px;
            }
            .row_2{
              font-size: 20px;
            }
          }
          .right_content{
            margin-top: 20px;
            .right_content_in{
              font-size: 16px;
              line-height: 40px;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 500px) {
    .about{
      .content{
        .left {
          width: 100vw;
          /*height: 395px;*/
        }
        .right{
          padding-left: 0;
          flex:3;
          .title{
            .row_1{
              font-size: 32px;
              line-height: 30px;
              padding-bottom: 10px;
            }
            .row_2{
              font-size: 24px;
            }
          }
          .right_content{
            margin-top: 30px;
            .right_content_in{
              font-size: 24px;
              line-height: 45px;
            }
          }
        }
      }
    }
  }
</style>