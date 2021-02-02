<template>
  <div class="case">
    <div class="content">
      <div class="content_in">
        <div class="left ">
          <div class="left_box">
            <ul class="purpose1" >
              <li class="purpose_1">
                <span>精品案例</span>
              </li>
              <li class="purpose_2">
                Excellent Cases
              </li>
            </ul>
            <ul class="list">
              <li class="item" v-for="(item,index) in list" :key="index">
                <div class="item_in" @click="handleClick(index)">
                  <span class="name" :class="{active:index === current}">{{item.name}}</span>
                </div>
                <div :style="{background:current == index ? '#134E90':'#333'}" class="round"></div>
              </li>
            </ul>
          </div>
        </div>
        <div class="right ">
          <div class="bottom_zi">
            <img src="../../assets/images/case/shiyu.png"/>
          </div>
          <div class="left_1">
            <div class="row_1">精品案例</div>
            <div class="row_2 ellipsis">
              {{content.desc}}
            </div>
            <div class="row_3">
              <div @click="goxuqiu" class="btn1">我有需求</div>
              <div @click="goxuqiu" class="btn2">立即咨询</div>
            </div>
          </div>
          <div class="right_1">
            <img :src="content.imgUrl"/>
          </div>
        </div>
      </div>
    </div>


    <div class="content1" >
      <div class="content_in container">
        <div class="bottom_zi">
          <img src="../../assets/images/case/shiyu.png"/>
        </div>
        <ul class="purpose ">
          <li class="purpose_1">
            <span>精品案例</span>
          </li>
          <li class="purpose_2">
            Excellent Cases
          </li>
        </ul>

        <div class="right ">
          <div class="left_1">
            <div class="row_1">精品案例</div>
            <div class="row_2 ellipsis">
              {{content.desc}}
            </div>
            <div class="row_3">
              <div class="btn1" @click="goxuqiu">我有需求</div>
              <div class="btn2" @click="goxuqiu">立即咨询</div>
            </div>
          </div>
          <div class="right_1">
            <img :src="content.imgUrl"/>
          </div>
        </div>

        <div class="left ">
          <ul class="list">
            <li class="item" v-for="(item,index) in list" :key="index">
              <div class="item_in" @click="handleClick(index)">
                <span class="name" :class="{active:index === current}">{{item.name}}</span>
              </div>
              <div :style="{background:current == index ? '#134E90':'#333'}" class="round"></div>
            </li>
          </ul>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  export default {
    components:{

    },
    name: "index",
    data(){
      return {
        current:0,
        content:{},
        list:[
          {
            name:'在线教育',
            content:{
              imgUrl:require('../../assets/images/case/1.png'),
              desc:`完美展示公司品牌直线提升公司品牌知名度将公司品牌化全面发展`,
            }},
          {
            name:'移动电商',
            content:{
              imgUrl:require('../../assets/images/case/4.png'),
              desc:`将商务模式平台化,信息化让商品直接更多的直接面向大众群体实现资源面向更大的受众群体`,
            }},
          {
            name:'企业定制',
            content:{
              imgUrl:require('../../assets/images/case/5.png'),
              desc:`专项化定制按照客户要求,提高用户体验百分百完成客户需求`
            }},
          {
            name:'后台办公',
            content:{
              imgUrl:require('../../assets/images/case/2.png'),
              desc:`将传统物销售业信息化让工作的每一个环节都可进行追溯降低人力成本简化流程`,
            }},
          {
            name:'物资管理',
            content:{
              imgUrl:require('../../assets/images/case/3.png'),
              desc:`将传统物流行业信息化让工作的每一个环节都可进行追溯降低人力成本简化流程`,
            }},
          {
            name:'咨询更多经典案例',
            content:{
              imgUrl:require('../../assets/images/case/1.png'),
              desc:'完美展示公司品牌,直线提升公司品牌知名度,将公司品牌化全面发展',
            }},
          ]
      }
    },
    methods:{
      handleClick(index){
        console.log(index)
        if(index == 5){
          return this.$bus.$emit('click1',5)
        }
        this.current = index
      },
      goxuqiu(){
        this.$bus.$emit('click1',5)
      }
    },
    watch:{
      current:{
        immediate:true,
        handler:function (val) {
          this.content = this.list[val].content
        }
      }
    }
  }
</script>

