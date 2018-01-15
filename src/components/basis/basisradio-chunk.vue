<template>
  <div class="basisradio-chunk">
    <div class="PChunk">
      <p class="childChunk">基础单选</p>
      <el-radio v-model="radio" label="1">男</el-radio>
      <el-radio v-model="radio" label="2">女</el-radio>
    </div>

    <div class="PChunk">
      <p class="childChunk">禁用单选</p>
      <el-radio disabled v-model="radio1" label="禁用">男</el-radio>
      <el-radio disabled v-model="radio1" label="选中且禁用">女</el-radio>
    </div>

    <div class="PChunk">
      <p class="childChunk">单选组</p>
      <el-radio-group v-model="radio2">
        <el-radio :label="3">男</el-radio>
        <el-radio :label="6">女</el-radio>
        <el-radio :label="9">人妖</el-radio>
      </el-radio-group>
    </div>

    <div class="PChunk">
      <p class="childChunk">按钮样式</p>
      <p class="PChunk">
        <el-radio-group v-model="radio3">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </p>
      <p class="PChunk">
        <el-radio-group v-model="radio4" size="medium">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </p>
      <p class="PChunk">
        <el-radio-group v-model="radio5" size="small">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京" disabled></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </p>
      <p class="PChunk">
        <el-radio-group v-model="radio6" disabled size="mini">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "basisradio-chunk",
    data() {
      return {
        radio: "",
        radio1: '',
        radio2: "",
        radio3: '',
        radio4: '',
        radio5: '',
        radio6: '',
      }
    }
  }
</script>

<style scoped>
  .PChunk {
    margin: 20px 0;
  }

  .childChunk {
    margin-bottom: 10px;
  }
</style>
