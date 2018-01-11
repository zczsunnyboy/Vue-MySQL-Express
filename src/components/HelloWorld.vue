<template>
  <div class="hello">
    <el-container>
      <el-header>
        <nav-chunk></nav-chunk>
      </el-header><!--头部-->
      <el-aside>
        <tree-chunk></tree-chunk>
      </el-aside><!--侧边-->
      <el-main>

      </el-main><!--主体-->
    </el-container>
  </div>
</template>

<script>
  import TreeChunk from './tree-chunk'
  import NavChunk from './nav-chunk'

  export default {
    name: 'hello',
    components:{
      TreeChunk,
      NavChunk
    },
    data () {
      return {

      }
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">


</style>