<style scoped lang="scss">
@import "../../assets/css/comment";
.case{
  height: 100%;
  .content{
    height: 100%;
  }
}
  .content_in{
    height: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    .bottom_zi{
      position: absolute;
      top:20vh;
      left: 40vw;
      z-index: -1;
      img{
        width: 576px;
        height: 148px;
      }
    }
    .left{
      flex:1;
      background: #EBEDEF;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .purpose1,.purpose{
        .purpose_1{
          font-size: 32px;
          font-weight: bold;
          color: #333333;
          line-height: 91px;
        }
        .purpose_2{
          font-size: 24px;
          color: #666666;
        }
      }
    }
    .list{
      padding-top: 50px;
      position: relative;
      .item{
        padding-bottom: 40px;
        position: relative;
        padding-left: 63px;
        .round {
          position: absolute;
          width: 25px;
          height: 25px;
          background: #333333;
          border-radius: 50%;
          left: 0;
          top: 18px;
        }
        .item_in{
          width: auto;
          height: auto;
          display: flex;
          align-items: center;
          .name{
            font-size: 26px;
            cursor: pointer;
            border-radius: 10px;
            padding: 12px 20px;
            font-weight: 400;
            color: #333333;
            border:none;
          }
          .active{
            /*background: #134E90;*/
            color:#134e90;
          }
        }
      }
    }
    .right{
      display: flex;
      align-items: center;
      justify-content: center;
      flex:2;
      .left_1{
        flex-direction: column;
        justify-content: center;
        display: flex;
        width: 260px;
        padding-right: 10px;
        .row_1{
          text-align: right;
          font-size: 25px;
          font-weight: bold;
          color: #333333;
          line-height: 91px;
        }
        .row_2{
          text-align: right;
          font-size: 18px;
          font-weight: 400;
          color: #666666;
          line-height: 30px;
        }
        .row_3{
          display: flex;
          justify-content: space-between;
          padding-top: 30px;
          div{
            cursor: pointer;
            font-size: 16px;
          }
          .btn1{
            border: 2px solid #134E90;
            border-radius: 10px;
            padding:8px 20px;
            color: #134E90;
            &:hover{
              background-color: rgba(19, 78, 144,.2);
              color: #fff;
            }
          }
          .btn2{
            background: #134E90;
            border-radius: 10px;
            padding:8px 20px;
            color: #fff;
          }
        }
      }
      .right_1{
        position: relative;
        width: 600px;
        height: 600px;
        display: flex;
        align-items: center;
        img{
          width: 100%;
          max-height: 600px;
        }
      }
    }
  }

.content1{
  display: none;
}


@media screen and (max-width: 1200px) {
  .content {
    display: none;
  }
  .content1{
    display: block;
  }
  .content_in{
    padding-top: 350px;
    flex-direction: column;
    .bottom_zi{
      top:300px;
      transform: translateX(-5%);
      img{
        width: 576px;
        height: 148px;
      }
    }
    .left{
      background: #fff;
      .purpose1{
        display: none;
      }
    }
    .purpose{
      top:160px;
      position: absolute;
      border-radius: 5px;
      .purpose_1{
        font-size: 50px;
        color: #333;
      }
      .purpose_2{
        padding-top: 12px;
        line-height: 32px;
        font-size: 30px;
        color: #666;
      }
    }
    .list{
      padding-top: 50px;
      display: flex;
      flex-wrap: wrap;
      .item{
        width: 25%;
        padding-bottom: 50px;
        .round {
          width: 30px;
          height: 30px;
          left: 0;
          top: 12px;
        }
        .item_in{
          .name{
            font-size: 23px;
            padding: 15px 25px;
          }
        }
      }
    }
    .right{
      padding-bottom: 70px;
      display: flex;
      justify-content: space-between;
      .left_1{
        flex-direction: column;
        justify-content: center;
        display: flex;
        width: 370px;
        padding-right: 10px;
        .row_1{
          text-align: right;
          font-size: 35px;
          font-weight: bold;
          color: #333333;
          line-height: 91px;
        }
        .row_2{
          text-align: right;
          font-size: 25px;
          font-weight: 400;
          color: #333333;
          line-height: 40px;
          margin-top: 10px;
          margin-bottom: 30px;
        }
        .row_3{
          display: flex;
          justify-content: space-between;
          padding-top: 30px;
          div{
            cursor: pointer;
            font-size: 16px;
          }
          .btn1{
            padding:15px 25px;
            &:hover{
              background-color: rgba(19, 78, 144,.2);
              color: #fff;
            }
          }
          .btn2{
            padding:15px 25px;
          }
        }
      }
      .right_1{
        position: relative;
        width: 700px;
        height: 700px;
        display: flex;
        align-items: center;
        img{
          width: 100%;
          max-height: 700px;
        }
      }
    }
  }
}


