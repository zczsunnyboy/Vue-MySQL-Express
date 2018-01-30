<template>
  <div class="hello">
    <el-container>
      <el-header class="nav-header">
        <nav-chunk></nav-chunk>
      </el-header><!--头部-->
    </el-container>
    <el-container>
      <el-aside class="con-aside" width="200px">
        <tree-chunk @routerKey="keyrouter"></tree-chunk>
      </el-aside><!--侧边-->
      <el-main class="con-main">

        <transition name="fade" mode="out-in">
          <div>
            <el-button type="text" class="route-font">{{$route.name}}</el-button>
            <router-view/>
          </div>
        </transition>
      </el-main><!--主体-->
    </el-container>
  </div>
</template>

<script>
  import TreeChunk from './tree-chunk'
  import NavChunk from './nav-chunk'

  export default {
    name: 'hello',
    components: {
      TreeChunk,
      NavChunk,
    },
    data() {
      return {

      }
    },
    methods: {
      keyrouter(a){
        this.$router.push('/'+a)
      }
    },
    mounted(){
      // this.$router.push('/FormalignChunk')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../assets/css/config";

  .nav-header {
    background: #fafafa;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
  }
  .con-aside {
    float: left;
  }
  .con-main {
    float: right;
  }
  .route-font{
    /*margin-bottom: 30px;*/
  }
</style>
