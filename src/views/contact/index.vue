<template>
  <div class="contact">
    <div class="content container">
      <ul class="purpose ">
        <li class="purpose_1">
          <span>联系我们</span>
        </li>
        <li class="purpose_2">
          Contact us
        </li>
      </ul>
<!--      <div class="bottom_zi1 animate__backInRight animate__animated">-->
<!--        <img src="../../assets/images/shiyu.png"/>-->
<!--      </div>-->
      <div class="content_in">
<!--        <div class="bottom_zi animate__backInRight animate__animated">-->
<!--          <img src="../../assets/images/shiyu.png"/>-->
<!--        </div>-->
        <div class="left ">
          <ul class="inputs">
            <li class="name item">
              <div>你的姓名</div><div class="input"><input @blur="blur" @focus="focus"/></div>
            </li>
            <li class="company item">
              <div>你的公司</div><div class="input"><input @blur="blur" @focus="focus"/></div>
            </li>
            <li class="phone item">
              <div>联系电话</div><div class="input"><input @blur="blur" @focus="focus"/></div>
            </li>
          </ul>
        </div>
        <div class="right ">
          <div class="item_desc">
            <div class="desc">请简单描述你需要开发的项目：</div>
            <div class="textarea">
              <textarea @blur="blur" @focus="focus"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom container">
      <ElBottom type="primary">提交</ElBottom>
    </div>
    <div class="yd_footer">
      <Footer v-show="show"/>
    </div>
    <div class="pc_footer">
      <Footer />
    </div>
  </div>
</template>

<script>
  import Components from 'element-ui'
  import Footer from '@/components/footer'
  // const ElInput = Components.Input
  const ElBottom = Components.Button
  export default {
    name: "index",
    data(){
      return {
        show:true
      }
    },
    components:{
      // ElInput,
      ElBottom,
      Footer,
    },
    methods:{
      focus(){
        this.show = false
      },
      blur(){
        this.show = true
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/comment";
  .yd_footer{
    display: none;
  }
.contact{
  height: 100%;
  position: relative;
  background-image: url('../../assets/images/contact/bgc1.png');
  background-size: contain;
}
  .content{
    padding-top: 280px;
    .purpose{
      position: absolute;
      top:96px;
      .purpose_1{
        font-size: 40px;
        font-weight: bold;
        color: #333;
        text-align: center;
        span{
          border-radius: 4px;
        }
      }
      .purpose_2{
        padding-top: 12px;
        line-height: 32px;
        font-size: 25px;
        font-weight: 400;
        color: #666;
      }
    }
    .content_in{
      display: flex;
      position: relative;
    }
   .left{
     flex:1;
     padding-right: 40px;
     .inputs{
       .item{
         display: flex;
         margin-bottom: 50px;
         div{
           display: flex;
           align-items: center;
           font-size: 17px;
           font-weight: 400;
           color: #333333;
         }
         .input{
           flex:1;
           padding-left: 20px;
           height: 50px;
           input{
            width: 100%;
            height: 100%;
             background-color:  #E3E3E3;
            border: none;
           }
         }
       }
     }
   }
    .right{
      flex:1;
      padding-left: 40px;
      .item_desc{
        .desc{
          font-size: 17px;
          font-weight: 400;
          color: #333333;
          padding-bottom: 25px;
        }
        .textarea{
          width: 100%;
          textarea{
            border:none;
            width: 100%;
            height: 200px;
            background-color: #E3E3E3;
          }
        }
      }
    }
  }
  .bottom{
    display: flex;
    justify-content: flex-end;
  }

  @media screen and (max-width: 1200px) {
    .content{
      padding-top: 310px;
      .purpose{
        top:160px;
        .purpose_1{
          font-size: 45px;
        }
        .purpose_2{
          font-size: 30px;
        }
      }
      .content_in{
        flex-direction: column;
        justify-content: center;
      }
      .left{
        padding-right: 0;
        .inputs{
          .item{
            span{
              font-size: 25px;
            }
            .input{
              height: 70px;
            }
          }
        }
      }
      .right{
        padding-left: 0;
        .item_desc{
          .desc{
            font-size: 25px;
            padding-bottom: 25px;
          }
          .textarea{
            width: 100%;
            textarea{
              height: 240px;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 750px) {
    .pc_footer{
      display: none;
    }
    .yd_footer{
      display: block;
    }
    .bottom{
      width: 85vw;
    }
    .content{
      width: 85vw;
      padding-top: 120px;
      .purpose{
        top:120px;
        .purpose_1{
          font-size: 25px;
        }
        .purpose_2{
          font-size: 18px;
        }
      }
      .content_in{
        flex-direction: column;
        justify-content: center;
      }
      .left{
        .inputs{
          .item{
            margin-bottom: 25px;
            span{
              font-size: 16px;
            }
            .input{
              padding-left: 20px;
              height: 35px;
            }
          }
        }
      }
      .right{
        padding-left: 0;
        .item_desc{
          .desc{
            font-size: 16px;
            padding-bottom: 25px;
          }
          .textarea{
            width: 100%;
            textarea{
              height: 80px;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 500px) {
    .content{
      padding-top: 270px;
      .purpose{
        top:130px;
        .purpose_1{
          font-size: 40px;
        }
        .purpose_2{
          font-size: 30px;
        }
      }
      .left{
        padding-right: 0;
        .inputs{
          .item{
            margin-bottom: 36px;
            span{
              font-size: 25px;
            }
            .input{
              height: 50px;
            }
          }
        }
      }
      .right{
        padding-left: 0;
        .item_desc{
          .desc{
            font-size: 25px;
            padding-bottom: 25px;
          }
          .textarea{
            width: 100%;
            textarea{
              height: 200px;
            }
          }
        }
      }
    }
    .el-button{
      padding:6px 10px;
    }
  }

  @media screen and (max-width: 350px) {
    .content{
      .left{
        padding-right: 0;
        .inputs{
          .item{
            span{
              font-size: 25px;
            }
            .input{
              padding-left: 20px;
              height: 50px;
            }
          }
        }
      }
      .right{
        padding-left: 0;
        .item_desc{
          .desc{
            font-size: 25px;
            padding-bottom: 25px;
          }
          .textarea{
            width: 100%;
            textarea{
              height: 150px;
            }
          }
        }
      }
    }
  }
</style>