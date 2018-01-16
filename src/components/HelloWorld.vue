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
        <keep-alive>
          <component :is="currentView"></component>
        </keep-alive>
      </el-main><!--主体-->
    </el-container>
  </div>
</template>

<script>
  import TreeChunk from './tree-chunk'
  import NavChunk from './nav-chunk'
  import FormalignChunk from './form/formalign-chunk'
  import FormvalidatorChunk from './form/formvalidator-chunk'
  import FormselfvalidatorChunk from './form/formselfvalidator-chunk'
  import TablestandardChunk from './table/tablestandard-chunk'
  import TablefluidChunk from './table/tablefluid-chunk'
  import TablemoreheadChunk from './table/tablemorehead-chunk'
  import TablecheckboxChunk from './table/tablecheckbox-chunk'
  import TableexpandChunk from './table/tableexpand-chunk'
  import TablemergeChunk from './table/tablemerge-chunk'
  import BasisiconChunk from './basis/basisicon-chunk'
  import BasisbuttonChunk from './basis/basisbutton-chunk'
  import BasisradioChunk from './basis/basisradio-chunk'
  import BasischeckboxChunk from './basis/basischeckbox-chunk'
  import BasisinputChunk from './basis/basisinput-chunk'

  export default {
    name: 'hello',
    components: {
      TreeChunk,
      NavChunk,
      FormalignChunk,
      FormvalidatorChunk,
      FormselfvalidatorChunk,
      TablestandardChunk,
      TablefluidChunk,
      TablemoreheadChunk,
      TablecheckboxChunk,
      TableexpandChunk,
      TablemergeChunk,
      BasisiconChunk,
      BasisbuttonChunk,
      BasisradioChunk,
      BasischeckboxChunk,
      BasisinputChunk
    },
    data() {
      return {
        currentView: 'FormalignChunk'
      }
    },
    methods: {
      keyrouter(a){
        this.currentView=a
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
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
</style>
