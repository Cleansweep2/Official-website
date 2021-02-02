<template>
  <footer class="footer">
    <div class="content">
      <div class="content_in">
        <div class="top">
          <div class="left">
            <ul class="items_1">
              <li class="item_1" :key="index" v-for="(item,index) in items1L">
                {{item}}
              </li>
            </ul>
            <ul class="items_2" >
              <li class="item_2" :key="index" v-for="(item,index) in items2L">
                {{item}}
              </li>
            </ul>
          </div>
          <div class="right">
            <div class="left_1">
              <img src="../assets/images/erweima.jpg" />
            </div>
            <div class="right_1">
              <div class="right_item company">青岛湜鱼网络科技有限公司</div>
              <div class="right_item">电话：0532-82158158</div>
              <div class="right_item">邮箱：161683042@qq.com</div>
              <div class="right_item">地址：青岛市黄岛区双珠路西海岸壹号</div>
            </div>
          </div>
        </div>
      </div>
      <div class="bot">
        ©2019湜鱼科技 鲁ICP备17038694号-4
      </div>
      </div>
  </footer>
</template>

<script>
export default {
  data(){
    return {
      items1L:['APP','定制网站','微信平台','管理软件'],
      items2L:['Android','企业网站','公众号','ERP','IOS','门户商城','企业号','CRM','HTML5','购物商城','小程序','OA']
    }
  }
}
</script>

<style lang="scss" scoped>
  .footer{
    position: absolute;
    bottom: 0;
    width: 100vw;
    /*<!--transform: translateY(-100%);-->*/
  }
  .content{
    width: 100vw;
    height: 270px;
    background-color: rgba(19, 78, 144,.85);
    padding-top: 10px;
    .top{
      display: flex;
      .left{
        border-right: 1px solid #fff;
        padding-left: 200px;
        padding-top: 20px;
        flex:1;
        .items_1{
           display: flex;
           flex-wrap: wrap;
           .item_1{
             padding-bottom: 25px;
             text-align: center;
             width: 25%;
             font-size: 20px;
             font-weight: bold;
             color: #FFFFFF;
           }
         }
        .items_2{
          display: flex;
          flex-wrap: wrap;
          .item_2{
            padding-bottom: 15px;
            width: 25%;
            text-align: center;
            font-size: 16px;
            font-weight: 400;
            color: #C8C8C8;
          }
        }
      }
      .right{
        flex:1;
        display: flex;
        padding-top: 20px;
        .right_1{
          margin-left: 40px;
          .right_item{
            padding-bottom: 15px;
            font-size: 16px;
            font-weight: 400;
            color: #C8C8C8;
          }
          .company{
            font-size: 20px;
            font-weight: bold;
            color: #FFFFFF;
            padding-bottom: 25px;
          }
        }
        .left_1{
          height: 150px;
          width: 150px;
          margin-left: 60px;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .bot{
      padding-top: 30px;
      text-align: center;
      font-size: 15px;
      font-weight: 400;
      color: #FFFFFF;
    }
  }

  @media screen and (max-width: 1200px) {
    .content {
      width: 100vw;
      height: 350px;
    }
  }

  @media screen and (max-width: 750px) {
    .content{
      width: 100vw;
      height: 400px;
      padding-top: 5px;
      .top{
        flex-direction: column;
        justify-content: center;
        .left{
          border-right: none;
          padding-left: 0;
          padding-top: 10px;
          .items_1{
            .item_1{
              padding-bottom: 20px;
              font-size: 16px;
            }
          }
          .items_2{
            .item_2{
              padding-bottom: 10px;
              width: 25%;
              font-size: 14px;
            }
          }
        }
        .right{
          padding-top: 20px;
          justify-content: center;
          align-items: center;
          .right_1{
            .right_item{
              padding-bottom: 10px;
              font-size: 14px;
            }
            .company{
              font-size: 18px;
              padding-bottom: 15px;
            }
          }
          .left_1{
            margin-left: 50px;
            height: 114px;
            width: 114px;
          }
        }
      }
      .bot{
        padding-top: 20px;
      }
    }
  }

  @media screen and (max-width: 500px) {
    .content{
      height: 420px;
      .top{
        .left{
          flex:1;
          .items_1{
            .item_1{
              padding-bottom: 20px;
              font-size: 16px;
            }
          }
          .items_2{
            .item_2{
              padding-bottom: 10px;
              font-size: 14px;
            }
          }
        }
        .right{
          padding-top: 20px;
          justify-content: center;
          .right_1{
            margin-left: 40px;
            .right_item{
              padding-bottom: 5px;
              font-size: 20px;
            }
            .company{
              font-size: 20px;
              padding-bottom: 15px;
            }
          }
          .left_1{
            margin-left: 50px;
            height: 150px;
            width: 150px;
          }
        }
        .bot{
          font-size: 20px;
        }
      }
    }
  }

  @media screen and (max-width: 400px) {
    .content{
      height: 450px;
      .top{
        .left{
          padding-top: 10px;
          flex:1;
          .items_1{
            .item_1{
              padding-bottom: 20px;
              font-size: 26px;
            }
          }
          .items_2{
            .item_2{
              padding-bottom: 10px;
              font-size: 24px !important;
            }
          }
        }
        .right{
          padding-top: 20px;
          .right_1{
            margin-left: 40px;
            .right_item{
              padding-bottom: 3px;
              font-size: 20px;
            }
            .company{
              font-size: 20px;
              padding-bottom: 10px;
            }
          }
          .left_1{
            margin-left: 50px;
          }
        }
        .bot{
          font-size: 20px;
        }
      }
    }
  }

  @media screen and (max-width: 350px) {
    .content{
      height: 510px;
    }
  }
</style>