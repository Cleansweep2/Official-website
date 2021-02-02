<template>
  <div class="header_box">
    <header class="header pc" :style="{background:getCur}">
      <div class="header_container">
        <div class="header_left">
          <img v-show="current == 1" class="header_logo" src="../assets/images/logo2.png"/>
<!--          <img v-show="current == 1" class="header_logo" src="../assets/images/logo2.png"/>-->
<!--          <img v-show="current != 1" class="header_logo" src="../assets/images/logo.png">-->
        </div>
        <div class="header_right">
          <i :style="{color:current == 1 ? 'rgba(255,255,255,1)':null}" v-show="!cuohao" @click.stop="active" class="header_iconfont iconfont icon-gengduo2"></i>
          <i  v-show="cuohao" @click.stop="cancel" class="header_iconfont iconfont1 icon-chahao iconfont"></i>
        </div>
      </div>
    </header>
    <header class="header yd" :style="{background:getCur1}">
        <div class="header_container" :style="{'border-bottom':this.current != 1 || this.cuohao?'#e1e1e1 solid 1px' : null}">
        <div class="header_left">
          <img v-show="current == 1 && !cuohao" class="header_logo" src="../assets/images/logo2.png"/>
          <img v-show="current != 1 || cuohao" class="header_logo" src="../assets/images/logo.png">
        </div>
        <div class="header_right">
          <i :style="{color:current == 1 ? 'rgba(255,255,255,1)':null}" v-show="!cuohao" @click="active" class="header_iconfont iconfont icon-gengduo2"></i>
          <i  v-show="cuohao" @click="cancel" class="header_iconfont icon-chahao iconfont"></i>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
  export default {
    name: "header1",
    data(){
      return {
        cuohao:false,
        current:1,
      }
    },
    created() {
      this.$bus.$on('change',(index)=>{
        this.current = index
      })
      this.$bus.$on('changecuohao',()=>{
        this.cuohao = false
      })
    },
    mounted(){
      document.onclick = (e)=>{
        const class1 = e.target.getAttribute('class')
        if(!class1 || (class1.indexOf('icon-cuohao') == -1 && class1.indexOf('icon-gengduo2') == -1)){
          if(this.cuohao){
            this.$emit('cancel')
            this.cuohao= false
          }
        }
      }
    },
    methods:{
      active(){
        this.$emit('active')
        this.cuohao = true
      },
      cancel(){
        this.$emit('cancel')
        this.cuohao = false
      }
    },
    computed:{
      getCur(){
        return this.current == 1 ? 'rgba(255,255,255,0)':null
      },
      getCur1(){
        return this.current != 1 || this.cuohao?'#fff' : 'rgba(255,255,255,0)'}
      },
  }
</script>

<style lang="scss" scoped>
  .pc{
    display: block;
  }
  .yd{
    display: none;
  }
.header{
  height: 64px;
  width: 100vw;
  position: fixed;
  z-index:1001;
  .header_container{
    display: flex;
    padding: 0 56px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    .header_left{
      .header_logo{
        width: 111px;
        height: 35px;
      }
    }
    .header_right{
      .header_iconfont{
        font-size: 20px;
        line-height: 40px;
        width: 100%;
        color: rgb(119, 119, 119);
        cursor: pointer;
      }
      .iconfont1{
        font-size: 20px;
      }
    }
  }
}

@media screen and (max-width: 750px) {
  .yd{
    display: block;
  }
  .pc{
    display: none;
  }
  .header{
    height: 50px;
    background: #F0F0F0;
    .header_container{
      padding: 0 10px;
      .header_left{
        .header_logo{
          width: 90px;
          height: 28px;
        }
      }
      .header_right{
        .icon-gengduo2{
          font-size: 15px;
        }
        .icon-chahao{
          font-size: 15px;
        }
      }
    }
  }
}
</style>