<template>
  <div id="wrap" :style="{ height: screenHeight + 'px' }">
    <div id="main" :style="{ top: nowTop + 'px' }">
      <div id="pageUl">
        <div class="page_aaa" v-show="curIndex != 1">
          <ul type="circle">
          </ul>
          <div class="page_homeLine"></div>
          <ul type="circle">
            <div
              v-for="(index) in 5"
              :key="index"
              @click="navTo(index,$event)"
              class="page_whiteRoundBorder"
              :class="{'active': curIndex == index}"
            >
              <li class="page_whiteRound"></li>
              <li
                @click="navTo(1,$event)"
                class="page_rightTreeText"
                v-show="curIndex == index"
                :class="{'page_textActive': curIndex == 1}"
              >{{list[index - 1]}}</li>
            </div>
          </ul>
        </div>
      </div>
      <div
        style="font-size:46px;color:#fff;text-align: center"
        id="page1"
        class="page"
      >
        <slot name="1"></slot>
      </div>
      <div
        style="font-size:46px;color:#fff;text-align: center"
        id="page2"
        class="page"
      >
        <slot name="2"></slot>
      </div>
      <div
        style="font-size:46px;color:#fff;text-align: center"
        id="page3"
        class="page"
      >
        <slot name="3"></slot>
      </div>
      <div
        style="font-size:46px;color:#fff;text-align: center"
        id="page4"
        class="page"
      >
        <slot name="4"></slot>
      </div>
      <div
        style="font-size:46px;color:#fff;text-align: center"
        id="page5"
        class="page"
      >
        <slot name="5"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        list:['主页','服务','案例','关于湜鱼','联系我们'],
        screenWeight: 0, // 屏幕宽度
        screenHeight: 0, // 屏幕高度
        index: 1, // 用于判断翻页
        curIndex: 1, // 当前页的index
        startTime: 0, // 翻屏起始时间
        endTime: 0, // 上一次翻屏结束时间
        nowTop: 0, // 翻屏后top的位置
        pageNum: 0, // 一共有多少页
        main: Object,
        obj: Object,
        endY:0, //结束距离
        startY:0 , //开始距离
        isMove:false
      };
    },
    created(){
      this.$bus.$on('click1',(index)=>{
        this.navTo(index)
      })
      this.$bus.$on('addIndex',()=>{
        let curIndex = this.curIndex
        if(curIndex == 5){
          curIndex  = 0
        }
        this.navTo(curIndex + 1)
      })
    },
    mounted() {
      // 尺寸改变的时候
      window.addEventListener('resize',()=>{
        const screenWeight = document.documentElement.clientWidth;
        const screenHeight = document.documentElement.clientHeight;
        if(screenWeight == this.screenWeight){
          return
        }
        this.screenWeight = screenWeight
        this.screenHeight = screenHeight
        let delta =  this.curIndex - 1;
        this.nowTop = 0 - delta * this.screenHeight;
        this.obj = document.getElementsByTagName("div");
        for (let i = 0; i < this.obj.length; i++) {
          if (this.obj[i].className == "page") {
            this.obj[i].style.height = this.screenHeight + "px";
          }
        }
      })
      this.addEvent()
    },
    methods: {
      addEvent(){
        this.screenWeight = document.documentElement.clientWidth;
        this.screenHeight = document.documentElement.clientHeight;
        this.main = document.getElementById("main");
        this.obj = document.getElementsByTagName("div");
        for (let i = 0; i < this.obj.length; i++) {
          if (this.obj[i].className == "page") {
            this.obj[i].style.height = this.screenHeight + "px";
          }
        }
        this.pageNum = document.querySelectorAll(".page").length;

        // 浏览器兼容
        if (navigator.userAgent.toLowerCase().indexOf("firefox") != -1) {
          document.addEventListener("DOMMouseScroll", this.scrollFun, false);
        } else if (document.addEventListener) {
          document.addEventListener("mousewheel", this.scrollFun, false);
        } else if (document.attachEvent) {
          document.attachEvent("onmousewheel", this.scrollFun);
        } else {
          document.onmousewheel = this.scrollFun;
        }

        document.addEventListener('touchstart',this.touchstart)
        document.addEventListener('touchmove',this.touchmove)
        document.addEventListener('touchend',this.touchend)
      },
      touchstart(e){
       const touch = e.targetTouches[0]
       this.startY = touch.pageY;
      },
      touchmove(e){
        const touch = e.targetTouches[0]
        this.endY = touch.pageY;
        this.isMove = true
      },
      touchend(){
        console.log(this.curIndex)
        const Y = this.endY - this.startY
        const curIndex = this.curIndex
        if(!this.isMove){
          return
        }
        if(Y > 30){
          if(curIndex < 2){
            return this.navTo(5)
          }
          this.navTo(this.curIndex - 1)
        }else if(Y < -30){
          if(curIndex > 4){
            return this.navTo(1)
          }
          this.navTo(this.curIndex + 1)
        }
        this.startY = 0
        this.endY = 0
        this.isMove = false
      },
      navTo(a) {
        this.index = a;
        this.toPage(a);
        this.active = a;
      },
      scrollFun(event) {
        this.startTime = new Date().getTime();
        // mousewheel事件中的 “event.wheelDelta” 属性值：返回的如果是正值说明滚轮是向上滚动
        // DOMMouseScroll事件中的 “event.detail” 属性值：返回的如果是负值说明滚轮是向上滚动
        let delta = event.detail || -event.wheelDelta;
        // 如果当前滚动开始时间和上次滚动结束时间的差值小于1.5s，则不执行翻页动作，这样做是为了实现类似节流的效果
        if (this.startTime - this.endTime > 1500) {
          if (
            delta > 0 &&
            parseInt(this.main.offsetTop) >=
            -(this.screenHeight * (this.pageNum - 2))
          ) {
            // 向下滚动
            this.index++;
            this.toPage(this.index);
          } else if (delta < 0 && parseInt(this.main.offsetTop) < 0) {
            // 向上滚动
            this.index--;
            this.toPage(this.index);
          }
          // 本次翻页结束，记录结束时间，用于下次判断
          this.endTime = new Date().getTime();
        }
      },
      // 翻页
      toPage(index) {
        if (index != this.curIndex) {
          let delta = index - this.curIndex;
          this.nowTop = this.nowTop - delta * this.screenHeight;
          this.curIndex = index;
          this.$store.commit('setCurIndex',index)
          this.$bus.$emit('change',index)
          this.$bus.$emit('click2',index)
        }
      },
    },
  };
