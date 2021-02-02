<template>
    <div class="index container">
      <Header @cancel="cancel" @active="active"/>
         <router-view/>
      <main class="main">
        <Wrap>
          <Home slot="1"/>
          <Service slot="2"/>
          <Case slot="3"/>
          <About slot="4"/>
          <Contact slot="5"/>
        </Wrap>
      </main>
  <!--    侧边栏-->
      <div class="drawer" :class="{show:show}">
        <ul class="navs">
          <li @click="handleClick(item.index)" :key="index" v-for="(item,index) in navList" class="nav" :class="{active1:current == index}">
            {{item.name}}
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  // import Header from '@/components/header'
  import Header from '@/components/header1'
  import Wrap from '@/components/wrap'
  import Home from './home/'
  import Service from './service/'
  import Case from './case/'
  import About from './about'
  import Contact from './contact'
  export default {
    components:{
      // Header,
      Header,
      Home,
      Service,
      Case,
      About,
      Contact,
      Wrap
    },data(){
      return {
        show:false,
        current:0,
        page:0,
        index:1,
        navList: [
          { index:1, name: "主页" },
          { index:2, name: "服务" },
          { index:3, name: "案例" },
          { index:4, name: "关于湜鱼" },
          { index:5, name: "联系我们" },
        ],
        offsetHeight:0
      }
    },
    mounted(){
      this.$bus.$on('click2',(index)=>{
        this.current = index - 1
      })
    },
    methods:{
      active(){
        this.show = true
      },
      cancel(){
        this.show = false
      },
      handleClick(index){
        this.current = index - 1
        this.$bus.$emit('click1',index)
        this.$bus.$emit('changecuohao')
        this.show = false
      },
      addIndex(){
        this.$bus.$emit('addIndex')
      }
    },
    computed:{
      getCur(){
       return this.current == 4 ? 'rgba(255,255,255,.3)':null
      }
    }
  }
</script>

<style lang="scss" scoped>
  .index{
    position: relative;
  }
  .drawer{
    height: 100vh;
    width: 0;
    overflow: hidden;
    position: absolute;
    right: 0;
    top:0;
    background-color: rgba(255,255,255,1);
    z-index:1000;
    padding: 0;
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);
    transition: width .5s;
    .navs{
      padding-top: 180px;
      .nav{
        text-align: center;
        padding: 15px 14px 15px 15px;
        border-bottom-style: solid !important;
        border-bottom-width: 1px;
        border-bottom-color: rgba(204, 204, 204, 0.3);
        cursor: pointer;
        font-size: 13px;
        border-radius: 5px;
        &:hover{
          font-weight: normal;
          background-color: rgba(204, 204, 204, 0.25);
          border-bottom-color: rgba(204, 204, 204, 0);
        }
      }
      .active1 {
        font-weight: normal;
        background-color: rgba(204, 204, 204, 0.25);
        border-bottom-color: rgba(204, 204, 204, 0);
      }
    }
  }
  .show{
    width: 300px;
    padding: 15px;
  }

/*向下箭头*/
/*.arrow {
    opacity: 1;
    animation: arrow 3s cubic-bezier(0.5,0,0.1,1) infinite;
    -webkit-animation: arrow 3s cubic-bezier(0.5,0,0.1,1) infinite;
    transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    position: absolute;
    bottom: 5px;
    left: 50%;
    margin-left: -30px;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    -webkit-border-radius: 100%;
    line-height: 60px;
    text-align: center;
    font-size: 20px;
    color: #134E90;
    border: 1px solid #134E90;
    cursor: pointer;
    overflow: hidden;
    z-index:1000;
    text-align: center;
  }

 */
  @media screen and (max-width: 750px) {
    .drawer{
      height: 0;
      width: 100vw;
      overflow: hidden;
      right: 0;
      top:50px;
      z-index:1000;
      box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);
      transition: height .5s;
      /*background-color: rgb(248, 248, 248);*/
      padding:0 10px;
      .navs{
        padding-top: 0;
        margin: 10px 0;
        .nav{
          border-radius: 5px;
          text-align: center;
          padding: 15px 14px 15px 15px;
          border-bottom: none !important;
          cursor: pointer;
          &:hover{
            font-weight: normal;
            background-color: rgba(204, 204, 204, 0.25);
            border-bottom-color: rgba(204, 204, 204, 0);
          }
        }
        .active1 {
          font-weight: normal;
          background-color: rgba(204, 204, 204, 0.25);
          border-bottom-color: rgba(204, 204, 204, 0);
        }
      }
    }
    .show{
      height: 260px;
    }
  }
</style>