@media screen and (max-width: 750px) {

  .content_in{
    padding-top: 250px;
    position: relative;
    display: flex;
    flex-direction: column;
    .bottom_zi{
      top:220px;
      left:20px;
      img{
        width: 500px;
        height: 128px;
      }
    }
    .purpose{
      position: absolute;
      top:70px;
      .purpose_1{
        font-size: 35px;
        font-weight: bold;
        text-align: start;
        color:#333;
      }
      .purpose_2{
        padding-top: 12px;
        line-height: 20px;
        font-size: 30px;
        font-weight: 400;
        color: #333333;
      }
    }
    .list{
      padding-top: 50px;
      position: relative;
      display: flex;
      flex-wrap: wrap;
      .item{
        width: 50%;
        padding-bottom: 30px;
        .round {
          position: absolute;
          width: 15px;
          height: 15px;
          background: #333333;
          border-radius: 50%;
          left: 0;
          top: 10px;
        }
        .item_in{
          .name{
            font-size: 16px;
            padding: 5px 10px;
          }
        }
      }
    }
    .right{
      padding-bottom: 20px;
      display: flex;
      justify-content: space-between;
      .left_1{
        flex-direction: column;
        justify-content: center;
        display: flex;
        width: 200px;
        padding-right: 10px;
        .row_1{
          text-align: right;
          font-size: 25px;
          font-weight: bold;
          color: #333333;
          line-height: 91px;
        }
        .row_2{
          text-align: right;
          font-size: 15px;
          font-weight: 400;
          color: #333333;
          line-height: 30px;
          margin-top: 5px;
          margin-bottom: 10px;
        }
        .row_3{
          display: flex;
          justify-content: space-between;
          padding-top: 30px;
          div{
            cursor: pointer;
            font-size: 14px;
          }
          .btn1{
            padding:5px 10px;
            &:hover{
              background-color: rgba(19, 78, 144,.2);
              color: #fff;
            }
          }
          .btn2{
            padding:5px 10px;
          }
        }
      }
      .right_1{
        position: relative;
        width: 300px;
        height: 348px;
        display: flex;
        align-items: center;
        img{
          width: 100%;
          max-height: 700px;
        }
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .content {
    display: none;
  }
  .content1{
    display: block;
  }
  .content_in{
    width: 85vw;
    position: relative;
    padding-top: 360px;
    display: flex;
    flex-direction: column;
    .bottom_zi{
      top:320px;
      left: 0;
        img{
          width: 620px;
          height: 158px;
        }
    }
    .purpose{
      position: absolute;
      top:130px;
      .purpose_1{
        font-size: 40px;
        font-weight: bold;
        text-align: start;
        color: #333;
      }
      .purpose_2{
        padding-top: 12px;
        line-height: 20px;
        font-size: 30px;
        font-weight: 400;
        color: #666;
      }
    }
    .list{
      padding-top: 50px;
      position: relative;
      display: flex;
      flex-wrap: wrap;
      .item{
        width: 50%;
        padding-bottom: 40px;
        .round {
          position: absolute;
          width: 20px;
          height: 20px;
          background: #333333;
          border-radius: 50%;
          left: 0;
          top: 18px;
        }
        .item_in{
          .name{
            font-size: 24px;
            padding: 10px 20px;
          }
        }
      }
    }
    .right{
      padding-bottom: 20px;
      display: flex;
      justify-content: space-between;
      .left_1{
        flex-direction: column;
        justify-content: center;
        display: flex;
        width: 260px;
        padding-right: 10px;
        .row_1{
          text-align: right;
          font-size: 30px;
          font-weight: bold;
          color: #333333;
          line-height: 91px;
        }
        .row_2{
          text-align: right;
          font-size: 20px;
          font-weight: 400;
          color: #333333;
          line-height: 30px;
          margin-top: 5px;
          margin-bottom: 10px;
          overflow: hidden;
        }
        .row_3{
          display: flex;
          justify-content: space-between;
          padding-top: 30px;
          div{
            cursor: pointer;
            font-size: 14px;
          }
          .btn1{
            padding:5px 10px;
            &:hover{
              background-color: rgba(19, 78, 144,.2);
              color: #fff;
            }
          }
          .btn2{
            padding:5px 10px;
          }
        }
      }
      .right_1{
        position: relative;
        width: 360px;
        height: 406px;
        display: flex;
        align-items: center;
        img{
          width: 100%;
          max-height: 700px;
        }
      }
    }
  }
}

@media screen and (max-width: 400px) {
  .content_in{
    .list{
      .item{
        padding-left:40px;
        .round {
          position: absolute;
          width: 20px;
          height: 20px;
          background: #333333;
          border-radius: 50%;
          left: 0;
          top: 19px;
        }
        .item_in{
          .name{
            font-size: 28px;
            padding: 10px 20px;
          }
        }
      }
    }
  }
}

</style>