</script>
<style lang="scss">
  body, ul, li, a, p, div {
    /*慎删*/
    padding: 0px;
    margin: 0px;
  }
  ul,li{
    list-style: none;
  }
  #wrap {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  #main {
    position: relative;
    transition: top 1.5s;
  }

  .page {
    /*谨删*/
    width: 100%;
    height: 100%;
    margin: 0;
  }

  #pageUl {
    position: fixed;
    right: 10px;
    bottom: 50%;
    z-index:100;
    transform: translateY(50%);
    .page_aaa {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      .page_rightTreeText {
        position: absolute;
        top:50%;
        transform: translate(-50%,-50%);
        left: -20px;
        font-weight: 500;
        margin-bottom: 7px;
        color:#134E90;
        font-size: 13px;
        width:70px;
      }

      .page_textActive {
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #134E90;
      }

      .page_homeLine {
        width: 0.01rem;
        height: 4.86rem;
        background: linear-gradient(
            244deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 1) 50%,
            rgba(255, 255, 255, 0) 100%
        );
        margin: 0 10px;
      }
    }
  }


  /* 页面样式 */
  .page_whiteRoundBorder {
    position: relative;
    padding: 10px;
    border-radius: 50%;
    border: 1px solid red transparent;
    margin-bottom: 10px;
  }
  .page_whiteRound {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #134E90;
  }
  .active {
    border: 1px solid #134E90;
  }

  @media screen and (max-width: 500px) {
    #pageUl{
      transform: translateY(50%);
    }
    .page_rightTreeText {
      display: none !important;
    }
  }

</style>