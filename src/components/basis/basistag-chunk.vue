<template>
  <div class="basistag-chunk">
    <el-row class="boxChunk">
      <el-col>
        <p class="childChunk">基础</p>
        <el-tag closable>默认标签</el-tag>
        <el-tag
          size="medium"
          type="success"
          @close="closeTag(tag)"
          closable>
          中等标签
        </el-tag>
        <el-tag
          size="small"
          type="info"
          closable>
          小型标签
        </el-tag>
        <el-tag
          size="mini"
          type="warning"
          closable>
          超小标签
        </el-tag>
        <el-tag
          size="mini"
          type="danger"
          closable>
          超小标签
        </el-tag>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "basistag-chunk",
    data() {
      return {

      }
    },
    methods:{
      closeTag(tag){
        console.log(tag)
        // this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      }
    }
  }
</script>

<style scoped lang="less">
  .boxChunk {
    margin: 20px 0;
    .childChunk {
      margin-bottom: 10px;
    }
  }
</style>
