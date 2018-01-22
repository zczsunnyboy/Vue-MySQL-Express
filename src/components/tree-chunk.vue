<template>
  <div class="tree-chunk">
    <el-radio-group v-model="isCollapse">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>

    <el-menu
             unique-opened
             class="el-menu-vertical-demo"
             @open="handleOpen"
             @close="handleClose"
             @select="handleSelect"
             style="height: 450px"
             :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>基础</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="BasisiconChunk">Icon图标</el-menu-item>
          <el-menu-item index="BasisbuttonChunk">Button按钮</el-menu-item>
          <el-menu-item index="BasisradioChunk">Radio单选框</el-menu-item>
          <el-menu-item index="BasischeckboxChunk">Checkbox多选框</el-menu-item>
          <el-menu-item index="BasisinputChunk">Input输入框</el-menu-item>
          <el-menu-item index="BasisnumberChunk">计数器</el-menu-item>
          <el-menu-item index="BasisselectChunk">Select选择器</el-menu-item>
          <el-menu-item index="BasiscascaderChunk">Cascader级联选择器</el-menu-item>
          <el-menu-item index="BasisswitchChunk">Switch开关</el-menu-item>
          <el-menu-item index="BasissliderChunk">Slider滑块</el-menu-item>
          <el-menu-item index="BasistimeChunk">时间选择器</el-menu-item>
          <el-menu-item index="BasisdateChunk">日期选择器</el-menu-item>
          <el-menu-item index="BasisdatetimeChunk">日期时间选择器</el-menu-item>
          <el-menu-item index="BasisupdataChunk">Updata上传</el-menu-item>
          <el-menu-item index="BasisrateChunk">评分</el-menu-item>
          <el-menu-item index="BasiscolorChunk">颜色选择器</el-menu-item>
          <el-menu-item index="BasistransferChunk">穿梭器</el-menu-item>
          <el-menu-item index="BasistagChunk">标签</el-menu-item>
          <el-menu-item index="BasisprogressChunk">Progress进度条</el-menu-item>
          <el-menu-item index="BasisbadgeChunk">Badge标记</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
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
          <el-menu-item index="TablefluidChunk">流体表格</el-menu-item>
          <el-menu-item index="TablemoreheadChunk">多级表头</el-menu-item>
          <el-menu-item index="TablecheckboxChunk">多选表格</el-menu-item>
          <el-menu-item index="TableexpandChunk">展开表格</el-menu-item>
          <el-menu-item index="TablemergeChunk">合并表格</el-menu-item>
        </el-submenu>
        <el-submenu index="1-3">
          <span slot="title">Tree</span>
          <el-menu-item index="TreebasisChunk">Tree基础</el-menu-item>
          <el-menu-item index="TreelazyChunk">Tree懒加载</el-menu-item>
          <el-menu-item index="TreedisableChunk">Tree禁用</el-menu-item>

        </el-submenu>
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
