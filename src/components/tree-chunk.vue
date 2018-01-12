<template>
  <div class="tree-chunk">
    <el-radio-group v-model="isCollapse">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>

    <el-menu default-active="FormalignChunk"
             class="el-menu-vertical-demo"
             @open="handleOpen"
             @close="handleClose"
             @select="handleSelect"
             :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>示例</span>
        </template>
        <el-submenu index="1-1">
          <span slot="title">表单</span>
          <el-menu-item index="FormalignChunk">表单对齐方式</el-menu-item>
          <el-menu-item index="FormvalidatorChunk">表单验证</el-menu-item>
          <el-menu-item index="FormselfvalidatorChunk">表单自定义验证</el-menu-item>
        </el-submenu>
        <el-submenu index="1-2">
          <span slot="title">表格</span>
          <el-menu-item index="TablestandardChunk">标准表格</el-menu-item>
          <el-menu-item index="FormvalidatorChunk">表单验证</el-menu-item>
          <el-menu-item index="FormselfvalidatorChunk">表单自定义验证</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>导航二</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>导航三</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "tree-chunk",
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key,keyPath){
        this.$emit('routerKey',key)
      }
    }
  }
</script>

<style scoped lang="less">
  .tree-chunk{
    margin-top: 30px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
